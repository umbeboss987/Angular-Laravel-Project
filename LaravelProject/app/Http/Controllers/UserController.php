<?php
namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Input;
use Illuminate\Http\Request;
use Illuminate\Http\Session;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Closure;


class UserController extends Controller
{

    public function __construct() {

    }

    function signUp(Request $req){
        $user = User::where('email', $req->input('email'))->first();
     if ($user){
       $response['status'] = 1;
       $response['message'] = 'user already exists';
       $response['code'] = 409;

       return $response;

       } else {
        $user = new User();
        $user->name = $req->input('name');
        $user->email = $req->input('email');
        $user->password = bcrypt($req->input('password'));
        $user->save();

        $response['status'] = 0;
        $response['message'] = 'user registered';
        $response['code'] = 200;

        return $response;
       }

    }

    function login (Request $req) { 
        $credentials = $req->only('name', 'password');
        $token =JWTAuth::attempt($credentials);
       try {
            if(!$token){
                $response['status'] = 0;
                $response['code'] = 401;
                $response['data'] = null;
                $response['message'] = 'Name or password is incorrect'; 
                return response()->json($response);            
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


    function updateUser (Request $req) {
        $user_id = JWTAuth::user()->id;
        $user = User::find($user_id);
        $user->email = $req->input('email');
        $user->password = bcrypt($req->input('password'));
        $user->save();
    }

    function getId(Request $request){
       $token = $request->bearerToken();
       $payload = $user = auth()->user();
       return response()->json($payload);
    }

 
   
}
