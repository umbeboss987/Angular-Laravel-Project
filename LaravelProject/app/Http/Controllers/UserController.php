<?php
namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Image;
use App\Http\Resources\UserResource;
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
        $user = User::where('email', $req->input('email'))->where('username', $req->input('username'))->first();
     if ($user){
       return response()->json(["message" =>"user already exists"], 409);

       } else {
        $user = new User();
        $user->username = $req->input('username');
        $user->email = $req->input('email');
        $user->password = bcrypt($req->input('password'));
        $user->role_id = $req->role;
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
                return response()->json([$data->token], 200);
            }
       } catch (JWTException $e) {
           return response()->json(['message' => 'Could not create token'], 500);
       }
     
    }


    function updateUser (Request $req) {
        $user_id = JWTAuth::user()->id;
        $user = User::find($user_id);
        $user->email = $req->input('email');
        $user->name = $req->input('name');
        $user->save();
    }

    function getId(Request $request){
       $token = $request->bearerToken();
       $payload = $user = auth()->user();
       return response()->json($payload);
    }

    function getAllUsers(){
       $users = User::all();
       return response()->json($users);
    }

    function deleteUser ($user_id){
       $user = DB::table('user')->delete($user_id); 
       return response()->json($user);       
    } 


    function addUserPhoto(Request $req){
        if($req->hasfile('image')){
            $photo = $req->file('image');
            $filename = time() . '.' . $photo->getClientOriginalExtension();
            $photo->move(public_path('/uploads/products/'), $filename);
            $user = JWTAuth::user();
            $image = new Image();
            $image->image = $filename;
            $image->save();
            $user->image_id =  $image->id;
            $user->save();
        }
    }


    function getUserPhoto(){
            $user = User::with('image')->where('id', 1)->first();
            return new UserResource($user);
    }

 
   
}
