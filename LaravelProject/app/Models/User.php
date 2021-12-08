<?php

namespace App\Models;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Models\Order;
use App\Models\Account;
use App\Models\Cart;



class User extends Authenticatable implements JWTSubject
{   
    
    protected $table = 'user';

    use Notifiable;

    // Rest omitted for brevity

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    public function orders (){
        return $this->hasMany(Order::class);
    }

    public function account (){
        return $this->belongsTo(Account::class);
    }

    public function orderProducts (){
        return $this->hasManyThrough(Product::class,Order::class);
    }


    public function carts (){
        return  $this->hasMany(Cart::class);
     }
}