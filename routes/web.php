<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\UserController;
use App\Events\Hello;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/called/new',function() {
    return view ( 'app' );
});

Route::get('/',function() {
    if (Auth::check()) {
        return redirect()->route('dashboard');
    } else {
        return redirect()->route('login');
    }
});

Route::get('/login',[LoginController::class, 'verifyLogin'])->name('login');

Route::middleware('auth')->group(function () {
    //
    Route::get('/dashboard',function() {return view ( 'app' );})->name('dashboard');

    Route::middleware('auth.user')->group(function () {
        //
        Route::get('/users',function() {return view ( 'app' );});

        Route::get('/users/permission/{id}',[permissionController::class, 'verify_permission_exist']);

        Route::get('/users/edit/{id}',[UserController::class, 'verify_user_exist']);
    });
});

 //WS
 Route::get('/emmitEvent/{id}',function ($id) {broadcast(new Hello($id));});

//remover na produção

//  Route::post('/pupolarBanco',function() {
//      $grp = Group::factory()->count(20)->create();
//      Detail::factory()->count(3)->create();
//      $User = User::factory()->count(20)->create();
//      $permission = Permission::factory()->count(20)->create();
//      User::all()->each(function ($user) use ($permission) {
//          $user->permission()->saveMany($permission);
//      });
//      Group::all()->each(function ($group) use ($permission) {
//          $group->permission()->saveMany($permission);
//      });
//      $permUser = new Permission();
//      $permUser->name = 'users';
//      $permUser->Description = 'Permissão para controle de usuario';
//      $permUser->save();
//      return 'feito';
//  });

//  Route::post('/createuser',function (Request $request) {
//      $user = new User;
//      $user->name = $request->name;
//      $user->email = $request->email;
//      $user->password = Hash::make($request->password);
//      $user->detail_id = 1;
//      $user->save();
//      $user->permission()->sync($request->permissions);
//      $credentials = $request->only('email', 'password');
//      if (Auth::attempt($credentials)) {
//          return $user;
//      }
//      abort(409);
//      //  return redirect()->route('login');
//  });

//  Route::post('/deleteuser',function (Request $request) {
//      $user = User::find($request->id);
//      if (!$user->delete()) {
//          abort(409);
//      } else {
//          abort(204);
//      }
//  });
