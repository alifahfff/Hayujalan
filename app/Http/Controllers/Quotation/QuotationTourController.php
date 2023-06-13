<?php

namespace App\Http\Controllers\Quotation;

use App\Models\Vendor\areaWisata;
use App\Models\Quotation\quotationTour;
use App\Models\Quotation\quotationTransaksi;
use App\Models\Akses\userProgram;
use App\Models\Akses\userSales;
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
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

class QuotationTourController extends Controller
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

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\quotationTour  $quotationTour
     * @return \Illuminate\Http\Response
     */
    public function show(quotationTour $quotationTour)
    {
        $areawisata = areaWisata::all();
        $userprogram = userProgram::all();
        $usersales = userSales::all();
        $kategoriwisata = dataKategoriTour::all();
        $destinasi = vendorDestinasiWisata::all();
        $detailDestinasi = detailVendorDestinasiWisata::join('vendor_destinasi_wisatas', 'detail_vendor_destinasi_wisatas.idDestinasiWisata', '=', 'vendor_destinasi_wisatas.id')
                   ->select('vendor_destinasi_wisatas.id', 'vendor_destinasi_wisatas.namaDestinasiWisata',
                   'detail_vendor_destinasi_wisatas.idDestinasiWisata', 
                   'detail_vendor_destinasi_wisatas.tiketMasukWeekday', 
                   'detail_vendor_destinasi_wisatas.tiketMasukWeekend')
                   ->get();
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
        return Inertia::render('Quotation/QuotationsForm', [
            'areawisata' => $areawisata,
            'userprogram' => $userprogram,
            'usersales' => $usersales,
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
        ]);
    }

    // public function form(quotationTour $quotationTour)
    // {
        
    // }

    public function result(quotationTour $quotationTour)
    {
        return Inertia::render('Quotation/QuotationsResult');
    }   
    public function formrec(quotationTour $quotationTour)
    {
        return Inertia::render('Quotation/QuotationsRecomendForm');
    }
    public function recresult(quotationTour $quotationTour)
    {
        return Inertia::render('Quotation/QuotationsRecomendResult');
    }
    public function recpdf(quotationTour $quotationTour) 
    {
        return Inertia::render('Quotation/QuotationsPDF');
    }

    public function qhistory(quotationTransaksi $quotationTour)
    {
        $area = areaWisata::all();
        $quotation = quotationTransaksi::with('quotation.areaWisata')->get();
        return Inertia::render('Quotation/QuotationsHistory', [
            'quotation' => $quotation,
            'area' => $area,
        ]);
    }

    public function editQhistory(Request $request)
    {
        $area = areaWisata::all();
        $quotation = quotationTransaksi::findOrFail($request->id); 
        $detail = quotationTransaksi::where('id','=',$request->id)->get();
        return Inertia::render('Quotation/DataQuoResult',[
            'quotation' => $quotation,  
            'detail' => $detail,
            'area' => $area,
        ]);
    }

    // public function updateHistory(Request $request)
    // {
    //     quotationTransaksi::where('id', $request->id)->update([
    //         'namaKlien' => $request->namaKlien,
    //         'productionPrice' => $request->productionPrice,
    //         'nettPrice' => $request->nettPrice,
    //         'paxPay' => $request->nettPrice,

    //     ]);
    //     return redirect()->back()->with('message', 'item berhasil diupdate');
    // }

    public function qhistoryresult(quotationTransaksi $quotationTour)
    {   
        $kategori = dataKategoriTour::all();
        $area = areaWisata::all();
        $quotation = quotationTransaksi::with('quotation.areaWisata','quotation.dataKategoriWisata')->get();
        return Inertia::render('Quotation/DataQuoResult', [
            'quotation' => $quotation,
            'area' => $area,
            'kategori' => $kategori,
        ]);
    }

    public function storeQuotationForm(Request $request)
    {
        $klien = dataKlien::create([
            'jenis_klien_id' => $request->quotationTour['jenis_klien_id'],
            'namaKlien' => $request->quotationTour['namaKlien'],
            'created_at' => $request->created_at,
            'updated_at' => $request->updated_at,
        ]);

        $quotationTour = quotationTour::create([
            'idKategoriTour' => $request->quotationTour['idKategoriTour'],
            'namaProject' => $request->quotationTour['namaproject'],
            'durasiProject' => $request->quotationTour['durasiproject'],
            'qty' => $request->quotationTour['jumlahOrang'],
            'foc' => $request->quotationTour['foc'],
            'planWaktuPelaksanaan' => $request->quotationTour['planWaktuPelaksanaan'],
            'presentaseKeuntungan' => $request->quotationTour['presentaseKeuntungan'],
            'feeMarketing' => $request->quotationTour['feemarketing'],
            'idUserProgram' => $request->quotationTour['idProgram'],
            'idUserSales' => $request->quotationTour['idSales'],
            'idAreaWisata' => $request->quotationTour['idAreaWisata'],
            'idDataKlien' => $klien->id,
            'created_at' => $request->created_at,
            'updated_at' => $request->updated_at,
        ]);

        $quotationTransaksi = quotationTransaksi::create([
            'idQuotationTour' => $quotationTour->id,
            'namaQtransaksi' => $request->quotationTour['namaproject'],
            'productionPrice' => $request->productionPrice,
            'nettPrice' => $request->nettPrice,
            'paxPay' => $request->paxPay,
            'surcharge' => $request->surcharge,
            'sellingPrice' => $request->sellingPrice,
            'totalPrice' => $request->totalPrice,
            'profit' => $request->profit,
            'status' => $request->status,
            'created_at' => $request->created_at,
            'updated_at' => $request->updated_at,
        ]);

        $bonusData = $request->bonus;
        if ($request->bonus[0]['idDataBonus'] != 0) {
            foreach ($bonusData as $bonus) {
                $tbonus = Tbonus::create([
                    'idDataBonus' => $bonus['idDataBonus'],
                    'qty' => $bonus['qty'],
                    'hari' => $bonus['hari'],
                    'harga' => $bonus['harga'],
                    'jumlah' => $bonus['jumlah'],
                    'keterangan' => $bonus['ketDataBonus'],
                    'idQuotationTransaksion' => $quotationTransaksi->id,
                    'created_at' => $request->created_at,
                    'idQuotationRekomendasi' => 1,
                    'updated_at' => $request->updated_at,
                ]);
            }
        }

        $eventData = $request->event;
        if ($request->event[0]['idDataEvent'] != 0) {
            foreach ($eventData as $event) {
                $tevent = Tevent::create([
                    'idDataEvent' => $event['idDataEvent'],
                    'qty' => $event['qty'],
                    'hari' => $event['hari'],
                    'harga' => $event['harga'],
                    'jumlah' => $event['jumlah'],
                    'keterangan' => $event['ketDataEvent'],
                    'idQuotationTransaksion' => $quotationTransaksi->id,
                    'created_at' => $request->created_at,
                    'idQuotationRekomendasi' => 1,
                    'updated_at' => $request->updated_at,
                ]);
            }
        }

        $crewData = $request->crew;
        if ($request->crew[0]['idCrewOperasional'] != 0) {
            foreach ($crewData as $crew) {
                $tcrew = TcrewOp::create([
                    'idCrewOperasional' => $crew['idCrewOperasional'],
                    'qty' => $crew['qty'],
                    'hari' => $crew['hari'],
                    'harga' => $crew['harga'],
                    'jumlah' => $crew['jumlah'],
                    'keterangan' => $crew['ketCrewOperasional'],
                    'idQuotationTransaksion' => $quotationTransaksi->id,
                    'created_at' => $request->created_at,
                    'idQuotationRekomendasi' => 1,
                    'updated_at' => $request->updated_at,
                ]);
            }
        }

        $fasilitasData = $request->fasilitas;
        if ($request->fasilitas[0]['idFasilitasTour'] != 0) {
            foreach ($fasilitasData as $fasilitas) {
                $tfasilitas = TFasilitasTour::create([
                    'idFasilitasTour' => $fasilitas['idFasilitasTour'],
                    'qty' => $fasilitas['qty'],
                    'hari' => $fasilitas['hari'],
                    'harga' => $fasilitas['harga'],
                    'jumlah' => $fasilitas['jumlah'],
                    'keterangan' => $fasilitas['ketFasilitas'],
                    'idQuotationTransaksion' => $quotationTransaksi->id,
                    'created_at' => $request->created_at,
                    'idQuotationRekomendasi' => 1,
                    'updated_at' => $request->updated_at,
                ]);
            }
        }

        $destinasiData = $request->destinasi;
        if ($request->destinasi[0]['idDestinasiWisata'] != 0) {
            foreach ($destinasiData as $destinasi) {
                $tDestinasiWisata = TDestinasiWisata::create([
                    'idDestinasiWisata' => $destinasi['idDestinasiWisata'],
                    'qty' => $destinasi['qty'],
                    'hari' => $destinasi['hari'],
                    'harga' => $destinasi['harga'],
                    'jumlah' => $destinasi['jumlah'],
                    'keterangan' => $destinasi['namaDestinasiWisata'],
                    'idQuotationTransaksion' => $quotationTransaksi->id,
                    'created_at' => $request->created_at,
                    'idQuotationRekomendasi' => 1,
                    'updated_at' => $request->updated_at,
                ]);
            }
        }

        $transportasiData = $request->transport;
        if ($request->transport[0]['idTransportasi'] != 0) {
            foreach ($transportasiData as $transport) {
                $tTransportasi = Ttransportasi::create([
                    'idTransportasi' => $transport['idTransportasi'],
                    'qty' => $transport['qty'],
                    'hari' => $transport['hari'],
                    'harga' => $transport['harga'],
                    'jumlah' => $transport['jumlah'],
                    'keterangan' => $transport['namaTransportasi'],
                    'idQuotationTransaksion' => $quotationTransaksi->id,
                    'created_at' => $request->created_at,
                    'idQuotationRekomendasi' => 1,
                    'updated_at' => $request->updated_at,
                ]);
            }
        }

        $penginapanData = $request->penginapan;
        if ($request->penginapan[0]['idPenginapan'] != 0) {
            foreach ($penginapanData as $penginapan) {
                $tpenginapan = Tpenginapan::create([
                    'idPenginapan' => $penginapan['idPenginapan'],
                    'qty' => $penginapan['qty'],
                    'hari' => $penginapan['hari'],
                    'harga' => $penginapan['harga'],
                    'jumlah' => $penginapan['jumlah'],
                    'keterangan' => $penginapan['namaPenginapan'],
                    'idQuotationTransaksion' => $quotationTransaksi->id,
                    'created_at' => $request->created_at,
                    'idQuotationRekomendasi' => 1,
                    'updated_at' => $request->updated_at,
                ]);
            }
        }

        $rmData = $request->rm;
        if ($request->rm[0]['idRM'] != 0) {
            foreach ($rmData as $rm) {
                $tRumahMakan = TRumahMakan::create([
                    'idRM' => $rm['idRM'],
                    'qty' => $rm['qty'],
                    'hari' => $rm['hari'],
                    'harga' => $rm['harga'],
                    'jumlah' => $rm['jumlah'],
                    'keterangan' => $rm['namaRM'],
                    'idQuotationTransaksion' => $quotationTransaksi->id,
                    'created_at' => $request->created_at,
                    'idQuotationRekomendasi' => 1,
                    'updated_at' => $request->updated_at,
                ]);
            }
        }

        return Inertia::render('Quotation/QuotationsResult', [
            'data' => quotationTransaksi::with('quotation.klien')
                ->where('id', $quotationTransaksi->id)->get()
        ]);
    }
    
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\quotationTour  $quotationTour
     * @return \Illuminate\Http\Response
     */
    public function edit(quotationTour $quotationTour)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\quotationTour  $quotationTour
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, quotationTour $quotationTour)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\quotationTour  $quotationTour
     * @return \Illuminate\Http\Response
     */
    public function destroy(quotationTour $quotationTour)
    {
        //
    }
}
