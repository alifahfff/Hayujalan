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
        Schema::create('vendor_transportasis', function (Blueprint $table) {
            $table->id();
            $table->foreignId('idAreaWisata')->default(1)->constrained(
                table: 'area_wisatas'
            )->onDelete('cascade')->onUpdate('cascade');
            $table->string('namaTransportasi', 100)->nullable();
            $table->text('alamatTransportasi')->nullable();
            $table->string('tlpTransportasi', 13)->nullable();
            $table->string('picTransportasi', 100)->nullable();
            $table->string('hpPicTransportasi', 13)->nullable();
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
        Schema::dropIfExists('vendor_transportasis');
    }
};
