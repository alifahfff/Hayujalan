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
        Schema::create('jenisTransportasi', function (Blueprint $table) {
            $table->smallIncrements('idJenisTransportasi')->comment('');
            $table->string('namaJenis', 100)->nullable()->comment('');
            $table->string('penggunaanUnit', 20)->nullable()->comment('');
            $table->string('crew', 100)->nullable()->comment('');
            $table->string('maxKapasitas', 20)->nullable()->comment('');
            $table->primary('idJenisTransportasi');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('jenisTransportasi');
    }
};
