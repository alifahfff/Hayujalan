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

        // return Inertia::render('Quotation/QuotationsResult', [
        //     'data' => quotationTransaksi::with('quotation.klien')
        //         ->where('id', $quotationTransaksi->id)->get()
        // ]);
        return redirect()->route('quotation.result', ['id' => $quotationTransaksi->id]);
    }

    public function getQuotationResult(Request $request, $id)
    {
        $quotationTransaksi = quotationTransaksi::with('quotation.klien', 'quotation.areawisata', 'quotation.kategori')->find($id);
        $Tbonus = Tbonus::where('idQuotationTransaksion', $id)->first();
        $TDestinasiWisata = TDestinasiWisata::where('idQuotationTransaksion', $id)->get();
        $Ttransportasi = Ttransportasi::with('transportasi.detailTransportasi')->where('idQuotationTransaksion', $id)->get();
        $Tpenginapan = Tpenginapan::with('penginapan.detailPenginapan')->where('idQuotationTransaksion', $id)->get();
        $TRumahMakan = TRumahMakan::where('idQuotationTransaksion', $id)->get();
        $TFasilitasTour = TFasilitasTour::where('idQuotationTransaksion', $id)->get();
        $Tevent = Tevent::where('idQuotationTransaksion', $id)->get();
        $TcrewOp = TcrewOp::where('idQuotationTransaksion', $id)->get();

        return Inertia::render('Quotation/QuotationsResult', [
            'data' => $quotationTransaksi,
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
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\quotationTour  $quotationTour
     * @return \Illuminate\Http\Response
     */

    public function edit(Request $request)
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
        $quotationTransaksi = quotationTransaksi::with('quotation.klien.jenisKlien', 'quotation.areawisata', 'quotation.kategori')->find($request->id);
        $Tbonus = Tbonus::where('idQuotationTransaksion', $request->id)->get();
        $TDestinasiWisata = TDestinasiWisata::with('destinasi.detaildw')->where('idQuotationTransaksion', $request->id)->get();
        $Ttransportasi = Ttransportasi::with('transportasi.detailTransportasi')->where('idQuotationTransaksion', $request->id)->get();
        $Tpenginapan = Tpenginapan::with('penginapan.detailPenginapan')->where('idQuotationTransaksion', $request->id)->get();
        $TRumahMakan = TRumahMakan::with('rumahMakan.detailRM')->where('idQuotationTransaksion', $request->id)->get();
        $TFasilitasTour = TFasilitasTour::with('fasilitasTour')->where('idQuotationTransaksion', $request->id)->get();
        $Tevent = Tevent::where('idQuotationTransaksion', $request->id)->get();
        $TcrewOp = TcrewOp::with('crew')->where('idQuotationTransaksion', $request->id)->get();
        return Inertia::render('Quotation/QuotationsFormEdit', [
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
            'quotationTransaksi' => $quotationTransaksi,
            'Tbonus' => $Tbonus,
            'Tdestinasi' => $TDestinasiWisata,
            'Ttransportasi' => $Ttransportasi,
            'Tpenginapan' => $Tpenginapan,
            'TRumahMakan' => $TRumahMakan,
            'TFasilitas' => $TFasilitasTour,
            'Tevent' => $Tevent,
            'Tcrew' => $TcrewOp,
        ]);
    }

    public function updateQuotationForm(Request $request)
    {
        // dd($request);
        $existingKlien = dataKlien::where('id', $request->quotationTour['idKlien'])->first();
        if ($existingKlien) {
            // Data klien sudah ada, lakukan operasi update jika ada perubahan
            $isChanged = false;

            if ($existingKlien->jenis_klien_id != $request->quotationTour['jenis_klien_id']) {
                $existingKlien->jenis_klien_id = $request->quotationTour['jenis_klien_id'];
                $isChanged = true;
            }
            if ($existingKlien->namaKlien != $request->quotationTour['namaKlien']) {
                $existingKlien->namaKlien = $request->quotationTour['namaKlien'];
                $isChanged = true;
            }

            if ($isChanged) {
                $existingKlien->updated_at = $request->updated_at;
                $existingKlien->save();
            }
        }

        $existingQuotationTour = quotationTour::where('id', $request->quotationTour['idQuotationTour'])->first();
        if ($existingQuotationTour) {
            // Data klien sudah ada, lakukan operasi update jika ada perubahan
            $isChanged = false;

            if ($existingQuotationTour->namaProject != $request->quotationTour['namaProject']) {
                $existingQuotationTour->namaProject = $request->quotationTour['namaProject'];
                $isChanged = true;
            }
            if ($existingQuotationTour->durasiProject != $request->quotationTour['durasiProject']) {
                $existingQuotationTour->durasiProject = $request->quotationTour['durasiProject'];
                $isChanged = true;
            }
            if ($existingQuotationTour->durasiProject != $request->quotationTour['durasiProject']) {
                $existingQuotationTour->durasiProject = $request->quotationTour['durasiProject'];
                $isChanged = true;
            }
            if ($existingQuotationTour->qty != $request->quotationTour['jumlahOrang']) {
                $existingQuotationTour->qty = $request->quotationTour['jumlahOrang'];
                $isChanged = true;
            }
            if ($existingQuotationTour->foc != $request->quotationTour['foc']) {
                $existingQuotationTour->foc = $request->quotationTour['foc'];
                $isChanged = true;
            }
            if ($existingQuotationTour->planWaktuPelaksanaan != $request->quotationTour['planWaktuPelaksanaan']) {
                $existingQuotationTour->planWaktuPelaksanaan = $request->quotationTour['planWaktuPelaksanaan'];
                $isChanged = true;
            }
            if ($existingQuotationTour->presentaseKeuntungan != $request->quotationTour['presentaseKeuntungan']) {
                $existingQuotationTour->presentaseKeuntungan = $request->quotationTour['presentaseKeuntungan'];
                $isChanged = true;
            }
            if ($existingQuotationTour->feeMarketing != $request->quotationTour['feeMarketing']) {
                $existingQuotationTour->feeMarketing = $request->quotationTour['feeMarketing'];
                $isChanged = true;
            }
            if ($existingQuotationTour->idUserProgram != $request->quotationTour['idUserProgram']) {
                $existingQuotationTour->idUserProgram = $request->quotationTour['idUserProgram'];
                $isChanged = true;
            }
            if ($existingQuotationTour->idUserSales != $request->quotationTour['idUserSales']) {
                $existingQuotationTour->idUserSales = $request->quotationTour['idUserSales'];
                $isChanged = true;
            }
            if ($existingQuotationTour->idAreaWisata != $request->quotationTour['idAreaWisata']) {
                $existingQuotationTour->idAreaWisata = $request->quotationTour['idAreaWisata'];
                $isChanged = true;
            }
            if ($existingQuotationTour->idDataKlien != $request->quotationTour['idKlien']) {
                $existingQuotationTour->idDataKlien = $request->quotationTour['idKlien'];
                $isChanged = true;
            }
            if ($isChanged) {
                $existingQuotationTour->updated_at = $request->updated_at;
                $existingQuotationTour->save();
            }
        }

        $existingQuotationTransaksi = quotationTransaksi::where('id', $request->quotationTour['idQuotationTransaksion'])->first();
        if ($existingQuotationTransaksi) {
            // Data klien sudah ada, lakukan operasi update jika ada perubahan
            $isChanged = false;

            if ($existingQuotationTransaksi->idQuotationTour != $request->quotationTour['idQuotationTour']) {
                $existingQuotationTransaksi->idQuotationTour = $request->quotationTour['idQuotationTour'];
                $isChanged = true;
            }
            if ($existingQuotationTransaksi->namaQtransaksi != $request->quotationTour['namaQtransaksi']) {
                $existingQuotationTransaksi->namaQtransaksi = $request->quotationTour['namaQtransaksi'];
                $isChanged = true;
            }
            if ($existingQuotationTransaksi->productionPrice != $request->productionPrice) {
                $existingQuotationTransaksi->productionPrice = $request->productionPrice;
                $isChanged = true;
            }
            if ($existingQuotationTransaksi->nettPrice != $request->nettPrice) {
                $existingQuotationTransaksi->nettPrice = $request->nettPrice;
                $isChanged = true;
            }
            if ($existingQuotationTransaksi->paxPay != $request->paxPay) {
                $existingQuotationTransaksi->paxPay = $request->paxPay;
                $isChanged = true;
            }
            if ($existingQuotationTransaksi->surcharge != $request->surcharge) {
                $existingQuotationTransaksi->surcharge = $request->surcharge;
                $isChanged = true;
            }
            if ($existingQuotationTransaksi->sellingPrice != $request->sellingPrice) {
                $existingQuotationTransaksi->sellingPrice = $request->sellingPrice;
                $isChanged = true;
            }
            if ($existingQuotationTransaksi->totalPrice != $request->totalPrice) {
                $existingQuotationTransaksi->totalPrice = $request->totalPrice;
                $isChanged = true;
            }
            if ($existingQuotationTransaksi->profit != $request->profit) {
                $existingQuotationTransaksi->profit = $request->profit;
                $isChanged = true;
            }
            if ($existingQuotationTransaksi->status != $request->status) {
                $existingQuotationTransaksi->status = $request->status;
                $isChanged = true;
            }
            if ($isChanged) {
                $existingQuotationTransaksi->updated_at = $request->updated_at;
                $existingQuotationTransaksi->save();
            }
        }

        $bonusData = $request->bonus;
        if ($request->bonus[0]['idTbonus'] != 0) {
            foreach ($bonusData as $bonus) {
                if ($bonus['idDataBonus'] != 0) {
                    $existingBonus = Tbonus::find($bonus['idTBonus']);
                    if ($existingBonus) {
                        // Memeriksa perubahan pada data sebelumnya
                        $isChanged = false;

                        if ($existingBonus->idDataBonus != $bonus['idDataBonus']) {
                            $existingBonus->idDataBonus = $bonus['idDataBonus'];
                            $isChanged = true;
                        }
                        if ($existingBonus->qty != $bonus['qty']) {
                            $existingBonus->qty = $bonus['qty'];
                            $isChanged = true;
                        }
                        if ($existingBonus->hari != $bonus['hari']) {
                            $existingBonus->hari = $bonus['hari'];
                            $isChanged = true;
                        }
                        if ($existingBonus->harga != $bonus['harga']) {
                            $existingBonus->harga = $bonus['harga'];
                            $isChanged = true;
                        }
                        if ($existingBonus->jumlah != $bonus['jumlah']) {
                            $existingBonus->jumlah = $bonus['jumlah'];
                            $isChanged = true;
                        }
                        if ($existingBonus->keterangan != $bonus['keterangan']) {
                            $existingBonus->keterangan = $bonus['keterangan'];
                            $isChanged = true;
                        }
                        if ($existingBonus->idQuotationTransaksion != $bonus['idQuotationTransaksion']) {
                            $existingBonus->idQuotationTransaksion = $bonus['idQuotationTransaksion'];
                            $isChanged = true;
                        }   
                        if ($existingBonus->idQuotationRekomendasi != $bonus['idQuotationRekomendasi']) {
                            $existingBonus->idQuotationRekomendasi = $bonus['idQuotationRekomendasi'];
                            $isChanged = true;
                        }           
                        if ($isChanged) {
                            $existingBonus->updated_at = $request->updated_at;
                            $existingBonus->save();
                        }
                    }
                }
            }
        } else {
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
        }
        
        $eventData = $request->event;
        if ($request->event[0]['idTevent'] != 0) {
            foreach ($eventData as $event) {
                if ($event['idDataEvent'] != 0) {
                    $existingEvent = Tevent::find($event['idTevent']);
                    if ($existingEvent) {
                        // Memeriksa perubahan pada data sebelumnya
                        $isChanged = false;

                        if ($existingEvent->idDataEvent != $event['idDataEvent']) {
                            $existingEvent->idDataEvent = $event['idDataEvent'];
                            $isChanged = true;
                        }
                        if ($existingEvent->qty != $event['qty']) {
                            $existingEvent->qty = $event['qty'];
                            $isChanged = true;
                        }
                        if ($existingEvent->hari != $event['hari']) {
                            $existingEvent->hari = $event['hari'];
                            $isChanged = true;
                        }
                        if ($existingEvent->harga != $event['harga']) {
                            $existingEvent->harga = $event['harga'];
                            $isChanged = true;
                        }
                        if ($existingEvent->jumlah != $event['jumlah']) {
                            $existingEvent->jumlah = $event['jumlah'];
                            $isChanged = true;
                        }
                        if ($existingEvent->keterangan != $event['keterangan']) {
                            $existingEvent->keterangan = $event['keterangan'];
                            $isChanged = true;
                        }
                        if ($existingEvent->idQuotationTransaksion != $event['idQuotationTransaksion']) {
                            $existingEvent->idQuotationTransaksion = $event['idQuotationTransaksion'];
                            $isChanged = true;
                        }   
                        if ($existingEvent->idQuotationRekomendasi != $event['idQuotationRekomendasi']) {
                            $existingEvent->idQuotationRekomendasi = $event['idQuotationRekomendasi'];
                            $isChanged = true;
                        }           
                        if ($isChanged) {
                            $existingEvent->updated_at = $request->updated_at;
                            $existingEvent->save();
                        }
                    }
                }
            }
        } else {
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
        }

        $crewData = $request->crew;
        if ($request->crew[0]['idTcrew'] != 0) {
            foreach ($crewData as $crew) {
                if ($crew['idDataCrew'] != 0) {
                    $existingCrew = TcrewOp::find($crew['idTcrew']);
                    if ($existingCrew) {
                        // Memeriksa perubahan pada data sebelumnya
                        $isChanged = false;

                        if ($existingCrew->idDataCrew != $crew['idDataCrew']) {
                            $existingCrew->idDataCrew = $crew['idDataCrew'];
                            $isChanged = true;
                        }
                        if ($existingCrew->qty != $crew['qty']) {
                            $existingCrew->qty = $crew['qty'];
                            $isChanged = true;
                        }
                        if ($existingCrew->hari != $crew['hari']) {
                            $existingCrew->hari = $crew['hari'];
                            $isChanged = true;
                        }
                        if ($existingCrew->harga != $crew['harga']) {
                            $existingCrew->harga = $crew['harga'];
                            $isChanged = true;
                        }
                        if ($existingCrew->jumlah != $crew['jumlah']) {
                            $existingCrew->jumlah = $crew['jumlah'];
                            $isChanged = true;
                        }
                        if ($existingCrew->keterangan != $crew['keterangan']) {
                            $existingCrew->keterangan = $crew['keterangan'];
                            $isChanged = true;
                        }
                        if ($existingCrew->idQuotationTransaksion != $crew['idQuotationTransaksion']) {
                            $existingCrew->idQuotationTransaksion = $crew['idQuotationTransaksion'];
                            $isChanged = true;
                        }   
                        if ($existingCrew->idQuotationRekomendasi != $crew['idQuotationRekomendasi']) {
                            $existingCrew->idQuotationRekomendasi = $crew['idQuotationRekomendasi'];
                            $isChanged = true;
                        }           
                        if ($isChanged) {
                            $existingCrew->updated_at = $request->updated_at;
                            $existingCrew->save();
                        }
                    }
                }
            }
        } else {
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
        }

        $fasilitasData = $request->fasilitas;
        if ($request->fasilitas[0]['idTfasilitas'] != 0) {
            foreach ($fasilitasData as $fasilitas) {
                if ($fasilitas['idFasilitasTour'] != 0) {
                    $existingCrew = TcrewOp::find($fasilitas['idTcrew']);
                    if ($existingCrew) {
                        // Memeriksa perubahan pada data sebelumnya
                        $isChanged = false;

                        if ($existingCrew->idFasilitasTour != $fasilitas['idFasilitasTour']) {
                            $existingCrew->idFasilitasTour = $fasilitas['idFasilitasTour'];
                            $isChanged = true;
                        }
                        if ($existingCrew->qty != $fasilitas['qty']) {
                            $existingCrew->qty = $fasilitas['qty'];
                            $isChanged = true;
                        }
                        if ($existingCrew->hari != $fasilitas['hari']) {
                            $existingCrew->hari = $fasilitas['hari'];
                            $isChanged = true;
                        }
                        if ($existingCrew->harga != $fasilitas['harga']) {
                            $existingCrew->harga = $fasilitas['harga'];
                            $isChanged = true;
                        }
                        if ($existingCrew->jumlah != $fasilitas['jumlah']) {
                            $existingCrew->jumlah = $fasilitas['jumlah'];
                            $isChanged = true;
                        }
                        if ($existingCrew->keterangan != $fasilitas['keterangan']) {
                            $existingCrew->keterangan = $fasilitas['keterangan'];
                            $isChanged = true;
                        }
                        if ($existingCrew->idQuotationTransaksion != $fasilitas['idQuotationTransaksion']) {
                            $existingCrew->idQuotationTransaksion = $fasilitas['idQuotationTransaksion'];
                            $isChanged = true;
                        }   
                        if ($existingCrew->idQuotationRekomendasi != $fasilitas['idQuotationRekomendasi']) {
                            $existingCrew->idQuotationRekomendasi = $fasilitas['idQuotationRekomendasi'];
                            $isChanged = true;
                        }           
                        if ($isChanged) {
                            $existingCrew->updated_at = $request->updated_at;
                            $existingCrew->save();
                        }
                    }
                }
            }
        } else {
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
        }


        // return redirect()->route('quotation.result', ['id' => $quotationTransaksi->id]);
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

    public function editQhistory(Request $request)
    {
        $quotationTransaksi = quotationTransaksi::with('quotation.klien', 'quotation.areawisata', 'quotation.kategori')->find($request->id);
        $Tbonus = Tbonus::where('idQuotationTransaksion', $request->id)->first();
        $TDestinasiWisata = TDestinasiWisata::where('idQuotationTransaksion', $request->id)->get();
        $Ttransportasi = Ttransportasi::with('transportasi.detailTransportasi')->where('idQuotationTransaksion', $request->id)->get();
        $Tpenginapan = Tpenginapan::with('penginapan.detailPenginapan')->where('idQuotationTransaksion', $request->id)->get();
        $TRumahMakan = TRumahMakan::where('idQuotationTransaksion', $request->id)->get();
        $TFasilitasTour = TFasilitasTour::where('idQuotationTransaksion', $request->id)->get();
        $Tevent = Tevent::where('idQuotationTransaksion', $request->id)->get();
        $TcrewOp = TcrewOp::where('idQuotationTransaksion', $request->id)->get();

        return Inertia::render('Quotation/QuotationsResult', [
            'data' => $quotationTransaksi,
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

    public function updateHistory(Request $request)
    {
        quotationTransaksi::where('id', $request->id)->update([
            'namaKlien' => $request->namaKlien,
            'productionPrice' => $request->productionPrice,
            'nettPrice' => $request->nettPrice,
            'paxPay' => $request->nettPrice,

        ]);
        return redirect()->back()->with('message', 'item berhasil diupdate');
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
