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
        Schema::create('T_rumahMakan', function (Blueprint $table) {
            $table->smallIncrements('idTrm');
            $table->string('namaTrm', 100)->nullable()->comment('');
            $table->integer('hargaTrm')->nullable()->comment('');
            $table->smallInteger('jumlahTrm')->nullable()->comment('');
            $table->smallInteger('qtyTrm')->nullable()->comment('');
            $table->smallInteger('jmlHariTrm')->nullable()->comment('');
            $table->string('ketRm', 100)->nullable()->comment('');
            $table->primary('idTrm');
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
        Schema::dropIfExists('T_rumahMakan');
    }
};
