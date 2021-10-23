<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Account;
use Tymon\JWTAuth\Facades\JWTAuth;

class AccountController extends Controller
{
    function addAccount (Request $req ){
        $user_id = JWTAuth::user()->id;
        $account = new Account();
        $account->user_id = $user_id;
        $account->address = $req->input('address');
        $account->telephone_number = $req->input('telephone_number');
        $account->full_name = $req->input('full_name');
        $account->save();
    }


    function getAccountDetails (){
      $user_id = JWTAuth::user()->id;
      $accountDetails = Account::select()->where('user_id', $user_id)->get();
      return response()->json($accountDetails);
    }
}
