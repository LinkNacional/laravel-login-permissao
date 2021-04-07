<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;
/**
 * @property int $id
 * @property int $user_id
 * @property int $permissions_id
 */
class User_permission extends Pivot {
    /**
     * @var array
     */
    protected $fillable = ['user_id', 'permission_id'];

    public function permissions() {
        return $this->belongsTo('App\Models\Permission');
    }

    public function user() {
        return $this->belongsTo('App\Models\User');
    }
}
