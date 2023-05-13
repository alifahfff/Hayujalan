<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VendorDestinasiWisataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('vendor_destinasi_wisatas')->insert([
            [
                'namaDestinasiWisata' => 'Candi Prambanan',
                'kapasitasDestinasiWisata' => '',
                'kapasitasParkirBus' => '',
                'alamatDestinasiWisata' => 'Jl. Raya Solo - Yogyakarta No.16, Kranggan, Bokoharjo, Kec. Prambanan, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55571',
                'tlpDestinasiWisata' => '(0274) 496401',
                'picDestinasiWisata' => '',
                'hpDestinasiWisata' => '',
                'linkGmaps' => 'https://goo.gl/maps/1F2tayWwMvpeZg3o9',
            ],
        ]);
    }
}
