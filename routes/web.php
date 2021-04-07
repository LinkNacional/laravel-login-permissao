<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Detail;
use App\Models\Permission;
use App\Models\Group;
use App\Http\Controllers\UserController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\permissionController;
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

Route::middleware('auth')->group(function () {
    //permission user
    Route::middleware('auth.user')->group(function () {
        Route::post('/users',[UserController::class, 'index']);

        Route::get('/users',function() {
            return view ( 'app' );
        });

        Route::get('/users/permission/{id}',function() {
            return view ( 'app' );
        });

        Route::post('/users/permissions/{id}',[UserController::class, 'permissions']);

        //modificar url no front
        Route::post('/users/permissions/save',[UserController::class, 'updatePermissions']);

        Route::post('/users/auths',[permissionController::class, 'index']);
    });

    Route::get('/dashboard',function() {
        return view ( 'app' );
    })->name('dashboard');

    Route::post('/logout',[LoginController::class, 'logout']);

    //subistituir por [permissionController::class, 'index']
    Route::post('/auths',function() {
        foreach (Auth::user()->permission as $permission) {
            $permissions[$permission->id] = [
                $permission->name
            ];
        }
        return $permissions;
    });

    Route::post('/users/auths/all',function() {
        $permissions = [];
        foreach (Auth::user()->permission as $permission) {
            $permissions[$permission->id] = [
                $permission->name
            ];
        }
        return $permissions;
    });
    //subistituir por [permissionController::class, 'index']
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

 Route::post('/createuser',[UserController::class, 'create']);