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
        Schema::create('M_vendorTransportasi', function (Blueprint $table) {
            $table->smallIncrements('idTransportasi')->comment('');
            $table->smallInteger('idKriteria')->comment('');
            $table->smallInteger('idBobot')->comment('');
            $table->smallInteger('idAreaWisata')->comment('');
            $table->string('namaTransportasi', 100)->nullable()->comment('');
            $table->string('alamatTransportasi', 255)->nullable()->comment('');
            $table->string('tlpTransportasi', 13)->nullable()->comment('');
            $table->string('picTransportasi', 50)->nullable()->comment('');
            $table->string('hpPicTransportasi', 13)->nullable()->comment('');
            $table->date('tglBerlakuTransportasi')->nullable()->comment('');
            $table->date('createdTransportasi')->nullable()->comment('');
            $table->date('updatedTransportasi')->nullable()->comment('');
            $table->primary('idTransportasi');

            $table->foreign('idAreaWisata')
                ->references('idAreaWisata')
                ->on('M_areaWisata')
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
        Schema::dropIfExists('M_vendorTransportasi');
    }
};
