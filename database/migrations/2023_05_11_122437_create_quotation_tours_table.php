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
        Schema::create('M_quotationTour', function (Blueprint $table) {
            $table->smallInteger('idQuotationTour')->comment('');
            $table->string('namaProject', 100)->comment('');
            $table->smallInteger('durasiProject')->nullable()->comment('');
            $table->smallInteger('qty')->nullable()->comment('');
            $table->smallInteger('foc')->nullable()->comment('');
            $table->date('planWaktuPelaksanaan')->nullable()->comment('');
            $table->decimal('persentaseKeuntungan')->nullable()->comment('');
            $table->integer('feeMarketing')->nullable()->comment('');
            $table->date('tglBerlakuQuotation')->nullable()->comment('');
            $table->timestamps();

            $table->primary('idQuotationTour');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('M_quotationTour');
    }
};
