<?php
//comments

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Group;
use App\Models\User;

class Permission extends Model {
    use HasFactory;
    public $timestamps = false;

    protected $fillable = ['name'];

    public function users() {
        return $this->belongsToMany(User::class);
    }

    public function groups() {
        return $this->belongsToMany(Group::class);
    }
}
