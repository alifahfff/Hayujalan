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
        Schema::table('T_transportasi', function (Blueprint $table) {
            $table->foreign('idQuotationTransaksi')
                ->references('idQuotationTransaksi')
                ->on('T_quotationTransaksi')
                ->onDelete('cascade')
                ->onUpdate('restrict');

            $table->foreign('idTransportasi')
                ->references('idTransportasi')
                ->on('M_vendorTransportasi')
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
        //
    }
};
