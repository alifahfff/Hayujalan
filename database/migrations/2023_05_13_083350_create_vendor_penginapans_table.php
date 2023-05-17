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
        Schema::create('vendor_penginapans', function (Blueprint $table) {
            $table->id();
            $table->foreignId('idAreaWIsata')->default(1)->constrained(
                table: 'area_wisatas'
            )->onDelete('cascade')->onUpdate('cascade');
            $table->string('namaPenginapan', 100)->nullable();
            $table->string('bintangPenginapan', 10)->nullable();
            $table->text('alamatPenginapan')->nullable();
            $table->string('tlpPenginapan', 13)->nullable();
            $table->string('picPenginapan', 100)->nullable();
            $table->string('hpPicPenginapan', 13)->nullable();
            $table->text('linkGmaps')->nullable();
            $table->string('kapasitasParkirBus', 10)->nullable();
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
        Schema::dropIfExists('vendor_penginapans');
    }
};
