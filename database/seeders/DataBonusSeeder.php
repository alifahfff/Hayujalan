<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DataBonusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('data_bonuses')->insert([
            [
                'ketDataBonus' => 'Frame Foto',
                'biayaDataBonus' => 150000,
                'satuan' => '/pcs'
            ],
        ]);
    }
}
