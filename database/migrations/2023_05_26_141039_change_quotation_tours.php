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
        Schema::table('quotation_tours', function (Blueprint $table) {
            $table->foreignId('idUserProgram')->constrained(
                table: 'user_programs'
            )->onDelete('cascade')->change();
            $table->foreignId('idUserSales')->constrained(
                table: 'users'
            )->onDelete('cascade')->change();
            $table->foreignId('idAreaWisata')->constrained(
                table: 'area_wisatas'
            )->onDelete('cascade')->change();
            $table->foreignId('idBobot')->constrained(
                table: 'data_bobots'
            )->onDelete('cascade')->change();
            $table->foreignId('idKriteria')->constrained(
                table: 'data_kriterias'
            )->onDelete('cascade')->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
