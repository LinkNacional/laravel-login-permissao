<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class permissionController extends Controller {
    public function permissions_from_user() {
        foreach (Auth::user()->permission as $permission) {
            $permissions[$permission->id] = [
                $permission->name
            ];
        }
        return $permissions;
    }

    public function verify_permission_exist($id) {
        $permission = User::find($id);
        if ($permission) {
            return view ( 'app' );
        } else {
            return response()->view('error.404',[], 404);
        }
    }
}
