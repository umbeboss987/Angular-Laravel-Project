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
        if(empty($data) || is_null($data)){
            return response()->json(['message' => 'data not found'], 404);
        }else{
            return  response()->json($data,200);
        }
    }

    function singleProduct($id)
    {
        try {
            $data = Product::find($id);
            if (empty($data) || is_null($data)) {
                return response()->json(['message' => 'data not found'], 404);
            } else {
                return response()->json($data, 200);
            }
        } catch (Exception $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        }
    }

    function getProductsType($product_type)
    {
        try {
            $data = Product::where('type', $product_type)->get();
            if (empty($data) || is_null($data)) {
                return response()->json(['message' => 'data not found'], 404);
            } else {
                return response()->json($data, 200);
            }
        } catch (Exception $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        }   
    }

    function deleteProduct ($product_id){
        $product =Product::find($product_id);
        $data = Product::find($product_id)->delete();
        return response()->json(['message' => 'product deleted', 'product' => $product], 200);
    }

    function updateProduct ($product_id, Request $req){
        $data = Product::where('id', $product_id)->update(array(
            'name' => $req->name,
            'price' => $req->price,
            'description' => $req->description,
            'type' => $req->type
        ));

        return response()->json($data);
    }
}
