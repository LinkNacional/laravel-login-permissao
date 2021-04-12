<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Department;
use App\Models\User;

class Detail extends Model {
    use HasFactory;
    /**
     * @property integer $id
     * @property int $adm_user
     * @property int $department_id
     * @property string $unit
     * @property string $lastname
     * @property string $phone
     * @property string $role
     * @property string $ramal
     * @property string $technical_time
     */
    public $timestamps = false;

    protected $guarded = [];

    public function departament() {
        return $this->belongsTo(Department::class,'department_id');
    }

    public function admin() {
        return $this->belongsTo(User::class,'adm_user');
    }

    public function user() {
        return $this->hasOne(User::class);
    }
}
