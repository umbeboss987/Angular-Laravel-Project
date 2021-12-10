<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;


class Image extends Model
{
    protected $table = 'image';
    use HasFactory;

    protected $fillable = ['image'];



    public function user (){
        return $this->hasOne(User::class);
    }
}
