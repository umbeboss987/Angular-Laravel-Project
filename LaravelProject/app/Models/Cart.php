<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use App\Models\User;


class Cart extends Model
{
    protected $table = 'cart';
    use HasFactory;


    function user (){
       return  $this->belongsTo(User::class);
    }

    public function product (){
        return $this->belongsTo(Product::class);
    }

}
