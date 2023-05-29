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
        Schema::create('detail_vendor_rumah_makans', function (Blueprint $table) {
            $table->id();
            $table->foreignId('idRM')->default(1)->constrained(
                table: 'vendor_rumah_makans'
            )->onDelete('cascade')->onUpdate('cascade');
            $table->string('namaMenu', 100)->nullable();
            $table->text('detailMenu')->nullable();
            $table->float('hargaMenu', 10, 2)->nullable();
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
        Schema::dropIfExists('detail_vendor_rumah_makans');
    }
};
