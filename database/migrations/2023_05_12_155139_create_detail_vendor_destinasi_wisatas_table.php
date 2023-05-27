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
        Schema::create('detail_vendor_destinasi_wisatas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('idDestinasiWisata')->default(1)->constrained(
                table: 'vendor_destinasi_wisatas'
            )->onDelete('cascade')->onUpdate('cascade');
            $table->string('rangePeserta', 10)->nullable();
            $table->string('jenisPeserta', 100)->nullable();
            $table->float('tiketMasukWeekday', 10)->nullable();
            $table->float('tiketMasukWeekend', 10)->nullable();
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
        Schema::dropIfExists('detail_vendor_destinasi_wisatas');
    }
};
