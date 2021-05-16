<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property string $name
 */

class Sectors extends Model {
    use HasFactory;

    protected $table = 'sectors';
    public $timestamps = false;
}
