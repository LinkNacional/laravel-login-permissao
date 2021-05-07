<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Permission;

class permissionController extends Controller {
    public function permissions_from_user() {
        foreach (Auth::user()->permission as $permission) {
            $permissions[$permission->id] = [
                $permission->name
            ];
        }
        return $permissions;
    }
}
