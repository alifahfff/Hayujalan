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
        Schema::create('T_bonus', function (Blueprint $table) {
            $table->smallIncrements('idTbonus');
            $table->smallInteger('idQuotationTransaksi')->nullable()->comment('');
            $table->smallInteger('idDataBonus')->nullable()->comment('');
            $table->string('namaTbonus', 100)->comment('');
            $table->integer('hargaTbonus')->comment('');
            $table->smallInteger('jumlahTbonus')->comment('');
            $table->smallInteger('qtyTbonus')->comment('');
            $table->smallInteger('jmlHariTbonus')->comment('');
            $table->timestamps();
            $table->primary('idTbonus');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('T_bonus');
    }
};
