<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JenisTransportasiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('jenis_transportasis')->insert([
            [
                'namaJenis' => 'MOBIL AVANZA',
                'PenggunaanUnit' => '1',
                'MaxKapasitas' => '1-5',
            ],
        ]);
    }
}
