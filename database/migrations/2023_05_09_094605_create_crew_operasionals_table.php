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
        Schema::create('M_crewOperasional', function (Blueprint $table) {
            $table->smallIncrements('idCrewOperasional');
            $table->string('ketCrewOperasional', 100)->comment('');
            $table->integer('biayaCrewOperasional')->comment('');
            $table->date('tglUpdateCrew')->comment('');
            $table->string('satuanCrew', 50)->comment('');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *`
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('M_crewOperasional');
    }
};
