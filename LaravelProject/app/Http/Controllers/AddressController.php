<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Address;
use Tymon\JWTAuth\Facades\JWTAuth;


class AddressController extends Controller
{
    function addAddress (Request $req ){
        $user_id = JWTAuth::user()->id;
        $account = new Address();
        $account->user_id = $user_id;
        $account->address = $req->input('address');
        $account->telephone_number = $req->input('telephone_number');
        $account->name = $req->input('name');
        $account->surname = $req->input('surname');
        $account->save();
        return response()->noContent();
    }


    function getUserAddress (){
      $user_id = JWTAuth::user()->id;
      $accountDetails = Address::select()->where('user_id', $user_id)->get();
      return response()->json($accountDetails);
    }

    function updateAddress (Request $req, $address_id){
      $user_id = JWTAuth::user()->id;
      $account = Address::where('user_id', $user_id)->update(array(
        'full_name' => $req->input('full_name'),
        'address' => $req->input('address'),
        'telephone_number' => $req->input('telephone_number')
      ));
      return response()->json(['message' => 'account updated', 'account' => $account],200);
    }
  
  
    function getAddressById ($address_id){
      $user_id = JWTAuth::user()->id;
      $address = Address::where('user_id', $user_id)->where('address_id', $address_id)->get();
      return response()->json($address, 200);
    }

  
  }

   