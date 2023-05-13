<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class crewOperasionals extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('crew_operasionals')->insert([
            [
                'ketCrewOperasional' => 'Driver 1',
                'biayaCrewOperasional' => 150000,
                'satuan' => '/day/bus'
            ],
            [
                'ketCrewOperasional' => 'Driver 2',
                'biayaCrewOperasional' => 150000,
                'satuan' => '/day/bus'
            ],
        ]);
    }
}
