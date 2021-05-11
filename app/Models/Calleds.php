<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property string $matter
 * @property string $deadline
 * @property boolean $urgent
 * @property string $why_urgent
 * @property string $infos
 * @property string $public
 */

class Calleds extends Model {
    use HasFactory;

    protected $table = 'calleds';
    public $timestamps = false;
    protected $fillable = ['matter', 'deadline', 'urgent', 'why_urgent', 'infos', 'public'];
}
