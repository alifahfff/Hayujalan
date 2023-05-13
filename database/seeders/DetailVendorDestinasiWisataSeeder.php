<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DetailVendorDestinasiWisataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('detail_vendor_destinasi_wisatas')->insert([
            [
                'rangePeserta' => '',
                'jenisPeserta' => 'Umum',
                'tiketMasukWeekday' => 50000,
                'tiketMasukWeekend' => 50000,
            ],
        ]);
    }
}
