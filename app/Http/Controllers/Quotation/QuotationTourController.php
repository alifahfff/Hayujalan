<?php

namespace App\Http\Controllers\Quotation;

use App\Models\Vendor\areaWisata;
use App\Models\Quotation\quotationTour;
use App\Models\Quotation\quotationTransaksi;
use App\Models\Quotation\quotationRekomendasi;
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
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Carbon\Carbon;

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
        $dataBobot = dataBobot::all();
        return Inertia::render('Quotation/QuotationsForm', [
            'areawisata' => $areawisata,
            'user' => $user,
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
            'dataBobot' => $dataBobot,
        ]);
    }

    public function storeQuotationForm(Request $request)
    {
        $klien = dataKlien::create([
            'idJenisKlien' => $request->quotationTour['idJenisKlien'],
            'namaKlien' => $request->quotationTour['namaKlien'],
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        $quotationTour = quotationTour::create([
            'idKategoriTour' => $request->quotationTour['idKategoriTour'],
            'namaProject' => $request->quotationTour['namaproject'],
            'durasiProject' => $request->quotationTour['durasiproject'],
            'qty' => $request->quotationTour['jumlahOrang'],
            'foc' => $request->quotationTour['foc'],
            'planWaktuPelaksanaan' => $request->quotationTour['planWaktuPelaksanaan'],
            'persentaseKeuntungan' => $request->quotationTour['presentaseKeuntungan'],
            'feeMarketing' => $request->quotationTour['feemarketing'],
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
                    'qtyTbonus' => $bonus['qty'],
                    'jmlHariTbonus' => $bonus['hari'],
                    'hargaTbonus' => $bonus['harga'],
                    'jumlahTbonus' => $bonus['jumlah'],
                    'namaTbonus' => $bonus['ketDataBonus'],
                    'idQuotationTransaksi' => $quotationTransaksi->idQuotationTransaksi,
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
                    'qtyTevent' => $event['qty'],
                    'jmlHariTevent' => $event['hari'],
                    'hargaTevent' => $event['harga'],
                    'jumlahTevent' => $event['jumlah'],
                    'namaTevent' => $event['ketDataEvent'],
                    'idQuotationTransaksi' => $quotationTransaksi->idQuotationTransaksi,
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
                    'qtyTcrew' => $crew['qty'],
                    'jmlHariTcrew' => $crew['hari'],
                    'hargaTcrew' => $crew['harga'],
                    'jumlahTcrew' => $crew['jumlah'],
                    'namaTcrew' => $crew['ketCrewOperasional'],
                    'idQuotationTransaksi' => $quotationTransaksi->idQuotationTransaksi,
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
                    'qtyTft' => $fasilitas['qty'],
                    'jmlHariTft' => $fasilitas['hari'],
                    'hargaTft' => $fasilitas['harga'],
                    'jumlahTft' => $fasilitas['jumlah'],
                    'namaTft' => $fasilitas['ketFasilitasTour'],
                    'idQuotationTransaksi' => $quotationTransaksi->idQuotationTransaksi,
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
                    'qtyTdestinasiWisata' => $destinasi['qty'],
                    'jmlHariTdestinasiWisata' => $destinasi['hari'],
                    'hargaTdestinasiWisata' => $destinasi['harga'],
                    'jumlahTdestinasiWisata' => $destinasi['jumlah'],
                    'namaTdestinasiWisata' => $destinasi['namaDestinasiWisata'],
                    'idQuotationTransaksi' => $quotationTransaksi->idQuotationTransaksi,
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            }
        }

        $transportasiData = $request->transport;
        if ($request->transport[0]['idTransportasi'] != 0) {
            foreach ($transportasiData as $transport) {
                $tTransportasi = Ttransportasi::create([
                    'idTransportasi' => $transport['idTransportasi'],
                    'qtyTtransportasi' => $transport['qty'],
                    'jmlHariTtransportasi' => $transport['hari'],
                    'hargaTtransportasi' => $transport['harga'],
                    'jumlahTtransportasi' => $transport['jumlah'],
                    'namaTtransportasi' => $transport['namaTransportasi'],
                    'idQuotationTransaksi' => $quotationTransaksi->idQuotationTransaksi,
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
                    'qtyTpenginapan' => $penginapan['qty'],
                    'jmlHariTpenginapan' => $penginapan['hari'],
                    'hargaTpenginapan' => $penginapan['harga'],
                    'jumlahTpenginapan' => $penginapan['jumlah'],
                    'namaTpenginapan' => $penginapan['namaPenginapan'],
                    'idQuotationTransaksi' => $quotationTransaksi->idQuotationTransaksi,
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            }
        }

        $rmData = $request->rm;
        if ($request->rm[0]['idRM'] != 0) {
            foreach ($rmData as $rm) {
                $tRumahMakan = TRumahMakan::create([
                    'idRM' => $rm['idRM'],
                    'qtyTrm' => $rm['qty'],
                    'jmlHariTrm' => $rm['hari'],
                    'hargaTrm' => $rm['harga'],
                    'jumlahTrm' => $rm['jumlah'],
                    'namaTrm' => $rm['namaRM'],
                    'idQuotationTransaksi' => $quotationTransaksi->idQuotationTransaksi,
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

    public function getQuotationResult($id)
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

        return Inertia::render('Quotation/QuotationsResult', [
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
        // dd($quotationRekomendasi->idQuotatioRekomendasi);
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
        // $userprogram = userProgram::all();
        // $usersales = userSales::all();
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
        $Tbonus = Tbonus::where('idQuotationTransaksi', $quotationRekomendasi->idQuotationTransaksi)->get();
        $TDestinasiWisata = TDestinasiWisata::with('destinasi.detaildw')->where('idQuotationTransaksi', $quotationRekomendasi->idQuotationTransaksi)->get();
        $Ttransportasi = Ttransportasi::with('transportasi.detailTransportasi')->where('idQuotationTransaksi', $quotationRekomendasi->idQuotationTransaksi)->get();
        $Tpenginapan = Tpenginapan::with('penginapan.detailPenginapan')->where('idQuotationTransaksi', $quotationRekomendasi->idQuotationTransaksi)->get();
        $TRumahMakan = TRumahMakan::with('rumahMakan.detailRM')->where('idQuotationTransaksi', $quotationRekomendasi->idQuotationTransaksi)->get();
        $TFasilitasTour = TFasilitasTour::where('idQuotationTransaksi', $quotationRekomendasi->idQuotationTransaksi)->get();
        $Tevent = Tevent::where('idQuotationTransaksi', $quotationRekomendasi->idQuotationTransaksi)->get();
        $TcrewOp = TcrewOp::with('crew')->where('idQuotationTransaksi', $quotationRekomendasi->idQuotationTransaksi)->get();
        return Inertia::render('Quotation/QuotationsFormEdit', [
            'areawisata' => $areawisata,
            // 'userprogram' => $userprogram,
            // 'usersales' => $usersales,
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
        ]);
    }

    public function updateQuotationForm(Request $request)
    {
        // dd($request);
        $existingKlien = dataKlien::where('id', $request->quotationTour['idKlien'])->first();
        if ($existingKlien) {
            // Data klien sudah ada, lakukan operasi update jika ada perubahan
            $isChanged = false;

            if ($existingKlien->idJenisKlien != $request->quotationTour['idJenisKlien']) {
                $existingKlien->idJenisKlien = $request->quotationTour['idJenisKlien'];
                $isChanged = true;
            }
            if ($existingKlien->namaKlien != $request->quotationTour['namaKlien']) {
                $existingKlien->namaKlien = $request->quotationTour['namaKlien'];
                $isChanged = true;
            }

            if ($isChanged) {
                $existingKlien->updated_at = Carbon::now();
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
            if ($existingQuotationTour->tglBerlakuQuotation != $request->quotationTour['tglBerlakuQuotation']) {
                $existingQuotationTour->tglBerlakuQuotation = $request->quotationTour['tglBerlakuQuotation'];
                $isChanged = true;
            }
            if ($existingQuotationTour->masaBerlakuQuotation != $request->quotationTour['masaBerlakuQuotation']) {
                $existingQuotationTour->masaBerlakuQuotation = $request->quotationTour['masaBerlakuQuotation'];
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

        $existingQuotationTransaksi = quotationTransaksi::where('id', $request->quotationTour['idQuotationTransaksi'])->first();
        if ($existingQuotationTransaksi) {
            // Data klien sudah ada, lakukan operasi update jika ada perubahan
            $isChanged = false;

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
                        if ($existingBonus->idQuotationTransaksi != $bonus['idQuotationTransaksi']) {
                            $existingBonus->idQuotationTransaksi = $bonus['idQuotationTransaksi'];
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
                        'idQuotationTransaksi' => $quotationTransaksi->id,
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
                        if ($existingEvent->idQuotationTransaksi != $event['idQuotationTransaksi']) {
                            $existingEvent->idQuotationTransaksi = $event['idQuotationTransaksi'];
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
                        'idQuotationTransaksi' => $quotationTransaksi->id,
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
                        if ($existingCrew->idQuotationTransaksi != $crew['idQuotationTransaksi']) {
                            $existingCrew->idQuotationTransaksi = $crew['idQuotationTransaksi'];
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
                        'idQuotationTransaksi' => $quotationTransaksi->id,
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
                        if ($existingCrew->idQuotationTransaksi != $fasilitas['idQuotationTransaksi']) {
                            $existingCrew->idQuotationTransaksi = $fasilitas['idQuotationTransaksi'];
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
                        'idQuotationTransaksi' => $quotationTransaksi->id,
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

    public function qhistory(Request $request)
    {
        $keyword = $request->input('key');
        $quotation = quotationRekomendasi::with('quotation.klien', 'quotation.areawisata', 'quotation.kategori', 'qTransaksi')
                    ->whereHas('quotation', function ($query) use ($keyword) {
                        $query->where('namaProject', 'like', '%' . $keyword . '%');
                    })
                    ->paginate(4);
        return Inertia::render('Quotation/QuotationsHistory', [
            'quotation' => $quotation,
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
        $quotationRekomendasi = quotationRekomendasi::with('quotation.klien', 'quotation.areawisata', 'quotation.kategori', 'qTransaksi')->where('idQuotatioRekomendasi', $request->id)->first();
        $Tbonus = Tbonus::where('idQuotationTransaksi', $quotationRekomendasi->idQuotationTransaksi)->get();
        $TDestinasiWisata = TDestinasiWisata::where('idQuotationTransaksi', $quotationRekomendasi->idQuotationTransaksi)->get();
        $Ttransportasi = Ttransportasi::with('transportasi.detailTransportasi')->where('idQuotationTransaksi', $quotationRekomendasi->idQuotationTransaksi)->get();
        $Tpenginapan = Tpenginapan::with('penginapan.detailPenginapan')->where('idQuotationTransaksi', $quotationRekomendasi->idQuotationTransaksi)->get();
        $TRumahMakan = TRumahMakan::where('idQuotationTransaksi', $quotationRekomendasi->idQuotationTransaksi)->get();
        $TFasilitasTour = TFasilitasTour::where('idQuotationTransaksi', $quotationRekomendasi->idQuotationTransaksi)->get();
        $Tevent = Tevent::where('idQuotationTransaksi', $quotationRekomendasi->idQuotationTransaksi)->get();
        $TcrewOp = TcrewOp::where('idQuotationTransaksi', $quotationRekomendasi->idQuotationTransaksi)->get();

        return Inertia::render('Quotation/QuotationsHistoryResult', [
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

    public function updateQhistory(Request $request)
    {
        $areawisata = areaWisata::all();
        // $userprogram = userProgram::all();
        // $usersales = userSales::all();
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
        $quotation = quotationTour::with('userQuotations')->find($quotationRekomendasi->idQuotationTour)->get();
        $usersales = $quotation = QuotationTour::with(['userQuotations' => function ($query) {
            $query->whereHas('userQuotations', function ($query) {
                $query->where('idRoles', 4);
            });
        }])->find($quotationRekomendasi->idQuotationTour);
        return Inertia::render('Quotation/QuotationsRevisi', [
            'areawisata' => $areawisata,
            // 'userprogram' => $userprogram,
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
            'data' => $quotationRekomendasi,
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

    public function updateQuotationRevisi(Request $request)
    {
        // dd($request);
        $existingKlien = dataKlien::where('idDataKlien', $request->quotationTour['idDataKlien'])->first();
        if ($existingKlien) {
            // Data klien sudah ada, lakukan operasi update jika ada perubahan
            $isChanged = false;

            if ($existingKlien->idJenisKlien != $request->quotationTour['idJenisKlien']) {
                $existingKlien->idJenisKlien = $request->quotationTour['idJenisKlien'];
                $isChanged = true;
            }
            if ($existingKlien->namaKlien != $request->quotationTour['namaKlien']) {
                $existingKlien->namaKlien = $request->quotationTour['namaKlien'];
                $isChanged = true;
            }

            if ($isChanged) {
                $existingKlien->updated_at = Carbon::now();
                $existingKlien->save();
            }
        }


        $existingQuotationTour = quotationTour::where('idQuotationTour', $request->quotationTour['idQuotationTour'])->first();
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
            if ($existingQuotationTour->persentaseKeuntungan != $request->quotationTour['persentaseKeuntungan']) {
                $existingQuotationTour->persentaseKeuntungan = $request->quotationTour['persentaseKeuntungan'];
                $isChanged = true;
            }
            if ($existingQuotationTour->feeMarketing != $request->quotationTour['feeMarketing']) {
                $existingQuotationTour->feeMarketing = $request->quotationTour['feeMarketing'];
                $isChanged = true;
            }
            if ($existingQuotationTour->tglBerlakuQuotation != $request->quotationTour['tglBerlakuQuotation']) {
                $existingQuotationTour->tglBerlakuQuotation = $request->quotationTour['tglBerlakuQuotation'];
                $isChanged = true;
            }
            if ($existingQuotationTour->masaBerlakuQuotation != $request->quotationTour['masaBerlakuQuotation']) {
                $existingQuotationTour->masaBerlakuQuotation = $request->quotationTour['masaBerlakuQuotation'];
                $isChanged = true;
            }
            if ($existingQuotationTour->idAreaWisata != $request->quotationTour['idAreaWisata']) {
                $existingQuotationTour->idAreaWisata = $request->quotationTour['idAreaWisata'];
                $isChanged = true;
            }
            if ($existingQuotationTour->idDataKlien != $request->quotationTour['idDataKlien']) {
                $existingQuotationTour->idDataKlien = $request->quotationTour['idDataKlien'];
                $isChanged = true;
            }
            if ($existingQuotationTour->idKategoriTour != $request->quotationTour['idKategoriTour']) {
                $existingQuotationTour->idKategoriTour = $request->quotationTour['idKategoriTour'];
                $isChanged = true;
            }
            if ($isChanged) {
                $existingQuotationTour->updated_at = Carbon::now();
                $existingQuotationTour->save();
            }
        }

        $existingQuotationTransaksi = quotationTransaksi::where('idQuotationTransaksi', $request->quotationTour['idQuotationTransaksi'])->first();
        if ($existingQuotationTransaksi) {
            // Data klien sudah ada, lakukan operasi update jika ada perubahan
            $isChanged = false;

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
            if ($existingQuotationTransaksi->statusTransaksi != $request->quotationTour['statusTransaksi']) {
                $existingQuotationTransaksi->statusTransaksi = $request->quotationTour['statusTransaksi'];
                $isChanged = true;
            }
            if ($isChanged) {
                $existingQuotationTransaksi->updated_at = Carbon::now();
                $existingQuotationTransaksi->save();
            }
        }

        $bonusData = $request->bonus;
        $Tbonus = Tbonus::all();

        foreach ($Tbonus as $tbonus) {
            $found = false;
            foreach ($bonusData as $bonus) {
                if ($bonus['idTbonus'] == $tbonus['idTbonus']) {
                    $found = true;
                    break;
                }
            }
            if (!$found && $tbonus['idQuotationTransaksi'] == $request->quotationTour['idQuotationTransaksi']) {
                // Delete idTbonus from $Tbonus
                $tbonus->delete();
            }
        }

        // dd($bonusData);
        foreach ($bonusData as $bonus) {
            // dd($bonusData);
            if ($bonus['idTbonus'] != 0) {
                    // dd($bonus);
                    $existingBonus = Tbonus::where('idTbonus', $bonus['idTbonus'])->first();
                    if ($existingBonus) {
                        // Memeriksa perubahan pada data sebelumnya
                        $isChanged = false;

                        if ($existingBonus->idDataBonus != $bonus['idDataBonus']) {
                            $existingBonus->idDataBonus = $bonus['idDataBonus'];
                            $isChanged = true;
                        }
                        if ($existingBonus->qtyTbonus != $bonus['qtyTbonus']) {
                            $existingBonus->qtyTbonus = $bonus['qtyTbonus'];
                            $isChanged = true;
                        }
                        if ($existingBonus->jmlHariTbonus != $bonus['jmlHariTbonus']) {
                            $existingBonus->jmlHariTbonus = $bonus['jmlHariTbonus'];
                            $isChanged = true;
                        }
                        if ($existingBonus->hargaTbonus != $bonus['hargaTbonus']) {
                            $existingBonus->hargaTbonus = $bonus['hargaTbonus'];
                            $isChanged = true;
                        }
                        if ($existingBonus->jumlahTbonus != $bonus['jumlahTbonus']) {
                            $existingBonus->jumlahTbonus = $bonus['jumlahTbonus'];
                            $isChanged = true;
                        }
                        // if ($existingBonus->namaTbonus != $bonus['namaTbonus']) {
                        //     $existingBonus->namaTbonus = $bonus['namaTbonus'];
                        //     $isChanged = true;
                        // }
                        // if ($existingBonus->idQuotationTransaksi != $bonus['idQuotationTransaksi']) {
                        //     $existingBonus->idQuotationTransaksi = $bonus['idQuotationTransaksi'];
                        //     $isChanged = true;
                        // }              
                        if ($isChanged) {
                            $existingBonus->updated_at = Carbon::now();
                            $existingBonus->save();
                        }
                    }
            } else {
                if ($bonus['idDataBonus'] != 0) {
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
        }
        
        $eventData = $request->event;
        $Tevent = Tevent::all();

        foreach ($Tevent as $tevent) {
            $found = false;
            foreach ($eventData as $event) {
                if ($event['idTevent'] == $tevent['idTevent']) {
                    $found = true;
                    break;
                }
            }
            if (!$found && $tevent['idQuotationTransaksi'] == $request->quotationTour['idQuotationTransaksi']) {
                // Delete idTevent from $Tevent
                $tevent->delete();
            }
        }

        // dd($eventData);
        foreach ($eventData as $event) {
            // dd($eventData);
            if ($event['idTevent'] != 0) {
                    // dd($event);
                    $existingevent = Tevent::where('idTevent', $event['idTevent'])->first();
                    if ($existingevent) {
                        // Memeriksa perubahan pada data sebelumnya
                        $isChanged = false;

                        if ($existingevent->idDataEvent != $event['idDataEvent']) {
                            $existingevent->idDataEvent = $event['idDataEvent'];
                            $isChanged = true;
                        }
                        if ($existingevent->qtyTevent != $event['qtyTevent']) {
                            $existingevent->qtyTevent = $event['qtyTevent'];
                            $isChanged = true;
                        }
                        if ($existingevent->jmlHariTevent != $event['jmlHariTevent']) {
                            $existingevent->jmlHariTevent = $event['jmlHariTevent'];
                            $isChanged = true;
                        }
                        if ($existingevent->hargaTevent != $event['hargaTevent']) {
                            $existingevent->hargaTevent = $event['hargaTevent'];
                            $isChanged = true;
                        }
                        if ($existingevent->jumlahTevent != $event['jumlahTevent']) {
                            $existingevent->jumlahTevent = $event['jumlahTevent'];
                            $isChanged = true;
                        }
                        // if ($existingevent->namaTevent != $event['namaTevent']) {
                        //     $existingevent->namaTevent = $event['namaTevent'];
                        //     $isChanged = true;
                        // }
                        // if ($existingevent->idQuotationTransaksi != $event['idQuotationTransaksi']) {
                        //     $existingevent->idQuotationTransaksi = $event['idQuotationTransaksi'];
                        //     $isChanged = true;
                        // }              
                        if ($isChanged) {
                            $existingevent->updated_at = Carbon::now();
                            $existingevent->save();
                        }
                    }
            } else {
                if ($event['idDataEvent'] != 0) {
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
        }

        $crewData = $request->crew;
        $TcrewOp = TcrewOp::all();

        foreach ($TcrewOp as $tcrew) {
            $found = false;
            foreach ($crewData as $crew) {
                if ($crew['idTcrew'] == $tcrew['idTcrew']) {
                    $found = true;
                    break;
                }
            }
            if (!$found && $tcrew['idQuotationTransaksi'] == $request->quotationTour['idQuotationTransaksi']) {
                // Delete idTcrew from $Tcrew
                $tcrew->delete();
            }
        }

        // dd($crewData);
        foreach ($crewData as $crew) {
            // dd($crewData);
            if ($crew['idTcrew'] != 0) {
                    // dd($crew);
                    $existingcrew = TcrewOp::where('idTcrew', $crew['idTcrew'])->first();
                    if ($existingcrew) {
                        // Memeriksa perubahan pada data sebelumnya
                        $isChanged = false;

                        if ($existingcrew->idCrewOperasional != $crew['idCrewOperasional']) {
                            $existingcrew->idCrewOperasional = $crew['idCrewOperasional'];
                            $isChanged = true;
                        }
                        if ($existingcrew->qtyTcrew != $crew['qtyTcrew']) {
                            $existingcrew->qtyTcrew = $crew['qtyTcrew'];
                            $isChanged = true;
                        }
                        if ($existingcrew->jmlHariTcrew != $crew['jmlHariTcrew']) {
                            $existingcrew->jmlHariTcrew = $crew['jmlHariTcrew'];
                            $isChanged = true;
                        }
                        if ($existingcrew->hargaTcrew != $crew['hargaTcrew']) {
                            $existingcrew->hargaTcrew = $crew['hargaTcrew'];
                            $isChanged = true;
                        }
                        if ($existingcrew->jumlahTcrew != $crew['jumlahTcrew']) {
                            $existingcrew->jumlahTcrew = $crew['jumlahTcrew'];
                            $isChanged = true;
                        }
                        // if ($existingcrew->namaTcrew != $crew['namaTcrew']) {
                        //     $existingcrew->namaTcrew = $crew['namaTcrew'];
                        //     $isChanged = true;
                        // }
                        // if ($existingcrew->idQuotationTransaksi != $crew['idQuotationTransaksi']) {
                        //     $existingcrew->idQuotationTransaksi = $crew['idQuotationTransaksi'];
                        //     $isChanged = true;
                        // }              
                        if ($isChanged) {
                            $existingcrew->updated_at = Carbon::now();
                            $existingcrew->save();
                        }
                    }
            } else {
                if ($crew['idCrewOperasional'] != 0) {
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
        }

        $fasilitasData = $request->fasilitas;
        $TFasilitasTour = TFasilitasTour::all();

        foreach ($TFasilitasTour as $tfasilitas) {
            $found = false;
            foreach ($fasilitasData as $fasilitas) {
                if ($fasilitas['idTft'] == $tfasilitas['idTft']) {
                    $found = true;
                    break;
                }
            }
            if (!$found && $tfasilitas['idQuotationTransaksi'] == $request->quotationTour['idQuotationTransaksi']) {
                // Delete idTft from $TFasilitasTour
                $tfasilitas->delete();
            }
        }

        foreach ($fasilitasData as $fasilitas) {
            if ($fasilitas['idTft'] != 0) {
                    $existingevent = TFasilitasTour::where('idTft', $fasilitas['idTft'])->first();
                    if ($existingevent) {
                        // Memeriksa perubahan pada data sebelumnya
                        $isChanged = false;

                        if ($existingevent->idFasilitasTour != $fasilitas['idFasilitasTour']) {
                            $existingevent->idFasilitasTour = $fasilitas['idFasilitasTour'];
                            $isChanged = true;
                        }
                        if ($existingevent->qtyTft != $fasilitas['qtyTft']) {
                            $existingevent->qtyTft = $fasilitas['qtyTft'];
                            $isChanged = true;
                        }
                        if ($existingevent->jmlHariTft != $fasilitas['jmlHariTft']) {
                            $existingevent->jmlHariTft = $fasilitas['jmlHariTft'];
                            $isChanged = true;
                        }
                        if ($existingevent->hargaTft != $fasilitas['hargaTft']) {
                            $existingevent->hargaTft = $fasilitas['hargaTft'];
                            $isChanged = true;
                        }
                        if ($existingevent->jumlahTft != $fasilitas['jumlahTft']) {
                            $existingevent->jumlahTft = $fasilitas['jumlahTft'];
                            $isChanged = true;
                        }
                        // if ($existingevent->namaTft != $fasilitas['namaTft']) {
                        //     $existingevent->namaTft = $fasilitas['namaTft'];
                        //     $isChanged = true;
                        // }
                        // if ($existingevent->idQuotationTransaksi != $fasilitas['idQuotationTransaksi']) {
                        //     $existingevent->idQuotationTransaksi = $fasilitas['idQuotationTransaksi'];
                        //     $isChanged = true;
                        // }              
                        if ($isChanged) {
                            $existingevent->updated_at = Carbon::now();
                            $existingevent->save();
                        }
                    }
            } else {
                if ($fasilitas['idFasilitasTour'] != 0) {
                        $Tft = TFasilitasTour::create([
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
        }

        // dd($TFasilitasTour);

        $rumahMakanData = $request->rm;
        $TRumahMakan = TRumahMakan::all();

        foreach ($TRumahMakan as $trumahMakan) {
            $found = false;
            foreach ($rumahMakanData as $rumahMakan) {
                if ($rumahMakan['idTrm'] == $trumahMakan['idTrm']) {
                    $found = true;
                    break;
                }
            }
            if (!$found && $trumahMakan['idQuotationTransaksi'] == $request->quotationTour['idQuotationTransaksi']) {
                // Delete idTrm from $TRumahMakan
                $trumahMakan->delete();
            }
        }

        foreach ($rumahMakanData as $rumahMakan) {
            if ($rumahMakan['idTrm'] != 0) {
                    $existingevent = TRumahMakan::where('idTrm', $rumahMakan['idTrm'])->first();
                    if ($existingevent) {
                        // Memeriksa perubahan pada data sebelumnya
                        $isChanged = false;

                        if ($existingevent->idRM != $rumahMakan['idRM']) {
                            $existingevent->idRM = $rumahMakan['idRM'];
                            $isChanged = true;
                        }
                        if ($existingevent->qtyTrm != $rumahMakan['qtyTrm']) {
                            $existingevent->qtyTrm = $rumahMakan['qtyTrm'];
                            $isChanged = true;
                        }
                        if ($existingevent->jmlHariTrm != $rumahMakan['jmlHariTrm']) {
                            $existingevent->jmlHariTrm = $rumahMakan['jmlHariTrm'];
                            $isChanged = true;
                        }
                        if ($existingevent->hargaTrm != $rumahMakan['hargaTrm']) {
                            $existingevent->hargaTrm = $rumahMakan['hargaTrm'];
                            $isChanged = true;
                        }
                        if ($existingevent->jumlahTrm != $rumahMakan['jumlahTrm']) {
                            $existingevent->jumlahTrm = $rumahMakan['jumlahTrm'];
                            $isChanged = true;
                        }
                        // if ($existingevent->namaTrm != $rumahMakan['namaRM']) {
                        //     $existingevent->namaTrm = $rumahMakan['namaRM'];
                        //     $isChanged = true;
                        // }
                        // if ($existingevent->idQuotationTransaksi != $rumahMakan['idQuotationTransaksi']) {
                        //     $existingevent->idQuotationTransaksi = $rumahMakan['idQuotationTransaksi'];
                        //     $isChanged = true;
                        // }              
                        if ($isChanged) {
                            $existingevent->updated_at = Carbon::now();
                            $existingevent->save();
                        }
                    }
            } else {
                if ($rumahMakan['idRM'] != 0) {
                        $Trm = TRumahMakan::create([
                            'idRM' => $rumahMakan['idRM'],
                            'qtyTrm' => $rumahMakan['qtyTrm'],
                            'jmlHariTrm' => $rumahMakan['jmlHariTrm'],
                            'hargaTrm' => $rumahMakan['hargaTrm'],
                            'jumlahTrm' => $rumahMakan['jumlahTrm'],
                            'namaTrm' => $rumahMakan['namaRM'],
                            'idQuotationTransaksi' => $request->quotationTour['idQuotationTransaksi'],
                            'created_at' => Carbon::now(),
                            'updated_at' => Carbon::now(),
                        ]);
                }
            }
        }

        // dd($TFasilitasTour);

        $penginapanData = $request->penginapan;
        $Tpenginapan = Tpenginapan::all();

        foreach ($Tpenginapan as $tpenginapan) {
            $found = false;
            foreach ($penginapanData as $penginapan) {
                if ($penginapan['idTpenginapan'] == $tpenginapan['idTpenginapan']) {
                    $found = true;
                    break;
                }
            }
            if (!$found && $tpenginapan['idQuotationTransaksi'] == $request->quotationTour['idQuotationTransaksi']) {
                // Delete idTpenginapan from $Tpenginapan
                $tpenginapan->delete();
            }
        }

        foreach ($penginapanData as $penginapan) {
            if ($penginapan['idTpenginapan'] != 0) {
                    $existingevent = Tpenginapan::where('idTpenginapan', $penginapan['idTpenginapan'])->first();
                    if ($existingevent) {
                        // Memeriksa perubahan pada data sebelumnya
                        $isChanged = false;

                        if ($existingevent->idPenginapan != $penginapan['idPenginapan']) {
                            $existingevent->idPenginapan = $penginapan['idPenginapan'];
                            $isChanged = true;
                        }
                        if ($existingevent->qtyTpenginapan != $penginapan['qtyTpenginapan']) {
                            $existingevent->qtyTpenginapan = $penginapan['qtyTpenginapan'];
                            $isChanged = true;
                        }
                        if ($existingevent->jmlHariTpenginapan != $penginapan['jmlHariTpenginapan']) {
                            $existingevent->jmlHariTpenginapan = $penginapan['jmlHariTpenginapan'];
                            $isChanged = true;
                        }
                        if ($existingevent->hargaTpenginapan != $penginapan['hargaTpenginapan']) {
                            $existingevent->hargaTpenginapan = $penginapan['hargaTpenginapan'];
                            $isChanged = true;
                        }
                        if ($existingevent->jumlahTpenginapan != $penginapan['jumlahTpenginapan']) {
                            $existingevent->jumlahTpenginapan = $penginapan['jumlahTpenginapan'];
                            $isChanged = true;
                        }
                        // if ($existingevent->namaTpenginapan != $penginapan['namaRM']) {
                        //     $existingevent->namaTpenginapan = $penginapan['namaRM'];
                        //     $isChanged = true;
                        // }
                        // if ($existingevent->idQuotationTransaksi != $penginapan['idQuotationTransaksi']) {
                        //     $existingevent->idQuotationTransaksi = $penginapan['idQuotationTransaksi'];
                        //     $isChanged = true;
                        // }              
                        if ($isChanged) {
                            $existingevent->updated_at = Carbon::now();
                            $existingevent->save();
                        }
                    }
            } else {
                if ($penginapan['idPenginapan'] != 0) {
                        $Tpenginapan = Tpenginapan::create([
                            'idPenginapan' => $penginapan['idPenginapan'],
                            'qtyTpenginapan' => $penginapan['qtyTpenginapan'],
                            'jmlHariTpenginapan' => $penginapan['jmlHariTpenginapan'],
                            'hargaTpenginapan' => $penginapan['hargaTpenginapan'],
                            'jumlahTpenginapan' => $penginapan['jumlahTpenginapan'],
                            'namaTpenginapan' => $penginapan['namaPenginapan'],
                            'idQuotationTransaksi' => $request->quotationTour['idQuotationTransaksi'],
                            'created_at' => Carbon::now(),
                            'updated_at' => Carbon::now(),
                        ]);
                }
            }
        }

        $transportasiData = $request->transport;
        $Ttransportasi = Ttransportasi::all();

        foreach ($Ttransportasi as $ttransportasi) {
            $found = false;
            foreach ($transportasiData as $transportasi) {
                if ($transportasi['idTtransportasi'] == $ttransportasi['idTtransportasi']) {
                    $found = true;
                    break;
                }
            }
            if (!$found && $ttransportasi['idQuotationTransaksi'] == $request->quotationTour['idQuotationTransaksi']) {
                // Delete idTtransportasi from $Ttransportasi
                $ttransportasi->delete();
            }
        }

        foreach ($transportasiData as $transportasi) {
            if ($transportasi['idTtransportasi'] != 0) {
                    $existingevent = Ttransportasi::where('idTtransportasi', $transportasi['idTtransportasi'])->first();
                    if ($existingevent) {
                        // Memeriksa perubahan pada data sebelumnya
                        $isChanged = false;

                        if ($existingevent->idTransportasi != $transportasi['idTransportasi']) {
                            $existingevent->idTransportasi = $transportasi['idTransportasi'];
                            $isChanged = true;
                        }
                        if ($existingevent->qtyTtransportasi != $transportasi['qtyTtransportasi']) {
                            $existingevent->qtyTtransportasi = $transportasi['qtyTtransportasi'];
                            $isChanged = true;
                        }
                        if ($existingevent->jmlHariTtransportasi != $transportasi['jmlHariTtransportasi']) {
                            $existingevent->jmlHariTtransportasi = $transportasi['jmlHariTtransportasi'];
                            $isChanged = true;
                        }
                        if ($existingevent->hargaTtransportasi != $transportasi['hargaTtransportasi']) {
                            $existingevent->hargaTtransportasi = $transportasi['hargaTtransportasi'];
                            $isChanged = true;
                        }
                        if ($existingevent->jumlahTtransportasi != $transportasi['jumlahTtransportasi']) {
                            $existingevent->jumlahTtransportasi = $transportasi['jumlahTtransportasi'];
                            $isChanged = true;
                        }
                        // if ($existingevent->namaTtransportasi != $transportasi['namaRM']) {
                        //     $existingevent->namaTtransportasi = $transportasi['namaRM'];
                        //     $isChanged = true;
                        // }
                        // if ($existingevent->idQuotationTransaksi != $transportasi['idQuotationTransaksi']) {
                        //     $existingevent->idQuotationTransaksi = $transportasi['idQuotationTransaksi'];
                        //     $isChanged = true;
                        // }              
                        if ($isChanged) {
                            $existingevent->updated_at = Carbon::now();
                            $existingevent->save();
                        }
                    }
            } else {
                if ($transportasi['idTransportasi'] != 0) {
                        $Ttransportasi = Ttransportasi::create([
                            'idTransportasi' => $transportasi['idTransportasi'],
                            'qtyTtransportasi' => $transportasi['qtyTtransportasi'],
                            'jmlHariTtransportasi' => $transportasi['jmlHariTtransportasi'],
                            'hargaTtransportasi' => $transportasi['hargaTtransportasi'],
                            'jumlahTtransportasi' => $transportasi['jumlahTtransportasi'],
                            'namaTtransportasi' => $transportasi['namaTransportasi'],
                            'idQuotationTransaksi' => $request->quotationTour['idQuotationTransaksi'],
                            'created_at' => Carbon::now(),
                            'updated_at' => Carbon::now(),
                        ]);
                }
            }
        }

        // dd($TFasilitasTour);

        $destinasiData = $request->destinasi;
        $TDestinasiWisata = TDestinasiWisata::all();

        foreach ($TDestinasiWisata as $tdestinasi) {
            $found = false;
            foreach ($destinasiData as $destinasi) {
                if ($destinasi['idTdestinasiWisata'] == $tdestinasi['idTdestinasiWisata']) {
                    $found = true;
                    break;
                }
            }
            if (!$found && $tdestinasi['idQuotationTransaksi'] == $request->quotationTour['idQuotationTransaksi']) {
                // Delete idTdestinasiWisata from $TDestinasiWisata
                $tdestinasi->delete();
            }
        }

        foreach ($destinasiData as $destinasi) {
            if ($destinasi['idTdestinasiWisata'] != 0) {
                    $existingevent = TDestinasiWisata::where('idTdestinasiWisata', $destinasi['idTdestinasiWisata'])->first();
                    if ($existingevent) {
                        // Memeriksa perubahan pada data sebelumnya
                        $isChanged = false;

                        if ($existingevent->idDestinasiWisata != $destinasi['idDestinasiWisata']) {
                            $existingevent->idDestinasiWisata = $destinasi['idDestinasiWisata'];
                            $isChanged = true;
                        }
                        if ($existingevent->qtyTdestinasiWisata != $destinasi['qtyTdestinasiWisata']) {
                            $existingevent->qtyTdestinasiWisata = $destinasi['qtyTdestinasiWisata'];
                            $isChanged = true;
                        }
                        if ($existingevent->jmlHariTdestinasiWisata != $destinasi['jmlHariTdestinasiWisata']) {
                            $existingevent->jmlHariTdestinasiWisata = $destinasi['jmlHariTdestinasiWisata'];
                            $isChanged = true;
                        }
                        if ($existingevent->hargaTdestinasiWisata != $destinasi['hargaTdestinasiWisata']) {
                            $existingevent->hargaTdestinasiWisata = $destinasi['hargaTdestinasiWisata'];
                            $isChanged = true;
                        }
                        if ($existingevent->jumlahTdestinasiWisata != $destinasi['jumlahTdestinasiWisata']) {
                            $existingevent->jumlahTdestinasiWisata = $destinasi['jumlahTdestinasiWisata'];
                            $isChanged = true;
                        }
                        // if ($existingevent->namaTdestinasiWisata != $destinasi['namaRM']) {
                        //     $existingevent->namaTdestinasiWisata = $destinasi['namaRM'];
                        //     $isChanged = true;
                        // }
                        // if ($existingevent->idQuotationTransaksi != $destinasi['idQuotationTransaksi']) {
                        //     $existingevent->idQuotationTransaksi = $destinasi['idQuotationTransaksi'];
                        //     $isChanged = true;
                        // }              
                        if ($isChanged) {
                            $existingevent->updated_at = Carbon::now();
                            $existingevent->save();
                        }
                    }
            } else {
                // dd($destinasi);
                if ($destinasi['idDestinasiWisata'] != 0) {
                        $TDestinasiWisata = TdestinasiWisata::create([
                            'idDestinasiWisata' => $destinasi['idDestinasiWisata'],
                            'qtyTdestinasiWisata' => $destinasi['qtyTdestinasiWisata'],
                            'jmlHariTdestinasiWisata' => $destinasi['jmlHariTdestinasiWisata'],
                            'hargaTdestinasiWisata' => $destinasi['hargaTdestinasiWisata'],
                            'jumlahTdestinasiWisata' => $destinasi['jumlahTdestinasiWisata'],
                            'namaTdestinasiWisata' => $destinasi['namaDestinasiWisata'],
                            'idQuotationTransaksi' => $request->quotationTour['idQuotationTransaksi'],
                            'created_at' => Carbon::now(),
                            'updated_at' => Carbon::now(),
                        ]);
                }
            }
        }

        // dd($TFasilitasTour);

        return redirect()->route('qhistory.detail', ['id' => $request->quotationTour['idQuotatioRekomendasi']]);
    }

    public function editQClone(Request $request)
    {
        $areawisata = areaWisata::all();
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
        return Inertia::render('Quotation/QuotationsClone', [
            'areawisata' => $areawisata,
            // 'userprogram' => $userprogram,
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

    public function addQclone(Request $request)
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
                    'qtyTbonus' => $bonus['qty'],
                    'jmlHariTbonus' => $bonus['hari'],
                    'hargaTbonus' => $bonus['harga'],
                    'jumlahTbonus' => $bonus['jumlah'],
                    'namaTbonus' => $bonus['ketDataBonus'],
                    'idQuotationTransaksi' => $quotationTransaksi->idQuotationTransaksi,
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
                    'qtyTevent' => $event['qty'],
                    'jmlHariTevent' => $event['hari'],
                    'hargaTevent' => $event['harga'],
                    'jumlahTevent' => $event['jumlah'],
                    'namaTevent' => $event['ketDataEvent'],
                    'idQuotationTransaksi' => $quotationTransaksi->idQuotationTransaksi,
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
                    'qtyTcrew' => $crew['qty'],
                    'jmlHariTcrew' => $crew['hari'],
                    'hargaTcrew' => $crew['harga'],
                    'jumlahTcrew' => $crew['jumlah'],
                    'namaTcrew' => $crew['ketCrewOperasional'],
                    'idQuotationTransaksi' => $quotationTransaksi->idQuotationTransaksi,
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
                    'qtyTft' => $fasilitas['qty'],
                    'jmlHariTft' => $fasilitas['hari'],
                    'hargaTft' => $fasilitas['harga'],
                    'jumlahTft' => $fasilitas['jumlah'],
                    'namaTft' => $fasilitas['ketFasilitasTour'],
                    'idQuotationTransaksi' => $quotationTransaksi->idQuotationTransaksi,
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
                    'qtyTdestinasiWisata' => $destinasi['qty'],
                    'jmlHariTdestinasiWisata' => $destinasi['hari'],
                    'hargaTdestinasiWisata' => $destinasi['harga'],
                    'jumlahTdestinasiWisata' => $destinasi['jumlah'],
                    'namaTdestinasiWisata' => $destinasi['namaDestinasiWisata'],
                    'idQuotationTransaksi' => $quotationTransaksi->idQuotationTransaksi,
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            }
        }

        $transportasiData = $request->transport;
        if ($request->transport[0]['idTransportasi'] != 0) {
            foreach ($transportasiData as $transport) {
                $tTransportasi = Ttransportasi::create([
                    'idTransportasi' => $transport['idTransportasi'],
                    'qtyTtransportasi' => $transport['qty'],
                    'jmlHariTtransportasi' => $transport['hari'],
                    'hargaTtransportasi' => $transport['harga'],
                    'jumlahTtransportasi' => $transport['jumlah'],
                    'namaTtransportasi' => $transport['namaTransportasi'],
                    'idQuotationTransaksi' => $quotationTransaksi->idQuotationTransaksi,
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
                    'qtyTpenginapan' => $penginapan['qty'],
                    'jmlHariTpenginapan' => $penginapan['hari'],
                    'hargaTpenginapan' => $penginapan['harga'],
                    'jumlahTpenginapan' => $penginapan['jumlah'],
                    'namaTpenginapan' => $penginapan['namaPenginapan'],
                    'idQuotationTransaksi' => $quotationTransaksi->idQuotationTransaksi,
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            }
        }

        $rmData = $request->rm;
        if ($request->rm[0]['idRM'] != 0) {
            foreach ($rmData as $rm) {
                $tRumahMakan = TRumahMakan::create([
                    'idRM' => $rm['idRM'],
                    'qtyTrm' => $rm['qty'],
                    'jmlHariTrm' => $rm['hari'],
                    'hargaTrm' => $rm['harga'],
                    'jumlahTrm' => $rm['jumlah'],
                    'namaTrm' => $rm['namaRM'],
                    'idQuotationTransaksi' => $quotationTransaksi->idQuotationTransaksi,
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
     * @param  \App\Models\quotationTour  $quotationTour
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $Mydata = quotationRekomendasi::find($request->id);
        $Mydata->delete();
        return redirect()->back()->with('message', 'item berhasil dihapus');
    }
}
