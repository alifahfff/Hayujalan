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
        Schema::create('jenis_transportasis', function (Blueprint $table) {
            $table->id();
            $table->foreignId('idCrewOperasional')->default(1)->constrained(
                table: 'crew_operasionals'
            )->onDelete('cascade')->onUpdate('cascade');
            $table->string('namaJenis', 100)->nullable();
            $table->string('PenggunaanUnit', 10)->nullable();
            $table->string('MaxKapasitas', 100)->nullable();
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
        Schema::dropIfExists('jenis_transportasis');
    }
};
