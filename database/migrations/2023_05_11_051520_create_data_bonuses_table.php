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
        Schema::create('M_dataBonus', function (Blueprint $table) {
            $table->smallIncrements('idDataBonus');
            $table->string('ketDataBonus', 255)->comment('');
            $table->integer('biayaDataBonus')->comment('');
            $table->date('tglUpdateBonus')->comment('');
            $table->string('satuanBonus', 50)->comment('');
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
        Schema::dropIfExists('M_dataBonus');
    }
};
