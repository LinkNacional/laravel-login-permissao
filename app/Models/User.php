<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Models\Permission;
use App\Models\Detail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
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
    use HasFactory;
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
    protected $guarded = [];
    protected $hidden = ['detail_id'];

    public function permission() {
        return $this->belongsToMany(Permission::class);
    }

    public function detail() {
        return $this->belongsTo(Detail::class);
    }
}
