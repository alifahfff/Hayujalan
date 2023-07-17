<?php

namespace App\Http\Controllers;

use App\Models\Quotation\quotationRekomendasi;
use App\Models\Vendor\areaWisata;
use App\Models\Quotation\quotationTour;
use App\Models\Quotation\quotationTransaksi;
use App\Models\Itemq\dataKategoriTour;
use App\Models\Vendor\vendorDestinasiWisata;
use App\Models\Vendor\detailVendorDestinasiWisata;
use App\Models\Vendor\vendorTransportasi;
use App\Models\Vendor\detailVendorTransportasi;
use App\Models\Vendor\vendorRumahMakan;
use App\Models\Vendor\detailVendorRumahMakan;
use App\Models\Vendor\vendorPenginapan;
use App\Models\Vendor\detailVendorPenginapan;
use App\Models\Itemq\fasilitasTour;
use App\Models\Itemq\crewOperasional;
use App\Models\Itemq\dataEvent;
use App\Models\Itemq\dataBonus;
use App\Models\Itemq\dataJenisKlien;
use App\Models\Quotation\dataBobot;
use App\Models\Transaksi\TDestinasiWisata;
use App\Models\Transaksi\Ttransportasi;
use App\Models\Transaksi\Tpenginapan;
use App\Models\Transaksi\TRumahMakan;
use App\Models\Transaksi\TFasilitasTour;
use App\Models\Transaksi\TcrewOp;
use App\Models\Transaksi\Tevent;
use App\Models\Transaksi\Tbonus;
use App\Models\Itemq\dataKlien;
use App\Models\User;
use App\Models\UserQuotation;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

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
        $tglBerlakuQuotation = $request->tglBerlakuQuotation;

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
            $masaBerlakuQuotation = $row->masaBerlakuQuotation;
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
            $tglBerlakuTimestamp = strtotime($tglBerlakuQuotation);
            $masaBerlakuTimestamp = strtotime($masaBerlakuQuotation);
            
            if ($tglBerlakuTimestamp < $masaBerlakuTimestamp) {
                $result = [
                    'idQuotatioRekomendasi' => $idQuotatioRekomendasi,
                    'idQuotationTour' => $idQuotationTour,
                    'idQuotationTransaksi' => $idQuotationTransaksi,
                    'namaProject' => $namaProject,
                    'namaArea' => $namaArea,
                    'namaKategoriTour' => $namaKategoriTour,
                    'qty' => $qty,
                    'durasiProject' => $durasiProject,
                    'tglBerlakuQuotation' => $tglBerlakuQuotation,
                    'masaBerlakuQuotation' => $masaBerlakuQuotation,
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
        }
       
        // Urutkan hasil perhitungan berdasarkan nilai tertinggi
        usort($results, function ($a, $b) {
            return $b['similarity'] <=> $a['similarity'];
        });

        // dd($results); 

        $topResults = array_slice($results, 0, $count);
        // dd($topResults);
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
    public function edit(Request $request)
    {
        $areawisata = areaWisata::all();
        $user = User::where('idRoles', '=', '4')->get();
        $kategoriwisata = dataKategoriTour::all();
        $destinasi = vendorDestinasiWisata::all();
        $detailDestinasi = detailVendorDestinasiWisata::all();
        $rumahMakan = vendorRumahMakan::all();
        $detailRM = detailVendorRumahMakan::all();
        $penginapan = vendorPenginapan::all();
        $detailPenginapan = detailVendorPenginapan::all();
        $transportasi = vendorTransportasi::all();
        $detaiTransportasi = detailVendorTransportasi::all(); 
        $fasilitasTour = fasilitasTour::all();
        $crewOperasional = crewOperasional::all();
        $dataEvent = dataEvent::all();
        $dataBonus = dataBonus::all();
        $jenisKlien = dataJenisKlien::all();
        $quotationRekomendasi = quotationRekomendasi::with('quotation.klien.jenisKlien', 'quotation.areawisata', 'quotation.kategori', 'qTransaksi')->where('idQuotatioRekomendasi', $request->id)->first();
        $Tbonus = Tbonus::with('bonus')->where('idQuotationTransaksi', $quotationRekomendasi->idQuotationTransaksi)->get();
        $TDestinasiWisata = TDestinasiWisata::with('destinasi.detaildw')->where('idQuotationTransaksi', $quotationRekomendasi->idQuotationTransaksi)->get();
        $Ttransportasi = Ttransportasi::with('transportasi.detailTransportasi')->where('idQuotationTransaksi', $quotationRekomendasi->idQuotationTransaksi)->get();
        $Tpenginapan = Tpenginapan::with('penginapan.detailPenginapan')->where('idQuotationTransaksi', $quotationRekomendasi->idQuotationTransaksi)->get();
        $TRumahMakan = TRumahMakan::with('rumahMakan.detailRM')->where('idQuotationTransaksi', $quotationRekomendasi->idQuotationTransaksi)->get();
        $TFasilitasTour = TFasilitasTour::with('fasilitasTour')->where('idQuotationTransaksi', $quotationRekomendasi->idQuotationTransaksi)->get();
        $Tevent = Tevent::with('event')->where('idQuotationTransaksi', $quotationRekomendasi->idQuotationTransaksi)->get();
        $TcrewOp = TcrewOp::with('crew')->where('idQuotationTransaksi', $quotationRekomendasi->idQuotationTransaksi)->get();
        // $userQuotation = UserQuotation::with('users', 'quotationTours')->where('idQuotationTour', $quotationRekomendasi->idQuotationTour)->get();
        $quotation = quotationTour::with('userQuotations')->find($quotationRekomendasi->idQuotationTour)->get();
        $usersales = $quotation = QuotationTour::with(['userQuotations' => function ($query) {
            $query->whereHas('userQuotations', function ($query) {
                $query->where('idRoles', 4);
            });
        }])->find($quotationRekomendasi->idQuotationTour);
        return Inertia::render('Quotation/QuotationsRecomendEdit', [
            'areawisata' => $areawisata,
            'user' => $user,
            'usersales' => $usersales,
            // 'userQuotation' => $userQuotation,
            'kategoriwisata' => $kategoriwisata,
            'destinasi' => $destinasi,
            'detailDestinasi' => $detailDestinasi,
            'transportasi' => $transportasi,
            'detaiTransportasi' => $detaiTransportasi,
            'rumahMakan' => $rumahMakan,
            'detailRM' => $detailRM,
            'penginapan' => $penginapan,
            'detailPenginapan' => $detailPenginapan,
            'fasilitasTour' => $fasilitasTour,
            'crewOperasional' => $crewOperasional,
            'dataEvent' => $dataEvent,
            'dataBonus' => $dataBonus,
            'jenisKlien' => $jenisKlien,
            'data' => $quotationRekomendasi,
            'Tbonus' => $Tbonus,
            'Tdestinasi' => $TDestinasiWisata,
            'Ttransportasi' => $Ttransportasi,
            'Tpenginapan' => $Tpenginapan,
            'TRumahMakan' => $TRumahMakan,
            'TFasilitas' => $TFasilitasTour,
            'Tevent' => $Tevent,
            'Tcrew' => $TcrewOp,
            'userQuotation' => $quotation,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\quotationRekomendasi  $quotationRekomendasi
     * @return \Illuminate\Http\Response
     */

    public function update(Request $request)
    {
        $klien = dataKlien::create([
            'idJenisKlien' => $request->quotationTour['idJenisKlien'],
            'namaKlien' => $request->quotationTour['namaKlien'],
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        $quotationTour = quotationTour::create([
            'idKategoriTour' => $request->quotationTour['idKategoriTour'],
            'namaProject' => $request->quotationTour['namaProject'],
            'durasiProject' => $request->quotationTour['durasiProject'],
            'qty' => $request->quotationTour['jumlahOrang'],
            'foc' => $request->quotationTour['foc'],
            'planWaktuPelaksanaan' => $request->quotationTour['planWaktuPelaksanaan'],
            'persentaseKeuntungan' => $request->quotationTour['persentaseKeuntungan'],
            'feeMarketing' => $request->quotationTour['feeMarketing'],
            'tglBerlakuQuotation' => $request->quotationTour['tglBerlakuQuotation'],
            'masaBerlakuQuotation' => $request->quotationTour['masaBerlakuQuotation'],
            'idAreaWisata' => $request->quotationTour['idAreaWisata'],
            'idDataKlien' => $klien->idDataKlien,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        $quotationTransaksi = quotationTransaksi::create([
            'productionPrice' => $request->productionPrice,
            'nettPrice' => $request->nettPrice,
            'paxPay' => $request->paxPay,
            'surcharge' => $request->surcharge,
            'sellingPrice' => $request->sellingPrice,
            'totalPrice' => $request->totalPrice,
            'profit' => $request->profit,
            'statusTransaksi' => $request->quotationTour['statusTransaksi'],
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        $quotationRekomendasi = quotationRekomendasi::create([
            'idQuotationTour' => $quotationTour->idQuotationTour,
            'idQuotationTransaksi' => $quotationTransaksi->idQuotationTransaksi,
            'bref_areaWisata' => $request->quotationTour['bref_areaWisata'],
            'bref_kategori' => $request->quotationTour['bref_kategori'],
            'bref_durasi' => $request->quotationTour['bref_durasi'],
            'bref_budget' => $request->quotationTour['bref_budget'],
            'bref_jumlahOrang' => $request->quotationTour['bref_jumlahOrang'],
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        $userprogram = UserQuotation::create([
            'idUser' => $request->quotationTour['idProgram'],
            'idQuotationTour' => $quotationTour->idQuotationTour,
        ]);

        $usersales = UserQuotation::create([
            'idUser' => $request->quotationTour['idSales'],
            'idQuotationTour' => $quotationTour->idQuotationTour,
        ]);

        $bonusData = $request->bonus;
        if ($request->bonus[0]['idDataBonus'] != 0) {
            foreach ($bonusData as $bonus) {
                $tbonus = Tbonus::create([
                    'idDataBonus' => $bonus['idDataBonus'],
                            'qtyTbonus' => $bonus['qtyTbonus'],
                            'jmlHariTbonus' => $bonus['jmlHariTbonus'],
                            'hargaTbonus' => $bonus['hargaTbonus'],
                            'jumlahTbonus' => $bonus['jumlahTbonus'],
                            'namaTbonus' => $bonus['namaTbonus'],
                            'idQuotationTransaksi' => $request->quotationTour['idQuotationTransaksi'],
                            'created_at' => Carbon::now(),
                            'updated_at' => Carbon::now(),
                ]);
            }
        }

        $eventData = $request->event;
        if ($request->event[0]['idDataEvent'] != 0) {
            foreach ($eventData as $event) {
                $tevent = Tevent::create([
                    'idDataEvent' => $event['idDataEvent'],
                            'qtyTevent' => $event['qtyTevent'],
                            'jmlHariTevent' => $event['jmlHariTevent'],
                            'hargaTevent' => $event['hargaTevent'],
                            'jumlahTevent' => $event['jumlahTevent'],
                            'namaTevent' => $event['namaTevent'],
                            'idQuotationTransaksi' => $request->quotationTour['idQuotationTransaksi'],
                            'created_at' => Carbon::now(),
                            'updated_at' => Carbon::now(),
                ]);
            }
        }

        $crewData = $request->crew;
        if ($request->crew[0]['idCrewOperasional'] != 0) {
            foreach ($crewData as $crew) {
                $tcrew = TcrewOp::create([
                    'idCrewOperasional' => $crew['idCrewOperasional'],
                    'qtyTcrew' => $crew['qtyTcrew'],
                    'jmlHariTcrew' => $crew['jmlHariTcrew'],
                    'hargaTcrew' => $crew['hargaTcrew'],
                    'jumlahTcrew' => $crew['jumlahTcrew'],
                    'namaTcrew' => $crew['namaTcrew'],
                    'idQuotationTransaksi' => $request->quotationTour['idQuotationTransaksi'],
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            }
        }

        $fasilitasData = $request->fasilitas;
        if ($request->fasilitas[0]['idFasilitasTour'] != 0) {
            foreach ($fasilitasData as $fasilitas) {
                $tfasilitas = TFasilitasTour::create([
                    'idFasilitasTour' => $fasilitas['idFasilitasTour'],
                            'qtyTft' => $fasilitas['qtyTft'],
                            'jmlHariTft' => $fasilitas['jmlHariTft'],
                            'hargaTft' => $fasilitas['hargaTft'],
                            'jumlahTft' => $fasilitas['jumlahTft'],
                            'namaTft' => $fasilitas['namaTft'],
                            'idQuotationTransaksi' => $request->quotationTour['idQuotationTransaksi'],
                            'created_at' => Carbon::now(),
                            'updated_at' => Carbon::now(),
                ]);
            }
        }

        $destinasiData = $request->destinasi;
        if ($request->destinasi[0]['idDestinasiWisata'] != 0) {
            foreach ($destinasiData as $destinasi) {
                $tDestinasiWisata = TDestinasiWisata::create([
                    'idDestinasiWisata' => $destinasi['idDestinasiWisata'],
                            'qtyTdestinasiWisata' => $destinasi['qtyTdestinasiWisata'],
                            'jmlHariTdestinasiWisata' => $destinasi['jmlHariTdestinasiWisata'],
                            'hargaTdestinasiWisata' => $destinasi['hargaTdestinasiWisata'],
                            'jumlahTdestinasiWisata' => $destinasi['jumlahTdestinasiWisata'],
                            'namaTdestinasiWisata' => $destinasi['namaTdestinasiWisata'],
                            'idQuotationTransaksi' => $request->quotationTour['idQuotationTransaksi'],
                            'created_at' => Carbon::now(),
                            'updated_at' => Carbon::now(),
                ]);
            }
        }

        $transportasiData = $request->transport;
        if ($request->transport[0]['idTransportasi'] != 0) {
            foreach ($transportasiData as $transportasi) {
                $tTransportasi = Ttransportasi::create([
                    'idTransportasi' => $transportasi['idTransportasi'],
                    'qtyTtransportasi' => $transportasi['qtyTtransportasi'],
                    'jmlHariTtransportasi' => $transportasi['jmlHariTtransportasi'],
                    'hargaTtransportasi' => $transportasi['hargaTtransportasi'],
                    'jumlahTtransportasi' => $transportasi['jumlahTtransportasi'],
                    'namaTtransportasi' => $transportasi['namaTtransportasi'],
                    'idQuotationTransaksi' => $request->quotationTour['idQuotationTransaksi'],
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            }
        }

        $penginapanData = $request->penginapan;
        if ($request->penginapan[0]['idPenginapan'] != 0) {
            foreach ($penginapanData as $penginapan) {
                $tpenginapan = Tpenginapan::create([
                    'idPenginapan' => $penginapan['idPenginapan'],
                    'qtyTpenginapan' => $penginapan['qtyTpenginapan'],
                    'jmlHariTpenginapan' => $penginapan['jmlHariTpenginapan'],
                    'hargaTpenginapan' => $penginapan['hargaTpenginapan'],
                    'jumlahTpenginapan' => $penginapan['jumlahTpenginapan'],
                    'namaTpenginapan' => $penginapan['namaTpenginapan'],
                    'idQuotationTransaksi' => $request->quotationTour['idQuotationTransaksi'],
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            }
        }

        $rmData = $request->rm;
        if ($request->rm[0]['idRM'] != 0) {
            foreach ($rmData as $rumahMakan) {
                $tRumahMakan = TRumahMakan::create([
                    'idRM' => $rumahMakan['idRM'],
                            'qtyTrm' => $rumahMakan['qtyTrm'],
                            'jmlHariTrm' => $rumahMakan['jmlHariTrm'],
                            'hargaTrm' => $rumahMakan['hargaTrm'],
                            'jumlahTrm' => $rumahMakan['jumlahTrm'],
                            'namaTrm' => $rumahMakan['namaTrm'],
                            'idQuotationTransaksi' => $request->quotationTour['idQuotationTransaksi'],
                            'created_at' => Carbon::now(),
                            'updated_at' => Carbon::now(),
                ]);
            }
        }

        // return Inertia::render('Quotation/QuotationsResult', [
        //     'data' => quotationTransaksi::with('quotation.klien')
        //         ->where('id', $quotationTransaksi->id)->get()
        // ]);
        return redirect()->route('quotation.result', ['id' => $quotationRekomendasi->idQuotatioRekomendasi]);
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
