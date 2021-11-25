<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\AddressController;
use App\Http\Controllers\AuthController;

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
    Route::get('/{products_type}',[ProductController::class, 'getProductsByType'])->name('getProductsByType')->where(['products_type' => '[a-z]+']);
    Route::post('/{product_id}',[ProductController::class, 'updateProduct'])->name('updateProduct');

});

Route::prefix('users')->group(function () {
    Route::get('', [UserController::class, 'getAllUsers']);
    Route::put('', ['middleware' => 'auth.role:user', UserController::class, 'updateUser']);
    Route::delete('/{user_id}', [UserController::class, 'deleteUser']);
});

Route::prefix('carts')->group(function () {
    Route::delete('/{id}',[CartController::class, 'deleteItem']);
});

 Route::post('signUp', [UserController::class, 'signUp']);
 Route::get('cart',[CartController::class, 'getUserCart']);
 Route::get('sumPriceProducts',[CartController::class, 'sumPriceProducts']);
 Route::post('address', [AddressController::class, 'addAddress']);
 Route::get('getAccountDetails', [AddressController::class, 'getAccountDetails']);
 Route::get('getOrdersAccount', [OrderController::class, 'orderList']);
 Route::put('updateAccount',['middleware' => 'auth.role:user',AddressController::class, 'updateAccount']);
Route::get('getphoto', [ProductController::class, 'getPhoto']);
Route::post('login', ['middleware' => 'auth.role:admin,user', AuthController::class, 'login'])->name('login');
Route::get('orders', [OrderController::class, 'getAllOrders']);


Route::group([

    'middleware' => 'auth.role',
    'prefix' => 'auth'

], function ($router) {
    Route::post('addOrder',[OrderController::class, 'order']);
    Route::post('carts/{product_id}',['middleware' => 'auth.role:user',CartController::class, 'addCartItem']);
    Route::get('logout', 'AuthController@logout');
    Route::post('me', [AuthController::class, 'me'])->name('me');
    Route::get('getId', [AuthController::class, 'getAuthUser']);
});

