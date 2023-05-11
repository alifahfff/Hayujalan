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
        Schema::create('data_kliens', function (Blueprint $table) {
            $table->id();
            $table->foreignId('jenis_klien_id')->constrained(
                table: 'data_jenis_kliens'
            )->onDelete('cascade')->onUpdate('cascade');
            $table->string('namaKlien', 100);
            $table->string('alamatKlien', 255);
            $table->string('tlpKlien', 13);
            $table->string('namaPicKlien', 100);
            $table->string('tlpPicKlien', 13);
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
        Schema::dropIfExists('data_kliens');
    }
};
