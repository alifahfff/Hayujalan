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
            $table->unsignedBigInteger('jenis_klien_id');
            $table->string('namaKlien', 100);
            $table->string('alamatKlien', 255)->nullable();
            $table->string('tlpKlien', 13)->nullable();
            $table->string('namaPicKlien', 100)->nullable();
            $table->string('tlpPicKlien', 13)->nullable();
            $table->date('tglBerlakuItem', 100)->nullable();
            $table->timestamps();

            // $table->foreignId('jenis_klien_id')->constrained(
            //     table: 'data_jenis_kliens'
            // )->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('jenis_klien_id')->references('id')->on('data_jenis_kliens')->onDelete('cascade');
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
