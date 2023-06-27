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
        Schema::create('T_fasilitasTour', function (Blueprint $table) {
            $table->smallIncrements('idTft');
            $table->string('namaTft', 100)->comment('');
            $table->integer('hargaTft')->comment('');
            $table->smallInteger('jumlahTft')->comment('');
            $table->smallInteger('qtyTft')->comment('');
            $table->smallInteger('jmlHariTft')->comment('');
            $table->timestamps();
            $table->primary('idTft');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('T_fasilitasTour');
    }
};
