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
        Schema::table('t_rumah_makans', function (Blueprint $table) {
            $table->foreignId('idQuotationTransaksion')->constrained(
                table: 'quotation_transaksis'
            )->onDelete('cascade')->onUpdate('cascade');
            //
            $table->foreignId('idQuotationRekomendasi')->constrained(
                table: 'quotation_rekomendasis'
            )->onDelete('cascade')->onUpdate('cascade');
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
