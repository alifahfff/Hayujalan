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
        Schema::create('M_detailVendorTransportasi', function (Blueprint $table) {
            $table->smallIncrements('idDetailTransportasi')->comment('');
            $table->smallInteger('idJenisTransportasi')->comment('');
            $table->smallInteger('idTransportasi')->nullable()->comment('');
            $table->string('nama', 100)->nullable()->comment('');
            $table->smallInteger('tahun')->nullable()->comment('');
            $table->smallInteger('kapasitas')->nullable()->comment('');
            $table->smallInteger('qtyKetersediaan')->nullable()->comment('');
            $table->integer('hargaSewaWeekendDalamKota')->nullable()->comment('');
            $table->integer('hargaSewaWeekdayDalamKota')->nullable()->comment('');
            $table->integer('hargaSewaWeekenLuarKota')->nullable()->comment('');
            $table->integer('hargaSewaWeekdayLuarKota')->nullable()->comment('');
            $table->string('urlInterior', 255)->nullable()->comment('');
            $table->string('urlEksterior', 255)->nullable()->comment('');
            $table->date('expiredDetailTransportasi')->nullable()->comment('');
            $table->string('statusDetailTransportasi', 20)->nullable()->comment('');
            $table->date('tglUpdateDetailTransportasi')->nullable()->comment('');
            $table->primary('idDetailTransportasi');
            $table->foreign('idTransportasi')
                ->references('idTransportasi')
                ->on('M_vendorTransportasi')
                ->onDelete('cascade')
                ->onUpdate('restrict');

            $table->foreign('idJenisTransportasi')
                ->references('idJenisTransportasi')
                ->on('jenisTransportasi')
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
        Schema::dropIfExists('M_detailVendorTransportasi');
    }
};
