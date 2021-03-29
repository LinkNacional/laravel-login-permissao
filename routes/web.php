<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\userController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Permissions;

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

Route::post('/login',[UserController::class, 'authenticate']);

Route::post('/createuser',[UserController::class, 'create']);

Route::middleware('auth')->group(function () {
    Route::middleware('auth.user')->group(function () {
        Route::post('/users',function () {
            $users = [];
            foreach (User::all() as $user) {
                $users[] = [
                    'user' => $user,
                    'permission' => $user->permission,
                    'detail' => $user->detail,
                    'departament' => $user->detail->departament,
                    'unit' => $user->detail->unit->name,
                    'admin' => $user->detail->admin
                ];
            }
            return $users;
        });

        Route::get('/users',function() {
            return view ( 'app' );
        });

        Route::get('/users/permission/{id}',function() {
            return view ( 'app' );
        });

        Route::post('/users/permissions/{id}',function($id,Request $request) {
            $user = User::find($id);
            return $user->permission;
        });

        Route::put('/users/permissions/',function(Request $request) {
            $id = $request->input('id');
            $permissions = $request->input('permissions');
            $groups = $request->input('groups');
            $admin = $request->input('admin');
            $user = User::find($id);
            $user->permission()->sync([]);
            foreach ($permissions as $key => $value) {
                $user->permission()->save(Permissions::where('name', $value)->first());
            }
            $permissionsAll = Permissions::all();
            $permissionsChecked = $permissions;
        });

        Route::post('/users/auths',function() {
            $ret = [];
            foreach (Permissions::all() as $Permission) {
                foreach ($Permission->groups as $group) {
                    if (isset($ret[$group->name])) {
                        array_push($ret[$group->name],$Permission->name);
                    } else {
                        $ret[$group->name] = [$Permission->name];
                    }
                }
                if (isset($ret['all auths'])) {
                    $ret['all auths'] = [...$ret['all auths'], $Permission->name];
                } else {
                    $ret['all auths'] = [$Permission->name];
                }
            }
            return $ret;
        });
    });

    Route::post('/logout',function(Request $request) {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/login');
    });

    Route::get('/dashboard',function() {
        return view ( 'app' );
    })->name('dashboard');

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
});
