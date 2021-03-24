<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\userController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\User;

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
});