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
        Schema::table('T_bonus', function (Blueprint $table) {
            $table->smallInteger('idQuotationTransaksi')->nullable()->comment('');
            $table->smallInteger('idDataBonus')->nullable()->comment('');
            $table->foreign('idQuotationTransaksi')->references('idQuotationTransaksi')->on('T_quotationTransaksi')->onDelete('cascade')->onUpdate('restrict');
            $table->foreign('idDataBonus')->references('idDataBonus')->on('M_dataBonus')->onDelete('cascade')->onUpdate('restrict');
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
