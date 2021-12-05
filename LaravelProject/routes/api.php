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


Route::get('getId', [UserController::class, 'getId']);

Route::prefix('products')->group(function () {
    Route::get('',[ProductController::class ,'getProducts'])->name('getProducts');
    Route::get('/{product_id}',[ProductController::class ,'getProductById'])->name('getProductById')->where(['product_id' => '[0-9]+']);
    Route::delete('/{product_id}', [ProductController::class, 'deleteProductById'])->name('deleteProductById');
    Route::post('', [ProductController::class, 'addProduct'])->name('addProduct');
    //search?productType={};
    Route::get('/{products_type}',[ProductController::class, 'getProductsByType'])->name('getProductsByType')->where(['products_type' => '[a-z]+']);
    Route::post('/{product_id}',[ProductController::class, 'updateProduct'])->name('updateProduct');
    Route::post('/{product_id}/reviews',[ReviewController::class, 'addReview'])->name('addReview');
    Route::get('/{product_id}/reviews',[ProductController::class, 'getProductReviews'])->name('getProductReviews');
    Route::delete('/{product_id}/reviews/{review_id}',[ProductController::class, 'deleteProductReview'])->name('deleteProductReview');

});

Route::prefix('users')->group(function () {
    Route::get('', [UserController::class, 'getAllUsers']);
    Route::delete('/{user_id}', [UserController::class, 'deleteUser']);
});


Route::get('reviews', [ReviewController::class, 'getReviews']);



Route::prefix('user')->group(function () {
    Route::put('', [UserController::class, 'updateUser'])->name('updateUser');
    Route::get('/carts',[CartController::class, 'getUserCart']);
    Route::delete('carts/{id}',[CartController::class, 'deleteCart'])->name('deleteCart');
    Route::post('carts',['middleware' => 'auth.role:user',CartController::class, 'addCartItem'])->name('addCartItem');
    Route::put('/address/{address_id}',['middleware' => 'auth.role:user',AddressController::class, 'updateAddress'])->name('updateAddress');
    Route::post('/address', [AddressController::class, 'addAddress']);
    Route::get('/address', [AddressController::class, 'getUserAddress'])->name('getUserAddress');
    Route::get('/orders', [OrderController::class, 'orderList']);
    Route::post('/orders',[OrderController::class, 'addOrder']);
    Route::get ('/address/{address_id}', [AddressController::class, 'getAddressById'])->name('getAddressById');
});


Route::prefix('addresses')->group(function () {
});

Route::prefix('orders')->group(function () {
    Route::get('', [OrderController::class, 'getOrders'])->middleware('admin');
});

 Route::post('signUp', [UserController::class, 'signUp']);
 Route::get('sumPriceProducts',[CartController::class, 'sumPriceProducts']);
Route::get('getphoto', [ProductController::class, 'getPhoto']);
Route::post('login', ['middleware' => 'auth.role:admin,user', AuthController::class, 'login'])->name('login');


Route::group([

    'middleware' => 'auth.role',
    'prefix' => 'auth'

], function ($router) {
   
    Route::get('logout', 'AuthController@logout');
    Route::post('me', [AuthController::class, 'me'])->name('me');
    Route::get('getId', [AuthController::class, 'getAuthUser']);
});

