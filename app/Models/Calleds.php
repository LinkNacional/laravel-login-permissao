<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Calleds extends Model {
    use HasFactory;

    protected $table = 'called';
    public $timestamps = false;
    protected $fillable = ['matter', 'deadline', 'urgent', 'why_urgent', 'infos'];

    public function responsables() {
        return $this->belongsToMany(User::class);
    }

    public function parts() {
        return $this->belongsToMany(Parts::class);
    }

    public function sectors() {
        return $this->belongsToMany(Sectors::class);
    }
}
