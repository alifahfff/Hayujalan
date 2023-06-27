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
        Schema::create('T_penginapan', function (Blueprint $table) {
            $table->smallIncrements('idTpenginapan');
            $table->string('namaTpenginapan', 100)->nullable()->comment('');
            $table->integer('hargaTpenginapan')->nullable()->comment('');
            $table->smallInteger('jumlahTpenginapan')->nullable()->comment('');
            $table->smallInteger('qtyTpenginapan')->nullable()->comment('');
            $table->smallInteger('jmlHariTpenginapan')->nullable()->comment('');
            $table->string('ketPenginapan', 100)->nullable()->comment('');
            $table->primary('idTpenginapan');
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
        Schema::dropIfExists('T_penginapan');
    }
};
