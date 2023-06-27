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
        Schema::create('M_vendorPenginapan', function (Blueprint $table) {
            $table->smallIncrements('idPenginapan');
            $table->smallInteger('idAreaWisata')->comment('');
            $table->string('namaPenginapan', 100)->comment('');
            $table->smallInteger('bintangPenginapan')->nullable()->comment('');
            $table->string('alamatPenginapan', 255)->nullable()->comment('');
            $table->string('tlpPenginapan', 13)->nullable()->comment('');
            $table->string('picPenginapan', 50)->nullable()->comment('');
            $table->string('hpPicPenginapan', 13)->nullable()->comment('');
            $table->smallInteger('kapasitasParkirBusPenginapan')->nullable()->comment('');
            $table->string('linkGmapsPenginapan', 255)->nullable()->comment('');
            $table->date('tglBerlakuPenginapan')->nullable()->comment('');
            $table->primary('idPenginapan');
            $table->timestamps();

            $table->foreign('idAreaWisata')
                ->references('idAreaWisata')
                ->on('M_areaWisata')
                ->onDelete('cascade')
                ->onUpdate('restrict');
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
