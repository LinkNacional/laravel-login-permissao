<?php

namespace App\Http\Controllers;

use App\Models\Detail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Models\Permission;
use Doctrine\DBAL\Schema\Index;
use App\Models\Access_log;
use App\Models\Department;

/**
     * creating a new resource.
     * @param  Request  $request
     * @return \Illuminate\Http\Response
     */
class UserController extends Controller {
    function list_users_pagination(Request $request) {
        $page = $request->query('page');
        $num_rows = $request->query('rows');
        //opcional
        $search = $request->query('search');
        //opcional

        $total_num_rows = User::query()->get()->count();
        if ($num_rows == 0) {
            $num_rows = $total_num_rows;
        }
        if ($search) {
            $index = User::query()
                ->where('users.name', 'like', "%{$search}%")
                ->orWhere('users.email', 'like', "%{$search}%")
                ->leftJoin('details', 'users.detail_id', '=', 'details.id')
                ->leftJoin('users AS admin', 'details.adm_user', '=', 'admin.id')
                ->leftJoin('departments', 'details.department_id', '=', 'departments.id')
                ->select('users.*', 'details.unit', 'details.lastname','details.phone','details.role','details.ramal','details.technical_time','admin.name AS admin','departments.name AS department')
                ->orderBy('users.name')
                ->get();
        } else {
            $index = User::query()
                    ->offset(($page - 1) * $num_rows)
                    ->limit($num_rows)
                    ->where('users.name', 'like', "%{$search}%")
                    ->orWhere('users.email', 'like', "%{$search}%")
                    ->leftJoin('details', 'users.detail_id', '=', 'details.id')
                    ->leftJoin('users AS admin', 'details.adm_user', '=', 'admin.id')
                    ->leftJoin('departments', 'details.department_id', '=', 'departments.id')
                    ->select('users.*', 'details.unit', 'details.lastname','details.phone','details.role','details.ramal','details.technical_time','admin.name AS admin','departments.name AS department')
                    ->orderBy('users.name')
                    ->get();
        }
        return ['users' => $index, 'total_num_rows' => $total_num_rows];
    }

    function get_log($id) {
        $log = Access_log::where('user_id',$id)->orderByDesc('hour_access')->get();
        $return = [];
        foreach ($log as $key => $value) {
            $return[] = [
                'data' => $value->hour_access,
                'ip' => $value->ip,
                'status' => $value->status,
            ];
        };
        return $return;
    }

    function edit_user($id,Request $request) {
        $user = User::find($id);
        $technical_time = $request->input('technical_time');
        $user->detail->technical_time = $technical_time;
        $user->detail->save();
        return $user;
    }

    function get_informations($id) {
        $user = User::find($id);
        $log = Access_log::where('user_id',$id)->orderByDesc('hour_access')->get();
        $return = [];
        $return[] = (object) [
            'user' => $user, 
            'details' => $user->detail,
            'department_name' => Department::find($user->detail->department_id)->name,
            'adm_user_name' => User::find($user->detail->adm_user)->name,
        ];

        foreach ($log as $value) {
            $return[] = [
                'data' => $value->hour_access,
                'ip' => $value->ip,
                'status' => $value->status,
            ];
        };
        return $return;
    }

    function verify_user_exist($id) {
        $permission = User::find($id);
        if ($permission) {
            return view ( 'app' );
        } else {
            return response()->view('error.404',[], 404);
        }
    }
}
