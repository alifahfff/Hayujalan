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
        Schema::create('T_destinasiWisata', function (Blueprint $table) {
            $table->smallInteger('idTdestinasiWisata')->comment('');
            $table->string('namaTdestinasiWisata', 100)->nullable()->comment('');
            $table->integer('hargaTdestinasiWisata')->nullable()->comment('');
            $table->smallInteger('jumlahTdestinasiWisata')->nullable()->comment('');
            $table->smallInteger('qtyTdestinasiWisata')->nullable()->comment('');
            $table->smallInteger('jmlHariTdestinasiWisata')->nullable()->comment('');
            $table->timestamps();

            $table->primary('idTdestinasiWisata');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('T_destinasiWisata');
    }
};
