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
        Schema::create('quotation_tours', function (Blueprint $table) {
            $table->id();
            // $table->foreignId('idUserProgram')->default(1)->constrained(
            //     table: 'users'
            // )->onDelete('cascade')->onUpdate('cascade');
            // $table->foreignId('idUserSales')->default(1)->constrained(
            //     table: 'users'
            // )->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('idKategoriTour')->default(1)->constrained(
                table: 'data_kategori_tours'
            )->onDelete('cascade')->onUpdate('cascade');
            // $table->foreignId('idAreaWisata')->default(1)->constrained(
            //     table: 'area_wisatas'
            // )->onDelete('cascade')->onUpdate('cascade');
            $table->string('namaProject', 100)->nullable();
            $table->integer('durasiProject');
            $table->integer('qty');
            $table->integer('foc');
            $table->date('planWaktuPelaksanaan', 100)->nullable();
            $table->float('presentaseKeuntungan');
            $table->float('feeMarketing');
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
        Schema::dropIfExists('quotation_tours');
    }
};
