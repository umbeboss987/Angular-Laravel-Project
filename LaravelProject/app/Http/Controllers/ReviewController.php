<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReviewController extends Controller
{
 
    function makeReview (Request $req, $product_id){
        $text = $req->input('review');
        $user = $req->session()->get('user');
        if ($req->session()->has('user')){
            $review = new Review();
            $review->user_id = $user['id'];
            $review->product_id = $product_id;
            $review->review = $text;
            $review->save();         
            return  redirect()->back();
        } else {
            return redirect()->back();
        }
      
    }
}
