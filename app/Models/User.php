<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use App\Models\Users_permission;
use App\Models\Permission;
use Illuminate\Support\Facades\Hash;

/**
 * @property integer $id
 * @property string $name
 * @property string $email
 * @property string $email_verified_at
 * @property string $password
 * @property string $remember_token
 * @property string $created_at
 * @property string $updated_at
 */
class User extends Authenticatable {
    /**
     * The "type" of the auto-incrementing ID.
     * 
     * @var string
     */
    protected $keyType = 'integer';
    public $auth = [];

    /**
     * @var array
     */
    protected $fillable = ['name', 'email', 'email_verified_at', 'password', 'remember_token', 'created_at', 'updated_at', 'auth1', 'auth2', 'auth3'];

    public function __construct() {
    }

    public static function getAuths() {
        $auths = DB::table('users')
            ->join('permission_user', 'users.id', '=', 'permission_user.user_id')
            ->join('permissions', 'permissions.id', '=', 'permission_user.permission_id')
            ->where('users.id', '=', Auth::id())
            ->select('permissions.name')
            ->get();

        return $auths;
    }

    public static function getAll() {
        if (!Gate::allows('control-users',Auth::user())) {
            abort(403);
        }
        $users = DB::select('select * from users');
        return $users;
    }

    public static function getAllAuths() {
        $permissions = DB::select('select * from permissions');
        return $permissions;
    }

    public function Permissions() {
        return $this->belongsToMany(Permission::class);
    }

    public function setPasswordAttribute($password) {
        $this->attributes['password'] = Hash::make($password);
    }
}
//permission_user
