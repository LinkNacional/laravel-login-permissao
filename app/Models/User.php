<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Models\Permission;
use Illuminate\Database\Eloquent\Model;
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
    protected $table = 'users';
    protected $keyType = 'integer';
    public $auth = [];

    /**
     * @var array
     */
    protected $fillable = ['name', 'email', 'email_verified_at', 'password', 'remember_token', 'created_at', 'updated_at', 'auth1', 'auth2', 'auth3'];

    public function permissions() {
        return $this->belongsToMany(Permission::class);
    }
}
