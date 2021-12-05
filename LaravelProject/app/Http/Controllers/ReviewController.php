<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Facades\JWTAuth;

class ReviewController extends Controller
{
 
    function addReview (Request $req, $product_id){
        $text = $req->input('review');
        $user_id = JWTAuth::user()->id;
            $review = new Review();
            $review->user_id = $user_id;
            $review->product_id = $product_id;
            $review->review = $text;
            $review->save();         
        return response(null,201);
      
    }


    function getReviews (){
        $reviews = Review::with('product')->get();
        return response()->json($reviews, 200);
    }

}
