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
        Schema::table('quotation_rekomendasis', function (Blueprint $table) {
            $table->float('b_areaWisata', 10, 2);
            $table->float('b_kategori', 10, 2);
            $table->float('b_budget', 10, 2);
            $table->float('b_durasi', 10, 2);
            $table->float('b_jumlahOrang', 10, 2);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
