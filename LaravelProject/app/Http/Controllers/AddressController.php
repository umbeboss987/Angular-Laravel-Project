<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Address;
use Tymon\JWTAuth\Facades\JWTAuth;


class AddressController extends Controller
{
    function addAddress (Request $req ){
        $user_id = JWTAuth::user()->id;
        $address = new Address();
        $address->user_id = $user_id;
        $address->address = $req->input('address');
        $address->telephone_number = $req->input('telephone_number');
        $address->name = $req->input('name');
        $address->surname = $req->input('surname');
        $address->postal_code = $req->input('postal_code');
        $address->city = $req->input('city');
        $address->save();
        return response(null, 201);
    }


    function getUserAddress (){
      $user_id = JWTAuth::user()->id;
      $accountDetails = Address::select()->where('user_id', $user_id)->get();
      return response()->json($accountDetails);
    }

    function updateAddress (Request $req, $address_id){
      $user_id = JWTAuth::user()->id;
      $account = Address::where('user_id', $user_id)->where('id', $address_id)->update(array(
        'name' => $req->input('name'),
        'surname' => $req->input('surname'),
        'address' => $req->input('address'),
        'city' => $req->input('city'),
        'postal_code' => $req->input('postal_code'),
        'telephone_number' => $req->input('telephone_number')
      ));
      return response()->noContent();
    }
  
  
    function getAddressById ($address_id){
      $user_id = JWTAuth::user()->id;
      $address = Address::where('user_id', $user_id)->where('id', $address_id)->first();
      return response()->json($address, 200);
    }

  
  }

   