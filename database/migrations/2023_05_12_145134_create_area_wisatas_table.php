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
        Schema::create('M_areaWisata', function (Blueprint $table) {
            $table->smallInteger('idAreaWisata')->comment('');
            $table->string('namaArea', 100)->comment('');
            $table->timestamps();
            $table->primary('idAreaWisata');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('M_areaWisata');
    }
};
