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
        Schema::create('tbonuses', function (Blueprint $table) {
            $table->id();
            $table->foreignId('idDataBonus')->constrained(
                table: 'data_bonuses'
            )->onDelete('cascade')->onUpdate('cascade');
            $table->integer('qty');
            $table->integer('hari');
            $table->float('harga', 10, 2);
            $table->float('jumlah', 10, 2);
            $table->text('keterangan');
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
        Schema::dropIfExists('tbonuses');
    }
};
