<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class dataEvents extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('data_events')->insert([
            [
                'ketDataEvent' => 'Closing Ceremony',
                'biayaDataEvent' => 1000000,
                'satuan' => '/set'
            ],
        ]);
    }
}
