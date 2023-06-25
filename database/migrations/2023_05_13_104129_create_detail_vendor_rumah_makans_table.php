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
        Schema::create('M_detailVendorRumahMakan', function (Blueprint $table) {
            $table->smallIncrements('idDetailRM');
            $table->smallInteger('idRM')->nullable()->comment('');
            $table->char('namaMenu', 100)->nullable()->comment('');
            $table->text('detailMenu')->nullable()->comment('');
            $table->integer('hargaMenu')->nullable()->comment('');
            $table->date('expiredDetailRm')->nullable()->comment('');
            $table->string('statusDetailRm', 20)->nullable()->comment('');
            $table->date('tglUpdateDetailRm')->nullable()->comment('');
            $table->primary('idDetailRM');
            $table->timestamps();

            $table->foreign('idRM')
                ->references('idRM')
                ->on('M_vendorRumahMakan')
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
        Schema::dropIfExists('M_detailVendorRumahMakan');
    }
};
