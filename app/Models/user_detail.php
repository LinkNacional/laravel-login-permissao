<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\department;
use App\Models\unit;
use App\Models\user;

class user_detail extends Model {
    /**
     * @property integer $id
     * @property string $lastname
     * @property string $phone
     * @property string $role
     * @property int $adm_user
     * @property int $user_id
     * @property int $department_id
     * @property int $unit_id
     */
    protected $table = 'user_details';

    protected $guarded = [];

    public function departament() {
        return $this->belongsTo(department::class,'department_id');
    }

    public function unit() {
        return $this->belongsTo(unit::class);
    }

    public function admin() {
        return $this->belongsTo(user::class,'adm_user');
    }

    public function user() {
        return $this->hasOne(user::class);
    }
}
