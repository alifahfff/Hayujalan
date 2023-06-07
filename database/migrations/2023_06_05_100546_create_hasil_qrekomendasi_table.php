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
        Schema::create('hasil_qrekomendasi', function (Blueprint $table) {
            $table->id();
            $table->foreignId('idDataKlien')->constrained(
                table: 'data_kliens'
            )->onDelete('cascade')->onUpdate('cascade');
            $table->float('b_areaWisata', 10, 2);
            $table->float('b_kategori', 10, 2);
            $table->float('b_budget', 10, 2);
            $table->float('b_durasi', 10, 2);
            $table->float('b_jumlahOrang', 10, 2);
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
        Schema::dropIfExists('hasil_qrekomendasi');
    }
};
