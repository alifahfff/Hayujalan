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
        Schema::create('M_fasilitasTour', function (Blueprint $table) {
            $table->smallIncrements('idFasilitasTour');
            $table->string('ketFasilitasTour', 255)->comment('');
            $table->integer('biayaFasilitas')->comment('');
            $table->date('tglUpdatedFasilitas')->comment('');
            $table->string('satuanFasilitas', 50)->comment('');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('M_fasilitasTour');
    }
};
