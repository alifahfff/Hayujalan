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
        Schema::create('vendor_rumah_makans', function (Blueprint $table) {
            $table->id();
            $table->foreignId('idAreaWIsata')->default(1)->constrained(
                table: 'area_wisatas'
            )->onDelete('cascade')->onUpdate('cascade');
            $table->string('namaRM', 100)->nullable();
            $table->string('kapasitasRM', 10)->nullable();
            $table->string('kapasitasParkirBus', 10)->nullable();
            $table->text('alamatRM')->nullable();
            $table->string('tlpRM', 13)->nullable();
            $table->string('picRM', 100)->nullable();
            $table->string('hpPicRM', 13)->nullable();
            $table->text('linkGmaps')->nullable();
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
        Schema::dropIfExists('vendor_rumah_makans');
    }
};
