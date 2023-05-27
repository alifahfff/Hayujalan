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
        Schema::create('t_fasilitas_tours', function (Blueprint $table) {
            $table->id();
            $table->foreignId('idFasilitasTour')->constrained(
                table: 'fasilitas_tours'
            )->onDelete('cascade')->onUpdate('cascade');
            $table->integer('qty');
            $table->integer('hari');
            $table->float('harga', 10, 2);
            $table->float('jumlah', 10, 2);
            $table->text('keterangan');
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
        Schema::dropIfExists('t_fasilitas_tours');
    }
};
