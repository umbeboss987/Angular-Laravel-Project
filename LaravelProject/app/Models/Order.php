<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\OrderProduct;


class Order extends Model
{
    protected $table = 'order'; 
    use HasFactory;

    public function user (){
        return $this->belongsTo(User::class);
    }

    public function orderProducts (){
        return $this->hasMany(OrderProduct::class);
    }

    public function products (){
        return $this->belongsToMany(Product::class);
    }

}


