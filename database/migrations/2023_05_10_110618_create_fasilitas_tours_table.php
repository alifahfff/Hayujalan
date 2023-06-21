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
        Schema::create('fasilitas_tours', function (Blueprint $table) {
            $table->id();
            $table->string('ketFasilitas', 100);
            $table->float('biayaFasilitas', 10);
            $table->string('satuan', 100);
            $table->date('tglBerlakuItem', 100)->nullable();
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
        Schema::dropIfExists('fasilitas_tours');
    }
};
