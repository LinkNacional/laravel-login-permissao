<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\user_detail;

class unit extends Model {
    /**
    * @property integer $id
    * @property string $name
    */
    protected $table = 'units';
    protected $guarded = [];

    public function user_detail() {
        return $this->hasMany(user_detail::class);
    }
}
