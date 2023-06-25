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
        Schema::create('R_quotationRekomendasi', function (Blueprint $table) {
            $table->smallInteger('idQuotationTransaksi')->comment('');
            $table->smallInteger('idDataKlien')->comment('');
            $table->smallInteger('idQuotationTour')->comment('');
            $table->smallInteger('idQuotatioRekomendasi')->comment('');
            $table->integer('totalPriceRef')->nullable()->comment('');
            $table->float('bref_areaWisata', 4)->nullable()->comment('');
            $table->float('bref_kategori', 4)->nullable()->comment('');
            $table->float('bref_durasi', 4)->nullable()->comment('');
            $table->float('bref_budget', 4)->nullable()->comment('');
            $table->float('bref_jumlahOrang', 4)->nullable()->comment('');
            $table->primary('idQuotatioRekomendasi');
            $table->foreign('idQuotationTransaksi')
                ->references('idQuotationTransaksi')
                ->on('T_quotationTransaksi')
                ->onDelete('cascade')
                ->onUpdate('restrict');

            $table->foreign(['idDataKlien', 'idQuotationTour'])
                ->references(['idDataKlien', 'idQuotationTour'])
                ->on('M_quotationTour')
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
        Schema::dropIfExists('R_quotationRekomendasi');
    }
};
