<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use App\Models\OrderProduct;


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
}
