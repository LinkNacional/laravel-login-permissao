<?php

use GuzzleHttp\Psr7\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\userController;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Http\Controllers\HomeController;

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

Route::get('/login', function () {
    return view('login.login');
})->name('login');

// Route::get('/login', [HomeController::class, 'index'])->name('login');
//->middleware('verified');

Route::post('/login',[userController::class, 'authenticate'])->middleware('verify.login');

Route::get('/register', function () {
    // foreach ($user->Permissions as $Permission) {
    //     var_dump($Permission->name);
    // }
    return view('login.register',['permissions' => userController::getAllAuths()]);
});

Route::post('/register',[userController::class, 'register'])->middleware('verify.register');

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard.dashboard',['user' => Auth::user()]);
    })->name('dashboard');

    Route::get('/dashboard/users', function () {
        return view('dashboard.usersList',['users' => userController::getAll()]);
    });

    Route::get('/dashboard/logout',[userController::class, 'logout']);

    Route::get('/dashboard/permissionsEdit',function () {
        return view('dashboard.permissionsEdit',['permissions' => userController::getAllAuths(), 'permissionsFromUser' => User::find(Auth::user()->id)->Permissions]);
    });
});