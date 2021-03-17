<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;

/**
 * @property int $id
 * @property string $name
 */
class Permission extends Model {
    /**
     * @var array
     */
    protected $fillable = ['name'];

    public function users() {
        return $this->belongsToMany(User::class);
    }
}
