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
        Schema::create('M_vendorDestinasiWisata', function (Blueprint $table) {
            $table->smallInteger('idDestinasiWisata')->comment('');
            $table->smallInteger('idAreaWisata')->comment('');
            $table->string('namaDestinasiWisata', 100)->nullable()->comment('');
            $table->smallInteger('kapasitasDestinasiWisata')->nullable()->comment('');
            $table->string('alamatDestinasiWisata', 150)->nullable()->comment('');
            $table->string('tlpDestinasiWisata', 13)->nullable()->comment('');
            $table->string('picDestinasiWisata', 50)->nullable()->comment('');
            $table->string('hpDestinasiWisata', 13)->nullable()->comment('');
            $table->integer('kapasitasParkirBusWisata')->nullable()->comment('');
            $table->string('linkGmapDestinasiWisata', 255)->nullable()->comment('');
            $table->smallInteger('kapasitasParkirBus')->nullable()->comment('');
            $table->date('tglBerlakuDestinasi')->nullable()->comment('');
            $table->timestamps();

            $table->primary('idDestinasiWisata');
            $table->foreign('idAreaWisata')->references('idAreaWisata')->on('M_areaWisata')->onDelete('cascade')->onUpdate('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('M_vendorDestinasiWisata');
    }
};
