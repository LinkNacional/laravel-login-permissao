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

Route::post('/login',[LoginController::class, 'authenticate']);

Route::middleware('auth')->group(function () {
    //
    Route::post('/logout',[LoginController::class, 'logout']);

    Route::post('/users/permissions',[UsersPermissionController::class, 'permissions_from_user_logged']);

    Route::middleware('auth.user')->group(function () {
        //
        Route::post('/users',[UserController::class, 'list_users_pagination']);

        Route::post('/users/permissions/save',[UsersPermissionController::class, 'save']);

        Route::post('/users/permissions/{id}',[UsersPermissionController::class, 'permissions_from_user']);

        Route::post('/users/edit/{id}/log',[UserController::class, 'get_log']);

        Route::post('/users/edit/{id}/save',[UserController::class, 'edit_user']);

        Route::post('/users/edit/{id}',[UserController::class, 'get_informations']);
    });

    //colocar no controller
    Route::get('/called',function() {
        return json_encode(Calleds::all());
    });

    Route::get('/called/{id}',function($id) {
        return json_encode(Calleds::find($id));
    });

    Route::post('/called',function(Request $request) {
        $called = Calleds::create($request->only('matter', 'deadline','urgent','why_urgent','infos','public'));
        $called->save();
        return json_encode($called);
    });

    Route::put('/called',function(Request $request) {
        $called = Calleds::find($request->id);
        $called->update($request->only('matter', 'deadline','urgent','why_urgent','infos','public'));
        return json_encode($called);
    });

    Route::delete('/called',function(Request $request) {
        $called = Calleds::find($request->id);
        $called->delete();
    });
});
