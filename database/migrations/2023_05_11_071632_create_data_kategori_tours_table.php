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
        Schema::create('M_dataKategoriTour', function (Blueprint $table) {
            $table->smallIncrements('idKategoriTour');
            $table->string('namaKategoriTour', 100)->comment('');
            $table->decimal('presentaseKeuntungan', 8, 2)->nullable()->comment('');
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
        Schema::dropIfExists('M_dataKategoriTour');
    }
};
