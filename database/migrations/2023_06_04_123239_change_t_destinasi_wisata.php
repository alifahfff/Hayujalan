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
        Schema::table('T_destinasiWisata', function (Blueprint $table) {
            $table->smallInteger('idQuotationTransaksi')->nullable()->comment('');
            $table->smallInteger('idDestinasiWisata')->nullable()->comment('');
            $table->foreign('idQuotationTransaksi')->references('idQuotationTransaksi')->on('T_quotationTransaksi')->onDelete('cascade')->onUpdate('restrict');
            $table->foreign('idDestinasiWisata')->references('idDestinasiWisata')->on('M_vendorDestinasiWisata')->onDelete('cascade')->onUpdate('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
