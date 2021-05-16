<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Called_parts extends Model {
    use HasFactory;

    protected $table = 'called_parts';
    public $timestamps = false;
    protected $fillable = ['called_id', 'parts_id'];
}
