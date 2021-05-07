<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Detail;
use App\Models\Permission;
use App\Models\Group;
use App\Http\Controllers\UsersPermissionController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
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

Route::get('/',function() {
    if (Auth::check()) {
        return redirect()->route('dashboard');
    } else {
        return redirect()->route('login');
    }
});

Route::get('/login',function() {
    if (!Auth::check()) {
        return view ( 'app' );
    } else {
        return redirect()->route('dashboard');
    }
})->name('login');

Route::post('/login',[LoginController::class, 'authenticate']);

Route::post('/logout',[LoginController::class, 'logout']);

Route::middleware('auth')->group(function () {
    Route::get('/dashboard',function() {
        return view ( 'app' );
    })->name('dashboard');

    Route::post('/users/permissions',[UsersPermissionController::class, 'permissions_from_user_logged']);

    Route::middleware('auth.user')->group(function () {
        //
        Route::get('/users',function() {
            return view ( 'app' );
        });

        Route::get('/users/permission/{id}',function($id) {
            $permission = User::find($id);
            if ($permission) {
                return view ( 'app' );
            } else {
                return response()->view('error.404',[], 404);
            }
        });

        Route::get('/users/edit/{id}',function($id) {
            $permission = User::find($id);
            if ($permission) {
                return view ( 'app' );
            } else {
                return response()->view('error.404',[], 404);
            }
        });

        Route::post('/users',[UserController::class, 'list_users_pagination']);

        Route::post('/users/permissions/save',[UsersPermissionController::class, 'save']);

        Route::post('/users/permissions/{id}',[UsersPermissionController::class, 'permissions_from_user']);

        Route::post('/users/edit/{id}/log',[UserController::class, 'get_log']);

        Route::post('/users/edit/{id}/save',[UserController::class, 'edit_user']);

        Route::post('/users/edit/{id}',[UserController::class, 'get_informations']);
    });
});

 //WS
 Route::get('/emmitEvent/{id}',function ($id) {
     broadcast(new Hello($id));
 });

//remover na produção

 Route::post('/pupolarBanco',function() {
     $grp = Group::factory()->count(20)->create();
     Detail::factory()->count(3)->create();
     $User = User::factory()->count(20)->create();
     $permission = Permission::factory()->count(20)->create();
     User::all()->each(function ($user) use ($permission) {
         $user->permission()->saveMany($permission);
     });
     Group::all()->each(function ($group) use ($permission) {
         $group->permission()->saveMany($permission);
     });
     $permUser = new Permission();
     $permUser->name = 'users';
     $permUser->Description = 'Permissão para controle de usuario';
     $permUser->save();
     return 'feito';
 });

 Route::post('/createuser',function (Request $request) {
     $user = new User;
     $user->name = $request->name;
     $user->email = $request->email;
     $user->password = Hash::make($request->password);
     $user->detail_id = 1;
     $user->save();
     $user->permission()->sync($request->permissions);
     $credentials = $request->only('email', 'password');
     if (Auth::attempt($credentials)) {
         return $user;
     }
     abort(409);
     //  return redirect()->route('login');
 });

 Route::post('/deleteuser',function (Request $request) {
     $user = User::find($request->id);
     if (!$user->delete()) {
         abort(409);
     } else {
         abort(204);
     }
 });
