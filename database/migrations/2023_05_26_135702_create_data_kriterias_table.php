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
        Schema::create('M_kriteria', function (Blueprint $table) {
            $table->smallIncrements('idKriteria');
            $table->string('namaKriteria', 100)->comment('');
            $table->text('ketKriteria')->nullable()->comment('');
            $table->timestamps();

            $table->primary('idKriteria');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('M_kriteria');
    }
};
