<?php

namespace App\Http\Controllers;


use App\Models\Review;
use App\Models\Product;
use App\Models\Photo;
use Illuminate\Http\Request;
use App\Http\Controllers\Url;
use Illuminate\Support\Facades\DB;


class ProductController extends Controller
{
    function getProducts (){
        $data= Product::all();
        // if(empty($data)){
        //     return response()->json(['message' => 'data not found'], 404);
        // }else{
            return  response()->json($data,200);
        //}
    }

    function getProductById($product_id)
    {
        try {
            if (!Product::where('id', $product_id)->exists()) {
                return response()->json(['message' => 'product not found'], 404);
            }

            $product = Product::where('id', $product_id)->first();
            return response($product, 200);
        } catch (Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    function getProductsByType($products_type)
    {
       
        try {
            if ($products_type != 'phone' || $products_type != 'computer' || $products_type != 'tablet'){

            }
            $data = Product::where('type', $products_type)->get();
            if (empty($data) || is_null($data)) {
                return response()->json(['message' => 'data not found'], 404);
            } else {
                return response()->json($data, 200);
            }
        } catch (Exception $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        }   
    }

    function deleteProductById($product_id)
    {
        try {
            if (empty($product_id) || is_null($product_id)) {
                return response()->json([], 404);
            } else {
                $data = Product::find($product_id)->delete();
                return response(null, 204);
            }
        } catch (Exception $e) {
            return response()->json(500);
        }
    }

    function updateProduct($product_id, Request $req)
    {
        try {
            if (empty($product_id) || is_null($product_id)) {
                return response(null,500);
            } 
            if(!Product::where('id', $product_id)->exists()) {
                return response('Product not found', 404);
            }
            else {
                Product::where('id', $product_id)->update([
                    'name' => $req->name,
                    'price' => $req->price,
                    'description' => $req->description,
                    'type' => $req->type,
                    'photo' => $req->photo,
                ]);
                return response()->noContent();
            }
        } catch (Exception $e) {
            return response(null,500);
        }
    }

    function getPhoto(){
      $product = Photo::select()->product_id()->name;
        return ['product' => $product];
    }

    function addProduct(Request $req){
        $product = new Product();
        $product->name = $req->name;
        $product->price = $req->price;
        $product->description = $req->description;
        $product->type = $req->type;
        $product->photo = $req->photo;
        $product->save();
        return response(null, 201)->header('location', 'http://localhost:8000/api/products/' . $product->id);
    }
}
