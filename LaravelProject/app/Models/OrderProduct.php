<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Order;
use App\Models\Product;


class OrderProduct extends Model
{
    protected $table = "order_product";
    use HasFactory;

    public function order (){
      return  $this->belongsTo(Order::class);
    }

    public function products (){
        return  $this->hasMany(Product::class);
      }
}
