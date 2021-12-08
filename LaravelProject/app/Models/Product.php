<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use App\Models\OrderProduct;
use App\Models\Review;
use App\Models\Cart;



class Product extends Model
{
    protected $table = 'product';
    use HasFactory;


    public function orderProducts (){
        return $this->hasMany(OrderProduct::class);
    }


    public function order (){
        return $this->belongsToMany(Order::class);
    }

    public function reviews (){
        return $this->hasMany(Review::class);
    }

    public function carts (){
        return $this->hasMany(Cart::class);
    }
}
