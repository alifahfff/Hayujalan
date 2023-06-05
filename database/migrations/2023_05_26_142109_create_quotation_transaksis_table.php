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
        Schema::create('quotation_transaksis', function (Blueprint $table) {
            $table->id();
            $table->foreignId('idQuotationTour')->constrained(
                table: 'quotation_tours'
            )->onDelete('cascade')->onUpdate('cascade');
            //
            $table->string('namaKlien', 100);
            $table->float('productionPrice', 10, 2);
            $table->float('nettPrice', 10, 2);
            $table->integer('paxPay');
            $table->float('surcharge', 10, 2);
            $table->float('sellingPrice', 10, 2);
            $table->float('totalPrice', 10, 2);
            $table->float('profit', 10, 2);
            $table->string('status', 100);
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
        Schema::dropIfExists('quotation_transaksis');
    }
};
