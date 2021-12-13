<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\AddressController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ReviewController;

use Illuminate\Foundation\Auth\User;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::group([], function () {
    //Not auth
    Route::get('products',[ProductController::class ,'getProducts'])->name('getProducts');
    Route::get('products/{product_id}',[ProductController::class ,'getProductById'])->name('getProductById')->where(['product_id' => '[0-9]+']);
    Route::get('products/{products_type}',[ProductController::class, 'getProductsByType'])->name('getProductsByType')->where(['products_type' => '[a-z]+']);
    Route::get('products/reviews', [ReviewController::class, 'getReviews']);

    //Login and registration
    Route::post('signUp', [UserController::class, 'signUp']);
    Route::post('login', [AuthController::class, 'login'])->name('login');
    //auth user
    Route::group(['middleware' => 'auth'], function(){
        Route::prefix('auth')->group(function(){
            Route::get('logout', 'AuthController@logout');
            Route::get('user', [AuthController::class, 'getAuthUser']); 
        });         
    });

    Route::group(['middleware' => 'auth', 'prefix' => 'user'],function () {
        Route::put('', [UserController::class, 'updateUser'])->name('updateUser');
        Route::get('/carts',[CartController::class, 'getUserCart']);
        Route::delete('carts/{id}',[CartController::class, 'deleteCart'])->name('deleteCart');
        Route::post('carts',[CartController::class, 'addCartItem'])->name('addCartItem');
        Route::put('/address/{address_id}',['middleware' => 'auth',AddressController::class, 'updateAddress'])->name('updateAddress');
        Route::get('/carts/total',[CartController::class, 'sumPriceProducts']);
        Route::post('/address', [AddressController::class, 'addAddress']);
        Route::get('/address', [AddressController::class, 'getUserAddress'])->name('getUserAddress');
        Route::get('/orders', [OrderController::class, 'orderList']);
        Route::post('/orders',[OrderController::class, 'addOrder']);
        Route::get ('/address/{address_id}', [AddressController::class, 'getAddressById'])->name('getAddressById');
        Route::post('/photo',[UserController::class, 'addUserPhoto']);
        Route::get('/photo',[UserController::class, 'getUserPhoto']);
    });
    //admin
    Route::group(['middleware' => 'admin'], function () {
        Route::prefix('products')->group(function () {
            Route::delete('/{product_id}', [ProductController::class, 'deleteProductById'])->name('deleteProductById');
            Route::post('', [ProductController::class, 'addProduct'])->name('addProduct');
            Route::post('/{product_id}',[ProductController::class, 'updateProduct'])->name('updateProduct');
            Route::post('/{product_id}/reviews',[ReviewController::class, 'addReview'])->name('addReview');
            Route::get('/{product_id}/reviews',[ProductController::class, 'getProductReviews'])->name('getProductReviews');
            Route::delete('/{product_id}/reviews/{review_id}',[ProductController::class, 'deleteProductReview'])->name('deleteProductReview'); 
        });

        Route::prefix('users')->group(function () {
            Route::get('', [UserController::class, 'getAllUsers']);
            Route::delete('/{user_id}', [UserController::class, 'deleteUser']);
        });

        Route::prefix('orders')->group(function () {
            Route::get('', [OrderController::class, 'getOrders']);
            Route::delete('/{order_id}', [OrderController::class, 'deleteOrderById']);
        });
        
    });

});

