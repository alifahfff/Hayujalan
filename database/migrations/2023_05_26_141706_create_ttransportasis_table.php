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
        Schema::create('T_transportasi', function (Blueprint $table) {
            $table->smallIncrements('idTtransportasi')->comment('');
            $table->smallInteger('idQuotationTransaksi')->nullable()->comment('');
            $table->smallInteger('idTransportasi')->nullable()->comment('');
            $table->string('namaTtransportasi', 100)->nullable()->comment('');
            $table->integer('hargaTtransportasi')->nullable()->comment('');
            $table->smallInteger('jumlahTtransportasi')->nullable()->comment('');
            $table->smallInteger('qtyTtransportasi')->nullable()->comment('');
            $table->smallInteger('jmlHariTtransportasi')->nullable()->comment('');
            $table->string('ketTranportasi', 100)->nullable()->comment('');
            $table->primary('idTtransportasi');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('T_transportasi');
    }
};
