<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Detail;
use App\Models\Permission;
use App\Models\Group;
use App\Models\Access_log;
use App\Http\Controllers\LoginController;
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

    //permission user loged
    Route::post('/users/permissions',function() {
        foreach (Auth::user()->permission as $permission) {
            $permissions[$permission->id] = [
                $permission->name
            ];
        }
        return $permissions;
    });
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

        //tabela de usuarios
        Route::post('/users',function(Request $request) {
            $page = $request->query('page');
            $num_rows = $request->query('rows');
            //opcional
            $search = $request->query('search');
            //opcional

            $total_num_rows = User::query()->get()->count();
            if ($num_rows == 0) {
                $num_rows = $total_num_rows;
            }
            $index = User::query()
            ->offset(($page - 1) * $num_rows)
            ->limit($num_rows)
            ->where('users.name', 'like', "%{$search}%")
            ->orWhere('users.email', 'like', "%{$search}%")
            ->leftJoin('details', 'users.detail_id', '=', 'details.id')
            ->leftJoin('users AS admin', 'details.adm_user', '=', 'admin.id')
            ->leftJoin('departments', 'details.department_id', '=', 'departments.id')
            ->select('users.*', 'details.unit', 'details.lastname','details.phone','details.role','details.ramal','details.technical_time','admin.name AS admin','departments.name AS department')
            ->orderBy('users.name')
            ->get();
            return ['users' => $index, 'total_num_rows' => $total_num_rows];
        });

        ///users/permissions
        Route::post('/users/permissions/save',function(Request $request) {
            $id = $request->input('id');
            $permissions = $request->input('permissions');
            $groups = $request->input('groups');
            $admin = $request->input('admin');
            $user = User::find($id);
            $user->permission()->sync([]);
            foreach ($permissions as $key => $value) {
                $user->permission()->save(Permission::where('name', $value)->first());
            }
            $permissionsAll = Permission::all();
            $permissionsChecked = $permissions;
        });

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
    });
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

 Route::get('/emmitEvent/{id}',function ($id) {
     broadcast(new Hello($id));
 });