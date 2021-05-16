<?php

use Illuminate\Support\Facades\Route;
use App\Models\Calleds;
use App\Http\Controllers\UsersPermissionController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;

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

Route::middleware('auth')->group(function () {
    //
    Route::middleware('auth.user')->group(function () {
        //
    });
});
