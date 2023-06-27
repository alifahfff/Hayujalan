<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('T_event', function (Blueprint $table) {
            $table->smallIncrements('idTevent');
            $table->string('namaTevent', 100)->comment('');
            $table->integer('hargaTevent')->comment('');
            $table->smallInteger('jumlahTevent')->comment('');
            $table->smallInteger('qtyTevent')->comment('');
            $table->smallInteger('jmlHariTevent')->comment('');
            $table->timestamps();
            $table->primary('idTevent');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('T_event');
    }
};
