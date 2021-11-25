<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Address extends Model
{
    protected $table = 'address';

    use HasFactory;

    public function account (){
        return $this->belongsTo(User::class);
    }
}
