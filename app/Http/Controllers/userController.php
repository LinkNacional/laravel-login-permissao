<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Permission;
use Illuminate\Support\Facades\Hash;

class userController extends Controller {
    public function create(Request $request) {
        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->details_id = 1;
        $user->save();
        $user->Permissions()->sync($request->permissions);
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            return redirect()->route('dashboard');
        }
        return redirect()->route('login');
    }

    public function logout(Request $request) {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/login');
    }

    public function authenticate(Request $request) {
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials,$request->remember)) {
            $request->session()->regenerate();
            return response('logado',200);
        }
        return response('email ou senha invalida', 401);
    }

    public function edit(Request $request) {
        $id = Auth::user()->id;
        $user = User::find($id);
        $user->name = $request->name;
        $user->email = $request->email;
        if ($request->password == '' || $request->password == null) {
            $user->password = Hash::make($request->password);
        }
        $user->save();
        $user->Permissions()->sync($request->permissions);
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            return redirect()->route('editUser');
        }
        return redirect()->route('login');
    }

    //view
    public function loginView() {
        return view('login.login');
    }

    public function registerView() {
        return view('login.register',['permissions' => Permission::all()]);
    }
}
