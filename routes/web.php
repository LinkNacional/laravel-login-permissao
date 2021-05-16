<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\LoginController;
use App\Models\User;
use App\Models\Permission;
use App\Models\Access_log;
use App\Events\Hello;
use App\Models\Calleds;
use App\Models\Sectors;
use App\Models\Parts;
use App\Http\Controllers\UsersPermissionController;
use App\Http\Controllers\UserController;
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

Route::post('/myapi/login',[LoginController::class, 'authenticate']);

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

            foreach ($log as  $value) {
                $return[] = [
                    'data' => $value->hour_access,
                    'ip' => $value->ip,
                    'status' => $value->status,
                ];
            };
            return $return;
        });
        Route::get('/users/edit/{id}',[UserController::class, 'verify_user_exist']);

        //auth.user api
        Route::post('/myapi/users',[UserController::class, 'list_users_pagination']);

        Route::post('/myapi/users/permissions/save',[UsersPermissionController::class, 'save']);

        Route::post('/myapi/users/permissions/{id}',[UsersPermissionController::class, 'permissions_from_user']);

        Route::post('/myapi/users/edit/{id}/log',[UserController::class, 'get_log']);

        Route::post('/myapi/users/edit/{id}/save',[UserController::class, 'edit_user']);

        Route::post('/myapi/users/edit/{id}',[UserController::class, 'get_informations']);
        //fim auth.user api
    });

    //auth api
    Route::post('/myapi/logout',[LoginController::class, 'logout']);

    Route::post('/myapi/users/permissions',[UsersPermissionController::class, 'permissions_from_user_logged']);

    //called
    Route::get('/myapi/called',function() {
        return json_encode(Calleds::all());
    });

    Route::get('/myapi/called/{id}',function($id) {
        return json_encode(Calleds::find($id));
    });

    Route::post('/myapi/called',function(Request $request) {
        $called = Calleds::create($request->only('matter', 'deadline','urgent','why_urgent','infos'));
        $called->responsables()->sync($request->input('responsibles'));
        $called->parts()->sync($request->input('parts'));
        $called->sectors()->sync($request->input('sectors'));
        $called->save();
        return json_encode($called);
    });

    Route::post('/myapi/called/request',function() {
        return [User::all(), Parts::all(),  Sectors::all()];
    });

    Route::put('/myapi/called',function(Request $request) {
        $called = Calleds::find($request->id);
        $called->update($request->only('matter', 'deadline','urgent','why_urgent','infos'));
        return json_encode($called);
    });

    Route::delete('/myapi/called',function(Request $request) {
        $called = Calleds::find($request->id);
        $called->delete();
    });
    //fim called

    //sectors
    Route::get('/myapi/sectors',function() {
        return json_encode(Sectors::all());
    });
    //fim sectors

    //fim auth api
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
