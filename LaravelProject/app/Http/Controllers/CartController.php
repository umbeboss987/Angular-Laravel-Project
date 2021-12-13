<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\Review;
use PhpParser\Node\Stmt\Catch_;

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

    function getUserCart (){
        $user = JWTAuth::user()->id;
        $data = Cart::with('product')->where('user_id', $user)->get();
        return response()->json($data);
    }

    function deleteCart($id){
        $data = DB::table('cart')->where('id', $id)->delete();
        return response()->noContent();
    }

}
