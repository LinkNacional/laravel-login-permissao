<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Access_log;
use App\Models\User;

class LoginController extends Controller {
    /**
     * Remove user from session.
     * @param  Request  $request
     * @return \Illuminate\Http\Response
     */
    public function logout(Request $request) {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/login');
    }

    /**
    * authenticate user from login.
    * @param  Request  $request
    * @return \Illuminate\Http\Response
    */
    public function authenticate(Request $request) {
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials,$request->remember)) {
            $request->session()->regenerate();
            LoginController::save_access_log($request,'ok');
            return response('logado',200);
        }
        LoginController::save_access_log($request,'fail');
        return response('email ou senha invalida', 401);
    }

    public static function save_access_log(Request $request,$status) {
        $id = User::select('id')->where('email',$request->email)->get();

        $log = new Access_log();
        $log->user_id = isset($id[0]) ? $id[0]->id : null;
        $log->ip = $request->ip();
        $log->status = $status;
        $log->save();
    }
}