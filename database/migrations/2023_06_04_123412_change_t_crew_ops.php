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
        Schema::table('T_crew', function (Blueprint $table) {
            $table->smallInteger('idCrewOperasional')->nullable()->comment('');
            $table->smallInteger('idQuotationTransaksi')->nullable()->comment('');
            $table->foreign('idQuotationTransaksi')->references('idQuotationTransaksi')->on('T_quotationTransaksi')->onDelete('cascade')->onUpdate('restrict');
            $table->foreign('idCrewOperasional')->references('idCrewOperasional')->on('M_crewOperasional')->onDelete('cascade')->onUpdate('restrict');
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
