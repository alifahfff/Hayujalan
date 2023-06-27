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
        Schema::create('T_quotationTransaksi', function (Blueprint $table) {
            $table->smallIncrements('idQuotationTransaksi')->comment('');
            $table->integer('productionPrice')->nullable()->comment('');
            $table->integer('nettPrice')->nullable()->comment('');
            $table->smallInteger('paxPay')->nullable()->comment('');
            $table->integer('surcharge')->nullable()->comment('');
            $table->integer('sellingPrice')->nullable()->comment('');
            $table->integer('profit')->nullable()->comment('');
            $table->string('statusTransaksi', 50)->nullable()->comment('');
            $table->string('nilaiKlien', 100)->nullable()->comment('');
            $table->string('statusBerjalan', 100)->nullable()->comment('');
            $table->text('feedback')->nullable()->comment('');
            $table->date('createdQuotation')->nullable()->comment('');
            $table->date('updatedQuotation')->nullable()->comment('');
            $table->primary('idQuotationTransaksi');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('T_quotationTransaksi');
    }
};
