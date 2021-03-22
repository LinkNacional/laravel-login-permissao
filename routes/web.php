<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\userController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\user;
use App\Models\permission;

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
// Route::get('/{any}', function() {
//     return view ( 'app' );
// })->where('any', '.*');

Route::post('/users',function () {
    $users = [];
    // return User::all()[0]->details;
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
})->middleware('cors');

/**
 * @property string $email
 * @property string $password
 * @property bool $remember
 */
Route::post('/login',[UserController::class, 'authenticate'])->middleware('cors');

Route::post('/createuser',[UserController::class, 'create'])->middleware('cors');

// Route::get('/login',[UserController::class, 'loginView'])->name('login');

// Route::post('/login',[UserController::class, 'authenticate'])->middleware('verify.login');

// Route::get('/register', [UserController::class, 'registerView']);

// Route::post('/register',[userController::class, 'create'])->middleware('verify.register');

// Route::middleware('auth')->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard.dashboard',['permissions' => Auth::user()->permissions]);
    })->name('dashboard');

//     Route::get('/dashboard/users/', function () {
//         return view('dashboard.usersList',['users' => User::all()]);
//     });

//     Route::get('/dashboard/logout',[userController::class, 'logout']);

//     Route::get('/dashboard/permissionsEdit',function () {
//         return view('dashboard.permissionsEdit',['user' => Auth::user(), 'permissions' => Permission::all()]);
//     })->name('editUser');

//     Route::post('/dashboard/permissionsEdit',[userController::class, 'edit']);
// });
// });
