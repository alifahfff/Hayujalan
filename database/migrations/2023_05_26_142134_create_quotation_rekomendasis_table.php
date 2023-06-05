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
        Schema::create('quotation_rekomendasis', function (Blueprint $table) {
            $table->id();
            $table->foreignId('idQuotationTransaksion')->constrained(
                table: 'quotation_transaksis'
            )->onDelete('cascade')->onUpdate('cascade');
            //
            $table->foreignId('idQuotationTour')->constrained(
                table: 'quotation_tours'
            )->onDelete('cascade')->onUpdate('cascade');
            //
            $table->float('totalPrice', 10, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('quotation_rekomendasis');
    }
};
