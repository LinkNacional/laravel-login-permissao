<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\CommunicationArea;

class Part extends Model
{
    use HasFactory;

    public function communicationarea() {
        return $this->belongsTo(CommunicationArea::class);
    }
}
