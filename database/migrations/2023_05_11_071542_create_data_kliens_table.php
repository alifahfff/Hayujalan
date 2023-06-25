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
        Schema::create('M_dataKlien', function (Blueprint $table) {
            $table->smallInteger('idDataKlien');
            $table->foreignId('idJenisKlien')->constrained(
                table: 'M_dataJenisKlien'
            )->onDelete('cascade')->onUpdate('cascade');
            $table->string('namaKlien', 100)->comment('');
            $table->string('alamatKlien', 255)->comment('');
            $table->string('tlpKlien', 13)->comment('');
            $table->string('namaPicKlien', 100)->comment('');
            $table->string('tlpPicKlien', 13)->comment('');
            $table->date('tglUpdateKlien')->comment('');
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
        Schema::dropIfExists('M_dataKlien');
    }
};
