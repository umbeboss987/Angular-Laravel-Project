<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\AccountController;
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
    Route::get('',[ProductController::class ,'getProducts']);
    Route::get('/{product_id}',[ProductController::class ,'getProductById'])->name('getProductById');
    Route::delete('/{product_id}', [ProductController::class, 'deleteProductById'])->name('deleteProductById');
    Route::post('', [ProductController::class, 'addProduct'])->name('addProduct');
 //Route::get('/{product_type}',[ProductController::class, 'getProductsByType'])->name('getProductsByType');

});

 Route::post('signUp', [UserController::class, 'signUp']);
 Route::get('cart',[CartController::class, 'cartOrders']);
 Route::get('sumPriceProducts',[CartController::class, 'sumPriceProducts']);
 Route::delete('deleteItem/{id}',[CartController::class, 'deleteItem']);
 Route::post('account', [AccountController::class, 'addAccount']);
 Route::get('getAccountDetails', [AccountController::class, 'getAccountDetails']);
 Route::get('getOrdersAccount', [OrderController::class, 'orderList']);
 Route::put('updateUser', ['middleware' => 'auth.role:user', UserController::class, 'updateUser']);
 Route::put('updateAccount',['middleware' => 'auth.role:user',AccountController::class, 'updateAccount']);
Route::post('updateProduct/{product_id}',[ProductController::class, 'updateProduct']);
Route::get('getphoto', [ProductController::class, 'getPhoto']);
Route::post('login', ['middleware' => 'auth.role:admin,user', AuthController::class, 'login'])->name('login');
Route::get('orders', [OrderController::class, 'getAllOrders']);
Route::get('users', [UserController::class, 'getAllUsers']);
Route::delete('users/{user_id}', [UserController::class, 'deleteUser']);


Route::group([

    'middleware' => 'auth.role',
    'prefix' => 'auth'

], function ($router) {
    Route::post('addOrder',[OrderController::class, 'order']);
    Route::post('addCartItem/{product_id}',['middleware' => 'auth.role:user',CartController::class, 'addCartItem']);
    Route::get('logout', 'AuthController@logout');
    Route::post('me', [AuthController::class, 'me'])->name('me');
    Route::get('getId', [AuthController::class, 'getAuthUser']);
});

