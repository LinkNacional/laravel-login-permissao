<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Called_sectors extends Model {
    use HasFactory;

    protected $table = 'called_sectors';
    public $timestamps = false;
    protected $fillable = ['calleds_id', 'sector_id'];
}
