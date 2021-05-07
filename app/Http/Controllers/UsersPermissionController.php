<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Permission;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UsersPermissionController extends Controller {
    public function save(Request $request) {
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
    }

    public function permissions_from_user($id) {
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
    }

    public function permissions_from_user_logged() {
        foreach (Auth::user()->permission as $permission) {
            $permissions[$permission->id] = [
                $permission->name
            ];
        }
        return $permissions;
    }
}
