<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\PartController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
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

        Route::post('/users/permissions/{id}',function($id) {
            $user = User::find($id);
            $user_permission = '';
            $return = [];
            foreach (Permission::all() as $Permission) {
                foreach ($Permission->groups as $group) {
                    if (isset($return[$group->name])) {
                        array_push($return[$group->name],[$Permission->name, $Permission->description]);
                    } else {
                        $return[$group->name] = [[$Permission->name, $Permission->description]];
                    }
                }
                if (isset($return['all auths'])) {
                    $return['all auths'] = [...$return['all auths'], [$Permission->name, $Permission->description]];
                } else {
                    $return['all auths'] = [[$Permission->name, $Permission->description]];
                }
            }
            $user_permission = [];
            foreach ($user->permission as $key => $permission) {
                if (isset($user->permission)) {
                    array_push($user_permission, $permission->name);
                } else {
                    $user_permission = [];
                }
            }

            return ['all_permissions' => $return, 'user_permissions' => $user_permission];
        });

        ///users/permissions

        //users/edit
        Route::get('/users/edit/{id}',function($id) {
            $permission = User::find($id);
            if ($permission) {
                return view ( 'app' );
            } else {
                return response()->view('error.404',[], 404);
            }
        });

        Route::post('/users/edit/{id}/refresh',function($id) {
            $log = Access_log::where('user_id',$id)->orderByDesc('hour_access')->get();
            $return = [];
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
            $user = User::find($id);
            $technical_time = $request->input('technical_time');
            $user->detail->technical_time = $technical_time;
            $user->detail->save();
            return $user;
        });

        Route::post('/users/edit/{id}',function($id) {
            $user = User::find($id);
            $log = Access_log::where('user_id',$id)->orderByDesc('hour_access')->get();
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
        //users/edit
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
