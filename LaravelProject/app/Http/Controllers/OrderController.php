<?php

namespace App\Http\Controllers;
use App\Models\Cart;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Facades\JWTAuth;


class OrderController extends Controller
{
   function order (Request $req){
       $user = JWTAuth::user()->id;
       $carts = Cart::where('user_id', $user)->get(); 
       if (empty($carts) || $carts == null){
           return response()->json(['message' =>'your cart is empty'], 500);
       }
       else{
        foreach ($carts as $cart){
            $order = new Order();
            $order->user_id = $cart['user_id'];
            $order->product_id = $cart['product_id'];
            $order->quantity = $cart['quantity'];
            $order->address = $req->input('address');
            $order->total = $cart['sub_total'];
            $order->payment_method = $req->input('payment_method');
            $order->save();
            DB::table('cart')->where('user_id', $user)->delete();
        }    
     } return;       
   }

   function getAllOrders (){
      $orders = Order::select('order.total','order.quantity', 'product.name', 'user.name')->join('product','product.id','=','order.product_id')->join('user','user.id','=','order.user_id')->get();
      return response()->json($orders);
   }

   function orderList( ){
       $user_id = JWTAuth::user()->id;
       $orders = Order::select('*')->join('product','product.id','=','order.product_id')->where('user_id', $user_id)->get();
       return response()->json($orders);
   }
}
