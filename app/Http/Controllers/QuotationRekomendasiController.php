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
use App\Models\Transaksi\TDestinasiWisata;
use App\Models\Transaksi\Ttransportasi;
use App\Models\Transaksi\Tpenginapan;
use App\Models\Transaksi\TRumahMakan;
use App\Models\Transaksi\TFasilitasTour;
use App\Models\Transaksi\TcrewOp;
use App\Models\Transaksi\Tevent;
use App\Models\Transaksi\Tbonus;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
        $referensi = quotationRekomendasi::all();
        return Inertia::render('Quotation/QuotationsRecomend', [
            'jenisPaket' => $jenisPaket,
            'areawisata' => $areawisata,
            'kategori' => $kategori,
            'budget' => $budget,
            'quantity' => $quantity,
            'durasi' => $durasi,
            // 'maxArea' => $maxArea,
            // 'minArea' => $minArea,
            // 'maxKategori' => $maxKategori,
            // 'minKategori' => $minKategori,
            // 'maxBudget' => $maxBudget,
            // 'minBudget' => $minBudget,
            // 'maxQTY' => $maxQTY,
            // 'minQTY' => $minQTY,
            // 'maxDurasi' => $maxDurasi,
            // 'minDurasi' => $minDurasi,
            'referensi' => $referensi,
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
        // Mengambil data dari view
        $hasilarea = $request->b_areaWisata;
        $hasilKategori = $request->b_kategori;
        $hasilBudget = $request->b_budget;
        $hasilDurasi = $request->b_durasi;
        $hasilQty = $request->b_jumlahOrang;
        $k_area = $request->k_area;
        $k_kategori = $request->k_kategori;
        $k_jumlahOrang = $request->k_jumlahOrang;
        $k_durasi = $request->k_durasi;
        $k_budget = $request->k_budget;

        //Mencari maximal dan minimal atribut
        $maxArea = dataBobot::where('idKriteria', '=', '1')
        ->max('jumlahBobot');
        $minArea = dataBobot::where('idKriteria', '=', '1')
        ->min('jumlahBobot');
        $maxKategori = dataBobot::where('idKriteria', '=', '2')
        ->max('jumlahBobot');
        $minKategori = dataBobot::where('idKriteria', '=', '2')
        ->min('jumlahBobot');
        $maxBudget = dataBobot::where('idKriteria', '=', '3')
        ->max('jumlahBobot');
        $minBudget = dataBobot::where('idKriteria', '=', '3')
        ->min('jumlahBobot');
        $maxQTY = dataBobot::where('idKriteria', '=', '4')
        ->max('jumlahBobot');
        $minQTY = dataBobot::where('idKriteria', '=', '4')
        ->min('jumlahBobot');
        $maxDurasi = dataBobot::where('idKriteria', '=', '5')
        ->max('jumlahBobot');
        $minDurasi = dataBobot::where('idKriteria', '=', '5')
        ->min('jumlahBobot');

        //Mengambil data referensi atau basis kasus
        $referensi = quotationRekomendasi::join('T_quotationTransaksi', 'T_quotationTransaksi.idQuotationTransaksi', '=', 'R_quotationRekomendasi.idQuotationTransaksi')
            ->join('M_quotationTour', 'M_quotationTour.idQuotationTour', '=', 'R_quotationRekomendasi.idQuotationTour')
            ->join('M_areaWisata', 'M_quotationTour.idAreaWisata', '=', 'M_areaWisata.idAreaWisata')
            ->join('M_dataKategoriTour', 'M_quotationTour.idKategoriTour', '=', 'M_dataKategoriTour.idKategoriTour')
            ->select('R_quotationRekomendasi.*', 
            'T_quotationTransaksi.*',
            'M_quotationTour.*',
            'M_areaWisata.namaArea',
            'M_dataKategoriTour.namaKategoriTour'
            )
            ->get();
        
        $count = quotationRekomendasi::where('bref_areaWisata', '=', $hasilarea)
                        ->count();
        
        $result = [];
        foreach ($referensi as $row) {
            //Data yang diambil
            $idQuotatioRekomendasi = $row->idQuotatioRekomendasi;
            $idQuotationTour = $row->idQuotationTour;
            $idQuotationTransaksi = $row->idQuotationTransaksi;
            $namaProject = $row->namaProject;
            $namaArea = $row->namaArea;
            $namaKategoriTour = $row->namaKategoriTour;
            $sellingPrice = $row->sellingPrice;
            $qty = $row->qty;
            $durasiProject = $row->durasiProject;
            $b_areaWisata = $row->bref_areaWisata;
            $b_kategori = $row->bref_kategori;
            $b_budget = $row->bref_budget;
            $b_durasi = $row->bref_durasi;
            $b_jumlahOrang = $row->bref_jumlahOrang;

            // Normalisasi
            $areaWisata = 1 - ((abs($b_areaWisata - $hasilarea)/($maxArea - $minArea)));
            $kategori = 1 - ((abs($b_kategori - $hasilKategori)/($maxKategori - $minKategori)));
            $jumlahaOrang = 1 - ((abs($b_jumlahOrang - $hasilQty)/($maxQTY - $minQTY)));
            $durasi = 1 - ((abs($b_durasi - $hasilDurasi)/($maxDurasi - $minDurasi)));
            $budget = 1 - ((abs($b_budget - $hasilBudget)/($maxBudget - $minBudget)));

            // Menghitung Similarity
            $bobotArea = $areaWisata * $k_area;
            $bobotKategori = $kategori * $k_kategori;
            $bobotJumlahOrang = $jumlahaOrang * $k_jumlahOrang;
            $bobotDurasi = $durasi * $k_durasi;
            $bobotBudget = $budget * $k_budget;
            $similarity = ($bobotArea + $bobotKategori + $bobotJumlahOrang + $bobotDurasi + $bobotBudget) / 1; 
            
            $result = [
                'idQuotatioRekomendasi' => $idQuotatioRekomendasi,
                'idQuotationTour' => $idQuotationTour,
                'idQuotationTransaksi' => $idQuotationTransaksi,
                'namaProject' => $namaProject,
                'namaArea' => $namaArea,
                'namaKategoriTour' => $namaKategoriTour,
                'qty' => $qty,
                'durasiProject' => $durasiProject,
                // 'namaKlien' => $request->namaKlien,
                'sellingPrice' => $sellingPrice,
                // 'areaWisata' => $areaWisata,
                // 'bobotArea' => $bobotArea,
                // 'kategori' => $kategori,
                // 'bobotKategori' => $bobotKategori,
                // 'jumlahOrang' => $jumlahaOrang,
                // 'bobotJumlahOrang' => $bobotJumlahOrang,
                // 'durasi' => $durasi,
                // 'bobotDurasi' => $bobotDurasi,
                // 'budget' => $budget,
                // 'bobotBudget' => $bobotBudget,
                'similarity' => $similarity
            ];
            
            // Simpan hasil perhitungan dalam array
            $results[] = $result;
        }
       

        // Urutkan hasil perhitungan berdasarkan nilai tertinggi
        usort($results, function ($a, $b) {
            return $b['similarity'] <=> $a['similarity'];
        });

        $topResults = array_slice($results, 0, $count);

        session()->put('data', $topResults);
        return redirect()->route('hasil.qrecomend');
        // if ($k_area == 0.3) {
        //     if ($k_budget == 0.25) {
        //         usort($results, function ($a, $b) {
        //             if ($a['similarity'] == $b['similarity']) {
        //                 if ($a['namaArea'] == $b['namaArea']) {
        //                     return $a['sellingPrice'] <=> $b['sellingPrice'];
        //                 }
        //                 return $a['namaArea'] <=> $b['namaArea'];
        //             }
        //             return $b['similarity'] <=> $a['similarity'];
        //         });                
        //     } else {
        //         usort($results, function ($a, $b) {
        //             if ($a['similarity'] == $b['similarity']) {
        //                 return $a['namaArea'] <=> $b['namaArea'];
        //             }
        //             return $b['similarity'] <=> $a['similarity'];
        //         });
                
        //     }
        // } else if ($k_budget == 0.3) {
        //     usort($results, function ($a, $b) {
        //         if ($a['similarity'] == $b['similarity']) {
        //             return $a['sellingPrice'] <=> $b['sellingPrice'];
        //         }
        //         return $b['similarity'] <=> $a['similarity'];
        //     });            
        // }
        
        // if ($k_budget == 0.3) {
        //     usort($results, function ($a, $b) {
        //         return $b['similarity'] <=> $a['similarity'] && $b['sellingPrice'] <=> $a['sellingPrice'];
        //     });
        // }
        // if ($k_durasi == 0.3) {
        //     usort($results, function ($a, $b) {
        //         return $b['similarity'] <=> $a['similarity'] && $b['durasiProject'] <=> $a['durasiProject'];
        //     });
        // }
        // if ($k_jumlahOrang == 0.3) {
        //     usort($results, function ($a, $b) {
        //         return $b['similarity'] <=> $a['similarity'] && $b['qty'] <=> $a['qty'];
        //     });
        // } 
        // if ($k_kategori == 0.3) {
        //     usort($results, function ($a, $b) {
        //         return $b['similarity'] <=> $a['similarity'] && $b['namaKategoriTour'] <=> $a['namaKategoriTour'];
        //     });
        // }           

        // dd($results);

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
        // $results = $request->result;
        // $topResults = array_slice($results, 0, $count);
        // $ids = array_column($topResults, 'id');
        
        // $solusi = DB::table('quotation_rekomendasis')
        //             ->join('quotation_transaksis', 'quotation_transaksis.id', '=', 'quotation_rekomendasis.idQuotationTransaksi')
        //             ->whereIn('quotation_rekomendasis.id', $ids)
        //             ->select('quotation_transaksis.*', 'quotation_rekomendasis.*')
        //             ->addSelect(DB::raw($topResults[0]['total'] . ' as total'), DB::raw($topResults[0]['similarity'] . ' as similarity'))
        //             ->orderByDesc('similarity') // Menambahkan pengurutan berdasarkan similarity
        //             ->get();
        // $results = $request->result;
        // $topResults = array_slice($results, 0, $count);
        // $ids = array_column($topResults, 'id');

        

        // Menampilkan hasil
        // foreach ($topResults as $result) {
        //     $id = $result['id'];

        //     // Mencari data yang sesuai berdasarkan id
        //     $data = collect($solusi)->firstWhere('id', $id);

        //     // Menggabungkan data dari $results dengan data dari $solusi
        //     $result['idQuotationTransaksi'] = $data->idQuotationTransaksi; 
        //     $result['idQuotationTour'] = $data->idQuotationTour; 
        //     // Menyimpan hasil penggabungan pada array $response
        //     $response['data'][] = $result;
        // }

        // Menampilkan hasil
        // Simpan data dalam sesi
        


        // return Inertia::render('Quotation/QuotationsRecomendResult', [
        //     'data' => $topResults
        // ]);

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

    public function hitungBobot($data)
    {
        return Inertia::render('Quotation/QuotationsRecomendResult', [
            'data' => $data
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\quotationRekomendasi  $quotationRekomendasi
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        // Ambil data dari sesi
        $data = session()->get('data');

        return Inertia::render('Quotation/QuotationsRecomendResult', [
            'data' => $data
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\quotationRekomendasi  $quotationRekomendasi
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $quotationRekomendasi = quotationRekomendasi::with('quotation.klien', 'quotation.areawisata', 'quotation.kategori', 'qTransaksi')->where('idQuotatioRekomendasi', $id)->first();
        $Tbonus = Tbonus::where('idQuotationTransaksi', $quotationRekomendasi->idQuotationTransaksi)->get();
        $TDestinasiWisata = TDestinasiWisata::where('idQuotationTransaksi', $quotationRekomendasi->idQuotationTransaksi)->get();
        $Ttransportasi = Ttransportasi::with('transportasi.detailTransportasi')->where('idQuotationTransaksi', $quotationRekomendasi->idQuotationTransaksi)->get();
        $Tpenginapan = Tpenginapan::with('penginapan.detailPenginapan')->where('idQuotationTransaksi', $quotationRekomendasi->idQuotationTransaksi)->get();
        $TRumahMakan = TRumahMakan::where('idQuotationTransaksi', $quotationRekomendasi->idQuotationTransaksi)->get();
        $TFasilitasTour = TFasilitasTour::where('idQuotationTransaksi', $quotationRekomendasi->idQuotationTransaksi)->get();
        $Tevent = Tevent::where('idQuotationTransaksi', $quotationRekomendasi->idQuotationTransaksi)->get();
        $TcrewOp = TcrewOp::where('idQuotationTransaksi', $quotationRekomendasi->idQuotationTransaksi)->get();

        return Inertia::render('Quotation/QuotationsRecomendDetail', [
            'data' => $quotationRekomendasi,
            'bonus' => $Tbonus,
            'destinasi' => $TDestinasiWisata,
            'transportasi' => $Ttransportasi,
            'penginapan' => $Tpenginapan,
            'rm' => $TRumahMakan,
            'fasilitas' => $TFasilitasTour,
            'event' => $Tevent,
            'crew' => $TcrewOp
        ]);
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
