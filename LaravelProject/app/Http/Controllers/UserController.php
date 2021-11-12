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
       return response()->json(["message" =>"user already exists"], 409);

       } else {
        $user = new User();
        $user->name = $req->input('name');
        $user->email = $req->input('email');
        $user->password = bcrypt($req->input('password'));
        $user->save();
        return response()->json(["message" => "user registered"], 200);
       }

    }

    function login (Request $req) { 
        $credentials = $req->only('name', 'password');
        $token =JWTAuth::attempt($credentials);
       try {
            if(!$token){
                return response()->json(['message'=> 'Name or password is incorrect'], 401);            
            }else{

                $user = User::where('name', $req->input('name'))->first();
                $login = auth()->login($user);
                $data['token'] = auth()->claims([
                    'user_id' => $user->id,
                    'password' => $user->password
                ])->attempt($credentials);
                return response()->json([$data], 200);
            }
       } catch (JWTException $e) {
           return response()->json(['message' => 'Could not create token'], 500);
       }

     
    }


    function updateUser (Request $req) {
        $user_id = JWTAuth::user()->id;
        $user = User::find($user_id);
        $user->email = $req->input('email');
        $user->name = $req->input('username');
        $user->save();
    }

    function getId(Request $request){
       $token = $request->bearerToken();
       $payload = $user = auth()->user();
       return response()->json($payload);
    }

 
   
}
