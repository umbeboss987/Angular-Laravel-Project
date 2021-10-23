<?php

namespace App\Http\Controllers;


use App\Models\Review;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Url;
use Illuminate\Support\Facades\DB;


class ProductController extends Controller
{
    function getProducts (){
        $data= Product::all();
        return  response()->json($data);
    }

    function getProductsCategory (){
        $data= Product::all();
        return view('category_page', ['products' => $data]);
    }

    function singleProduct ($id){
        $data= Product::where('id', $id)->get();
        //$listReviews = new Review ();
        //$list = $listReviews->select('reviews.review','user.name')->join('products','products.id','=','reviews.product_id')->join('user','reviews.user_id','=','user.id')->where('products.name', '=', $name)->get();
        //return view('productPage',['product' => $data,'lists' => $list]);
        return response()->json($data);
    }  

    function getProductsType ($product_type){
        $data= Product::where('type', $product_type)->get();
        return response()->json($data);
    }
}
