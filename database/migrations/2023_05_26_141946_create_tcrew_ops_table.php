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
        Schema::create('T_crew', function (Blueprint $table) {
            $table->smallIncrements('idTcrew');
            $table->string('namaTcrew', 100)->comment('');
            $table->integer('hargaTcrew')->comment('');
            $table->smallInteger('jumlahTcrew')->comment('');
            $table->smallInteger('qtyTcrew')->comment('');
            $table->smallInteger('jmlHariTcrew')->comment('');
            $table->timestamps();
            $table->primary('idTcrew');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('T_crew');
    }
};
