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
        Schema::create('crew_operasionals', function (Blueprint $table) {
            $table->id();
            $table->string('ketCrewOperasional', 100);
            $table->float('biayaCrewOperasional', 10);
            $table->string('satuan', 100);
            $table->date('tglBerlakuItem', 100)->nullable();
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
        Schema::dropIfExists('crew_operasionals');
    }
};
