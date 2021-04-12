<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Detail;
use App\Models\Permission;
use App\Models\Group;
use App\Models\Access_log;
use App\Http\Controllers\UserController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\PermissionController;
use Illuminate\Http\Request;

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
    //permission user
    Route::middleware('auth.user')->group(function () {
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

        Route::get('/dashboard',function() {
            return view ( 'app' );
        })->name('dashboard');

        Route::post('/users',[UserController::class, 'index']);

        Route::post('/users/permissions/{id}',[UserController::class, 'permissions']);

        //modificar url no front
        Route::post('/users/permissions/save',[UserController::class, 'updatePermissions']);

        Route::post('/users/permissions',function() {
            foreach (Auth::user()->permission as $permission) {
                $permissions[$permission->id] = [
                    $permission->name
                ];
            }
            return $permissions;
        });

        Route::post('/permissions',[PermissionController::class, 'index']);
    });

    //subistituir por [permissionController::class, 'index']
    Route::post('/auths',function() {
        foreach (Auth::user()->permission as $permission) {
            $permissions[$permission->id] = [
                $permission->name
            ];
        }
        return $permissions;
    });

    //subistituir por [permissionController::class, 'index']
});
//mudar local de permissão
 Route::get('/users/edit/{id}',function($id) {
     $permission = User::find($id);
     if ($permission) {
         return view ( 'app' );
     } else {
         return response()->view('error.404',[], 404);
     }
 });

 Route::post('/users/edit/{id}',function($id) {
     $user = User::find($id);
     $log = Access_log::where('user_id',8)->get();
     $return = [];
     $return[] = (object) [
         'user' => $user, 
         'details' => $user->detail
     ];

     foreach ($log as $key => $value) {
         $return[] = [
             'data' => $value->hour_access,
             'ip' => $value->ip,
             'status' => $value->status,
         ];
     };
     return $return;
 });

 Route::post('/users/edit/{id}/save',function($id,Request $request) {
     //return [$id, $request->input('technical_time')];
     $user = User::find($id);
     $technical_time = $request->input('technical_time');
     $user->detail->technical_time = $technical_time;
     $user->detail->save();
     return $user;
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

 //remover na produção

