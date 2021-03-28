<?php
//comments

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\groups;
use App\Models\User;

class Permissions extends Model {
    use HasFactory;

    protected $fillable = ['name'];

    public function users() {
        return $this->belongsToMany(User::class);
    }

    public function groups() {
        return $this->belongsToMany(groups::class,'permission_group');
    }
}
