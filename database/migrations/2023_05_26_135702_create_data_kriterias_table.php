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
        Schema::create('data_kriterias', function (Blueprint $table) {
            $table->id();
            $table->string('namaKriteria', 100);
            $table->string('ketKriteria', 100);
            $table->timestamps();
        });

        #membuat table pivot/bantuan bernama mahasiswa_hobi
        Schema::create('kriteria_bobot', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('idBobot')->unsigned();
            $table->foreign('idBobot')->references('id')->on('data_bobots');
            $table->bigInteger('idKriteria')->unsigned();
            $table->foreign('idKriteria')->references('id')->on('data_kriterias');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('data_kriterias');
        Schema::dropIfExists('kriteria_bobot');
    }
};
