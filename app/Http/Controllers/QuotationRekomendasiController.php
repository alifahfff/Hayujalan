<?php

namespace App\Http\Controllers;

use App\Models\Quotation\quotationRekomendasi;
use App\Models\Vendor\areaWisata;
use App\Models\Quotation\dataBobot;
use App\Models\Quotation\quotationTour;
use App\Models\Quotation\quotationTransaksi;
use App\Models\Itemq\dataJenisKlien;
use App\Http\Controllers\Controller;
use App\Models\Quotation\hasilQRekomendasi;
use App\Models\Itemq\dataKlien;
use Inertia\Inertia;
use Illuminate\Http\Request;

class QuotationRekomendasiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    public function showrec(quotationTour $quotationTour)
    {
        $areawisata = dataBobot::with('kriteria')
        ->where('idKriteria', '=', '1')->get();
        $kategori = dataBobot::with('kriteria')
        ->where('idKriteria', '=', '2')->get();
        $budget = dataBobot::with('kriteria')
        ->where('idKriteria', '=', '3')->get();
        $quantity = dataBobot::with('kriteria')
        ->where('idKriteria', '=', '4')->get();
        $durasi = dataBobot::with('kriteria')
        ->where('idKriteria', '=', '5')->get();
        $jenisPaket = dataJenisKlien::all();
        $maxArea = dataBobot::where('idKriteria', '=', '1')
        ->max('jmlBobot');
        $minArea = dataBobot::where('idKriteria', '=', '1')
        ->min('jmlBobot');
        $maxKategori = dataBobot::where('idKriteria', '=', '2')
        ->max('jmlBobot');
        $minKategori = dataBobot::where('idKriteria', '=', '2')
        ->min('jmlBobot');
        $maxBudget = dataBobot::where('idKriteria', '=', '3')
        ->max('jmlBobot');
        $minBudget = dataBobot::where('idKriteria', '=', '3')
        ->min('jmlBobot');
        $maxQTY = dataBobot::where('idKriteria', '=', '4')
        ->max('jmlBobot');
        $minQTY = dataBobot::where('idKriteria', '=', '4')
        ->min('jmlBobot');
        $maxDurasi = dataBobot::where('idKriteria', '=', '5')
        ->max('jmlBobot');
        $minDurasi = dataBobot::where('idKriteria', '=', '5')
        ->min('jmlBobot');
        return Inertia::render('Quotation/QuotationsRecomend', [
            'jenisPaket' => $jenisPaket,
            'areawisata' => $areawisata,
            'kategori' => $kategori,
            'budget' => $budget,
            'quantity' => $quantity,
            'durasi' => $durasi,
            'maxArea' => $maxArea,
            'minArea' => $minArea,
            'maxKategori' => $maxKategori,
            'minKategori' => $minKategori,
            'maxBudget' => $maxBudget,
            'minBudget' => $minBudget,
            'maxQTY' => $maxQTY,
            'minQTY' => $minQTY,
            'maxDurasi' => $maxDurasi,
            'minDurasi' => $minDurasi,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $hasilarea = $request->b_areaWisata;
        $hasilKategori = $request->b_kategori;
        $hasilBudget = $request->b_budget;
        $hasilDurasi = $request->b_durasi;
        $hasilQty = $request->b_jumlahOrang;
        $b_kriteria1 = $request->b_kriteria1;
        $b_kriteria2 = $request->b_kriteria2;
        $b_kriteria3 = $request->b_kriteria3;
        $b_kriteria4 = $request->b_kriteria4;
        $b_kriteria5 = $request->b_kriteria5;
        $referensi = quotationRekomendasi::join('t_destinasi_wisatas', 't_destinasi_wisatas.idQuotationRekomendasi', '=', 'quotation_rekomendasis.id')
                        ->select(
                        'quotation_rekomendasis.b_areaWisata', 
                        'quotation_rekomendasis.b_kategori', 
                        'quotation_rekomendasis.b_budget', 
                        'quotation_rekomendasis.b_durasi', 
                        'quotation_rekomendasis.b_jumlahOrang',
                        'quotation_rekomendasis.id',
                        't_destinasi_wisatas.idQuotationRekomendasi',
                        't_destinasi_wisatas.keterangan',
                        't_destinasi_wisatas.harga',)
                        ->get();
        $count = quotationRekomendasi::where('b_areaWisata', '=', $hasilarea)
                        ->count();
        
        $result = [];
        foreach ($referensi as $row) {
            $id = $row->id;
            // $idDestinasi = $row->id;
            $b_areaWisata = $row->b_areaWisata;
            $b_kategori = $row->b_kategori;
            $b_budget = $row->b_budget;
            $b_durasi = $row->b_durasi;
            $b_jumlahOrang = $row->b_jumlahOrang;
            $keterangan = $row->keterangan;
            $harga = $row->harga;
            $result = [
                'id' => $id,
                'harga' => $harga,
                // 'areaWisata' => (pow(($b_areaWisata - $hasilarea),2) * $b_kriteria1),
                // 'kategori' => (pow(($b_kategori - $hasilKategori),2) * $b_kriteria2),
                // 'jumlahOrang' => (pow(($b_jumlahOrang - $hasilQty),2) * $b_kriteria3),
                // 'durasi' => (pow(($b_durasi - $hasilDurasi),2) * $b_kriteria4),
                // 'budget' => (pow(($b_budget - $hasilBudget),2) * $b_kriteria5),
                // 'total' => (sqrt((pow(($b_areaWisata - $hasilarea),2) * $b_kriteria1) + (pow(($b_kategori - $hasilKategori),2) * $b_kriteria2) + (pow(($b_jumlahOrang - $hasilQty),2) * $b_kriteria3) + (pow(($b_durasi - $hasilDurasi),2) * $b_kriteria4) + (pow(($b_budget - $hasilBudget),2) * $b_kriteria5))) / 1,
                $total = (sqrt(
                    (pow(($b_areaWisata - $hasilarea),2) * $b_kriteria1) + 
                    (pow(($b_kategori - $hasilKategori),2) * $b_kriteria2) + 
                    (pow(($b_jumlahOrang - $hasilQty),2) * $b_kriteria3) + 
                    (pow(($b_durasi - $hasilDurasi),2) * $b_kriteria4) + 
                    (pow(($b_budget - $hasilBudget),2) * $b_kriteria5))) / 1,
                'similiarty' => 1 - $total,
            ];
            // Simpan hasil perhitungan dalam array
            $results[] = $result;
        }

        // Urutkan hasil perhitungan berdasarkan nilai tertinggi
        // usort($results, function ($a, $b) {
        //     return $b['similiarty'] <=> $a['similiarty'];
        // });

        

        // $groupedResults = [];
        // foreach ($results as $result) {
        //     $id = $result['id'];
        //     if (!isset($groupedResults[$id])) {
        //         $groupedResults[$id] = $result;
        //     } else {
        //         $groupedResults[$id][] = $result;
        //     }
        // }

        // $finalResults = [];
        // foreach ($groupedResults as $id => $result) {
        //     if (is_array($result[0])) {
        //         $finalResults = array_merge($finalResults, $result);
        //     } else {
        //         $finalResults[] = $result;
        //     }
        // }
        $ids = [];
        $topResults = array_slice($results, 0, $count);
        foreach ($topResults as $row) {
            $id = $row['id'];
            $ids= [$id];
            $idds[] = $ids;
        }
        dd($results);

        // $solusi = quotationRekomendasi::join('t_destinasi_wisatas', 't_destinasi_wisatas.idQuotationRekomendasi', '=', 'quotation_rekomendasis.id')
        //                 ->select(
        //                 'quotation_rekomendasis.id',
        //                 'quotation_rekomendasis.b_areaWisata', 
        //                 'quotation_rekomendasis.b_kategori', 
        //                 'quotation_rekomendasis.b_budget', 
        //                 'quotation_rekomendasis.b_durasi', 
        //                 'quotation_rekomendasis.b_jumlahOrang',
        //                 't_destinasi_wisatas.idQuotationRekomendasi',
        //                 't_destinasi_wisatas.keterangan',
        //                 't_destinasi_wisatas.harga',)
        //                 ->get();

        // $combinedResults = $this->combineDetails($topResults);
        // $combinedResultsWithPrevious = array_merge($topResults, $combinedResults);

        // dd($combinedResultsWithPrevious);

        // Menampilkan hasil sebelumnya pada $topResults
        // dd('Hasil sebelumnya:', $topResults);

        // Menggabungkan hasil menggunakan rumus permutasi kombinasi
        // $combinedResults = $this->combineArrays($topResults);
        // //  dd('Hasil kombinasi:', $combinedResults);

        //  $combinedResultsWithDetails = $this->combineDetails($combinedResults);
        //  dd('Hasil kombinasi:', $combinedResultsWithDetails);
        // dd($results);
        // return response()->json([
        //     'Hasil kombinasi:' => $combinedResultsWithPrevious
        // ]);
        // return redirect()->back()->with('message', 'item berhasil dibuat');

    }

    // private function combineArrays($array)
    // {
    //     $combinations = [[]];
    //     foreach ($array as $subArray) {
    //         $tempCombinations = [];
    //         foreach ($combinations as $combination) {
    //             foreach ($subArray as $item) {
    //                 $tempCombination = $combination;
    //                 $tempCombination[] = $item;
    //                 $tempCombinations[] = $tempCombination;
    //             }
    //         }
    //         $combinations = $tempCombinations;
    //     }
    //     return $combinations;
    // }

    private function combineDetails($results)
    {
        $combinedResultsWithDetails = [];
        foreach ($results as $result) {
            $id = $result['id'];
            $keterangan = $result['keterangan'];
            $harga = $result['harga'];

            $combinedResultsWithDetails[] = [
                'id' => $id,
                'keterangan' => $keterangan,
                'harga' => $harga,
            ];
        }
        return $combinedResultsWithDetails;
    }

    public function hitungBobot(Request $request)
    {
        $data = $request->all();
        dd($data);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\quotationRekomendasi  $quotationRekomendasi
     * @return \Illuminate\Http\Response
     */
    public function show(quotationRekomendasi $quotationRekomendasi)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\quotationRekomendasi  $quotationRekomendasi
     * @return \Illuminate\Http\Response
     */
    public function edit(quotationRekomendasi $quotationRekomendasi)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\quotationRekomendasi  $quotationRekomendasi
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, quotationRekomendasi $quotationRekomendasi)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\quotationRekomendasi  $quotationRekomendasi
     * @return \Illuminate\Http\Response
     */
    public function destroy(quotationRekomendasi $quotationRekomendasi)
    {
        //
    }
}
