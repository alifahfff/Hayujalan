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
        Schema::create('M_detailVendorPenginapan', function (Blueprint $table) {
            $table->smallIncrements('idDetailPenginapan');
            $table->smallInteger('idPenginapan')->nullable()->comment('');
            $table->string('namaJenisKamar', 100)->nullable()->comment('');
            $table->smallInteger('kapasitasKamar')->nullable()->comment('');
            $table->smallInteger('qtyKetersediaanKamar')->nullable()->comment('');
            $table->integer('hargaSewaWeekdayPerKamar')->nullable()->comment('');
            $table->integer('hargaSewaWeekendPerKamar')->nullable()->comment('');
            $table->date('expiredDetailPenginapan')->nullable()->comment('');
            $table->string('statusDetailPenginapan', 20)->nullable()->comment('');
            $table->date('tglUpdateDetailPenginapan')->nullable()->comment('');
            $table->primary('idDetailPenginapan');
            $table->timestamps();

            $table->foreign('idPenginapan')
                ->references('idPenginapan')
                ->on('M_vendorPenginapan')
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
        Schema::dropIfExists('M_detail_vendor_penginapans');
    }
};
