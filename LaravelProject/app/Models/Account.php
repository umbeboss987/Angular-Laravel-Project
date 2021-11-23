<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Account extends Model
{
    protected $table = 'account';

    use HasFactory;

    public function account (){
        return $this->belongsTo(User::class);
    }
}
