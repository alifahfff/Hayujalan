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
        Schema::create('vendor_destinasi_wisatas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('idAreaWisata')->default(1)->constrained(
                table: 'area_wisatas'
            )->onDelete('cascade')->onUpdate('cascade');
            $table->string('namaDestinasiWisata', 100);
            $table->string('kapasitasDestinasiWisata', 10)->nullable();
            $table->string('kapasitasParkirBus', 10)->nullable();
            $table->string('alamatDestinasiWisata', 255)->nullable();
            $table->string('tlpDestinasiWisata', 13)->nullable();
            $table->string('picDestinasiWisata', 100)->nullable();
            $table->string('hpDestinasiWisata', 13)->nullable();
            $table->string('linkGmaps', 255)->nullable();
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
        Schema::dropIfExists('vendor_destinasi_wisatas');
    }
};
