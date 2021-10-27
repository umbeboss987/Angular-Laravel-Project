<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\User;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $req)
    {
        $credentials = $req->only('name', 'password');
       try {
            if(!$token =auth()->attempt($credentials)){
                return response()->json(['message' => 'Invalid credentials', 401]);            
            }else{

                $user = User::where('name', $req->input('name'))->first();
                $login = auth()->login($user);
                $data['token'] = auth()->claims([
                    'user_id' => $user->id,
                    'password' => $user->password
                ])->attempt($credentials);
         
                $response['status'] = 1;
                $response['code'] = 200;
                $response['data'] = $data;
                $response['message'] = 'Login successfully';
                return response()->json($response); 
            }
       } catch (JWTException $e) {
           $response['data'] = null;
           $response['code'] = 500;
           $response['message'] = 'Could not create token';
           return response()->json($response);
       }
       
        
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }

    function getAuthUser(Request $request){
        $token = $request->bearerToken();
         $user =JWTAuth::user()->id;
         return response()->json($user);
     }
}