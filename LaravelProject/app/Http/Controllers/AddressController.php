<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Address;
use Tymon\JWTAuth\Facades\JWTAuth;


class AddressController extends Controller
{
    function addAccount (Request $req ){
        $user_id = JWTAuth::user()->id;
        $account = new Address();
        $account->user_id = $user_id;
        $account->address = $req->input('address');
        $account->telephone_number = $req->input('telephone_number');
        $account->full_name = $req->input('full_name');
        $account->save();
    }


    function getAccountDetails (){
      $user_id = JWTAuth::user()->id;
      $accountDetails = Address::select()->where('user_id', $user_id)->first();
      return response()->json($accountDetails);
    }

    function updateAccount (Request $req){
      $user_id = JWTAuth::user()->id;
      $account = Address::where('user_id', $user_id)->update(array(
        'full_name' => $req->input('full_name'),
        'address' => $req->input('address'),
        'telephone_number' => $req->input('telephone_number')
      ));
      return response()->json(['message' => 'account updated', 'account' => $account],200);
    }}
