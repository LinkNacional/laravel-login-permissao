<?php
//post

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Groups extends Model {
    protected $fillable = ['name'];

    public function permissions() {
        return $this->belongsToMany(Permissions::class);
    }
}