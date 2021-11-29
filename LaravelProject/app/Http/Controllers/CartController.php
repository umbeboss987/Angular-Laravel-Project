<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Facades\JWTAuth;


class CartController extends Controller
{
    function addCartItem(Request $req)
    {
        $user_id = JWTAuth::user();
        $cart = new Cart();
        $product = Product::select('price')->where('id', $req->input('product_id'))->get();
        $cart->product_id = $req->input('product_id');
        $cart->quantity = $req->input('quantity');
        $cart->sub_total = $cart->quantity * $product[0]['price'];
        $cart->user_id = $user_id->id;
        $cart->save();
        return response(null, 201);
    }

    function countCartProduct(){
        $cart = new Cart();
        $totalCount = $cart->select('*')->count();
        return $totalCount;
    }

    function cart (){
        $product = new Product();
        $data = $product->select('cart.id','name', 'price','photo', 'cart.quantity')->join('cart', 'product.id', '=' , 'cart.product_id')->get();
        return view('cart_page',['data' => $data]);
    }

    function sumPriceProducts(){
        $product = new Product();
        $result = 0;
        $sum = $product->select('price', 'cart.quantity')->join('cart', 'product.id', '=' , 'cart.product_id')->get();
        foreach ($sum as $product){
          $result += $product['price'] * $product['quantity'];
        }
       
        return  $result ;
    }

    function check_out(){
        return view('checkout_page');
    }


    function getUserCart (){
        $user = JWTAuth::user();
        $products = new Product();
        $data = $products->select('cart.sub_total','cart.id', 'cart.quantity','name', 'price','photo')->join('cart', 'product.id', '=' , 'cart.product_id')->where('user_id', '=', $user->id)->get();
        return response()->json($data);
    }

    function deleteCart($id){
        $data = DB::table('cart')->where('id', $id)->delete();
        return response()->noContent();
    }

}
