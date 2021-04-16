<?php

namespace App\Http\Controllers;

use App\Models\Detail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Models\Permission;
use Doctrine\DBAL\Schema\Index;

/**
     * creating a new resource.
     * @param  Request  $request
     * @return \Illuminate\Http\Response
     */
class UserController extends Controller {
    public function create(Request $request) {
    }    

    /**
         * edit the specified resource.
         *
         * @param  Request  $request
         * @return \Illuminate\Http\Response
         */
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

    /**
    * Display a listing of the resource.
    *
    * @return \Illuminate\Http\Response
    */
    public function index() {
        $users = [];
        foreach (User::all() as $user) {
            $users[] = [
                'user' => $user,
                'permission' => $user->permission,
                'detail' => $user->detail,
                'departament' => $user->detail->departament,
                'unit' => $user->detail->unit,
                'admin' => $user->detail->admin
            ];
        }
        return $users;
    }

    /**
       * Display permission from user.
        * @param  int  $id
       * @return \Illuminate\Http\Response
       */
    public function permissions($id) {
        $permission = User::find($id);
        if (count($permission->permission) != 0) {
            return $permission->permission;
        } else {
            return response('user not found',403);
        }
    }
}
