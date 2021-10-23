<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;


class Product extends Model
{
    protected $table = 'product';
    use HasFactory;

    function productsType ($type){  
        $data = $this->select('*')->where('type',$type)->get();
        return $data;
    }
}
