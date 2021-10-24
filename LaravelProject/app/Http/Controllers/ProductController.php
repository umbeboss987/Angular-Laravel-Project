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
        return  response()->json($data,200);
    }

    function getProductsCategory (){
        $data= Product::all();
        return view('category_page', ['products' => $data]);
    }

    function singleProduct($id)
    {
        try {
            $data = Product::find($id);
            if (is_null($data)) {
                return response()->json(['message' => 'data not found'], 404);
            } else {
                return response()->json([$data], 200);
            }
        } catch (Exception $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        }
    }  

    function getProductsType ($product_type){
        $data= Product::where('type', $product_type)->get();
        return response()->json($data, 200);
    }
}
