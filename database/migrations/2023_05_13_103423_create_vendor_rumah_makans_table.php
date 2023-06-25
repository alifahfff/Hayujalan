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
        Schema::create('M_vendorRumahMakan', function (Blueprint $table) {
            $table->smallIncrements('idRM');
            $table->smallInteger('idAreaWisata')->nullable()->comment('');
            $table->string('namaRM', 100)->nullable()->comment('');
            $table->smallInteger('kapasitasRM')->nullable()->comment('');
            $table->string('AlamatRM', 100)->nullable()->comment('');
            $table->string('tlpRM', 13)->nullable()->comment('');
            $table->string('picRM', 50)->nullable()->comment('');
            $table->string('hpPicRM', 13)->nullable()->comment('');
            $table->smallInteger('kapasitasParkirBusRM')->nullable()->comment('');
            $table->string('linkGmapsRM', 255)->nullable()->comment('');
            $table->date('tglBerlakuRm')->nullable()->comment('');
            $table->primary('idRM');
            $table->timestamps();

            $table->foreign(['idKriteria', 'idBobot', 'idAreaWisata'])
                ->references(['idKriteria', 'idBobot', 'idAreaWisata'])
                ->on('M_areaWisata')
                ->onDelete('cascade')
                ->onUpdate('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('M_vendorRumahMakan');
    }
};
