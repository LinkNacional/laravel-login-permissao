<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDetailsTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('details', function (Blueprint $table) {
            $table->id();
            $table->foreignId('adm_user')->constrained('users');
            $table->foreignId('department_id')->constrained();
            $table->foreignId('user_id')->constrained();
            $table->string('unit');
            $table->string('lastname');
            $table->string('phone');
            $table->string('role');
            $table->string('ramal');
            $table->bigInteger('technical_time');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('details');
    }
}
