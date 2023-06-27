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
        Schema::table('M_quotationTour', function (Blueprint $table) {
            Schema::create('M_quotationTour', function (Blueprint $table) {
                $table->smallInteger('idDataKlien')->comment('');
                $table->smallInteger('idAreaWisata')->nullable()->comment('');
                $table->smallInteger('idKategoriTour')->nullable()->comment('');
    
                $table->foreign('idDataKlien')->references('idDataKlien')->on('M_dataKlien')->onDelete('cascade')->onUpdate('restrict');
                $table->foreign('idAreaWisata')->references('idAreaWisata')->on('M_areaWisata')->onDelete('cascade')->onUpdate('restrict');
                $table->foreign('idKategoriTour')->references('idKategoriTour')->on('M_dataKategoriTour')->onDelete('cascade')->onUpdate('restrict');
            });
        });

        Schema::create('user_quotationTour', function (Blueprint $table) {
            $table->smallInteger('idRoles')->comment('');
            $table->smallInteger('idUser')->comment('');
            $table->smallInteger('idQuotationTour')->comment('');
            $table->timestamps();

            $table->primary(['idRoles', 'idUser', 'idQuotationTour']);
            $table->foreign(['idRoles', 'idUser'])->references(['idRoles', 'idUser'])->on('M_user')->onDelete('cascade')->onUpdate('restrict');
            $table->foreign('idQuotationTour')->references('idQuotationTour')->on('M_quotationTour')->onDelete('cascade')->onUpdate('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_quotationTour');
    }
};
