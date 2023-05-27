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
        Schema::create('detail_vendor_transportasis', function (Blueprint $table) {
            $table->id();
            $table->foreignId('idTransportasi')->default(1)->constrained(
                table: 'vendor_transportasis'
            )->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('idJenisTransportasi')->default(1)->constrained(
                table: 'jenis_transportasis'
            )->onDelete('cascade')->onUpdate('cascade');
            $table->string('nama', 100)->nullable();
            $table->string('tahun', 5)->nullable();
            $table->integer('kapasitas')->nullable();
            $table->integer('qtyKetersediaanUnit')->nullable();
            $table->double('hargaSewaWeekendDalamKota', 10, 2)->nullable();
            $table->double('hargaSewaWeekdayDalamKota', 10, 2)->nullable();
            $table->double('hargaSewaWeekendLuarKota', 10, 2)->nullable();
            $table->double('hargaSewaWeekdayLuarKota', 10, 2)->nullable();
            $table->text('urlInterior')->nullable();
            $table->text('urlEksterior')->nullable();
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
        Schema::dropIfExists('detail_vendor_transportasis');
    }
};
