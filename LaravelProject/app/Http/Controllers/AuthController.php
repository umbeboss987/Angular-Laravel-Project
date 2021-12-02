<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\User;
use App\Models\Role;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    function login (Request $req) { 
        $credentials = $req->only('username', 'password');
        $token =JWTAuth::attempt($credentials);
       try {
            if(!$token){
                return response()->json(['message'=> 'Name or password is incorrect'], 401);            
            }else{

                $user = User::where('username', $req->input('username'))->first();
                $user_role = Role::select('role')->where('id',$user->role_id)->first();
                $login = auth()->login($user);
                $data['token'] = auth()->claims([
                    'username' => $user->username,
                    'email' => $user->email,
                    'role' => $user_role->role
                ])->attempt($credentials);
                return response()->json($data,200);
            }
       } catch (JWTException $e) {
           return response()->json(['message' => 'Could not create token'], 500);
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
         $user =JWTAuth::user();
         return response()->json($user);
     }
}