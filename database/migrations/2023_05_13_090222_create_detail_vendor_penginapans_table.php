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
        Schema::create('detail_vendor_penginapans', function (Blueprint $table) {
            $table->id();
            $table->foreignId('idPenginapan')->default(1)->constrained(
                table: 'vendor_penginapans'
            )->onDelete('cascade')->onUpdate('cascade');
            $table->string('namaJenisKamar', 100)->nullable();
            $table->integer('kapasitasKamar')->nullable();
            $table->integer('qtyKetersediaanKamar')->nullable();
            $table->double('hargaSewaWeekdayPerKamar', 10, 2)->nullable();
            $table->double('hargaSewaWeekendPerKamar', 10, 2)->nullable();
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
        Schema::dropIfExists('detail_vendor_penginapans');
    }
};
