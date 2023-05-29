<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call([
            crewOperasionals::class,
            dataEvents::class,
            fasilitasTours::class,
            DataBonusSeeder::class,
            DataJenisKlienSeeder::class,
            DataKlienSeeder::class,
            DataKategoriTourSeeder::class,
            AreaWisataSeeder::class,
            VendorDestinasiWisataSeeder::class,
            DetailVendorDestinasiWisataSeeder::class,
            JenisTransportasiSeeder::class,
            VendorTransportasiSeeder::class,
            DetailVendorTransportasiSeeder::class,
            VendorPenginapanSeeder::class,
            DetailVendorPenginapanSeeder::class,
            VendorRumahMakanSeeder::class,
            DetailVendorRumahMakanSeeder::class,
            RolesSeeder::class,
            AkesSeeder::class,
        ]);
    }
}
