<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DataKategoriTourSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('data_kategori_tours')->insert([
            [
                'namaKategoriTour' => 'Industrial Visit',
                'presentaseKeuntungan' => 7,
            ],
        ]);
    }
}
