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
        Schema::create('user_keuangans', function (Blueprint $table) {
            $table->id();
            $table->foreignId('idUser')->constrained(
                table: 'users'
            )->onDelete('cascade')->onUpdate('cascade');
            $table->string('namaKeuangan', 100);
            $table->string('tlpKeuangan', 100);
            $table->string('statusKeuangan', 100);
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
        Schema::dropIfExists('user_keuangans');
    }
};
