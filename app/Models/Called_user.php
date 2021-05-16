<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Called_user extends Model {
    use HasFactory;

    protected $table = 'called_user';
    public $timestamps = false;
    protected $fillable = ['called_id', 'responsables_id'];
}
