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
        Schema::create('M_detailVendorDestinasiWisata', function (Blueprint $table) {
            $table->smallInteger('idDetailDestinasiWisata')->comment('');
            $table->smallInteger('idDestinasiWisata')->nullable()->comment('');
            $table->string('rangePeserta', 20)->nullable()->comment('');
            $table->integer('tiketMasukWeekday')->nullable()->comment('');
            $table->integer('tiketMasukWeekend')->nullable()->comment('');
            $table->string('jenisPeserta', 100)->nullable()->comment('');
            $table->date('expireDetailDestinasi')->nullable()->comment('');
            $table->string('statusDetailDestinasi', 20)->nullable()->comment('');
            $table->date('tglUpdateDetailDestinasi')->nullable()->comment('');
            $table->timestamps();

            $table->primary('idDetailDestinasiWisata');
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
        Schema::dropIfExists('M_detailVendorDestinasiWisata');
    }
};
