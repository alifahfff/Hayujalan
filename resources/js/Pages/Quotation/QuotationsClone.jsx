import React, { useEffect } from "react";
import Layout from "@/Layouts/Layout";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

const QuotationsClone = (props, crewL) => {
  // const {data} = this.props.location;
  console.log("data quotation", props);
  const initialFormDestinasi = props.Tdestinasi.length > 0 ? props.Tdestinasi : [{
    namaDestinasiWisata:'',
    idDestinasiWisata :'',
    biaya:'',
    pilihanBiaya:'',
    qty:'',
    hari:'',
    harga:'',
    jumlah:0,  
  }];

  const [formDestinasi, setFormDestinasi] = useState(initialFormDestinasi);

  const initialFormTransport = props.Ttransportasi.length > 0 ? props.Ttransportasi : [{
    namaTransportasi:'',
    idTransportasi:'',
    biaya:'',
    nama:[],
    qty:'',
    hari:'',
    harga:'',
    jumlah:0,  
  }];

  const [formTransport, setFormTransport] = useState(initialFormTransport);

  const initialFormPenginapan = props.Tpenginapan.length > 0 ? props.Tpenginapan : [{
    namaPenginapan:'',
    idPenginapan:'',
    biaya:'',
    jenisKamar:[],
    qty:'',
    hari:'',
    harga:'',
    jumlah:0,
  }];

  const [formPenginapan, setFormPenginapan] = useState(initialFormPenginapan);

  const initialFormRM = props.TRumahMakan.length > 0 ? props.TRumahMakan : [{
    namaRM:'',
    idRM:'',
    biaya:'',
    menuRM:[],
    qty:'',
    hari:'',
    harga:'',
    jumlah:0,
  }];

  const [formRM, setFormRM] = useState(initialFormRM);

  const initialFormEvent = props.Tevent.length > 0 ? props.Tevent : [{
    ketDataEvent:'',
    idDataEvent:'',
    biayaDataEvent:'',
    qty:'',
    hari:'',
    harga:'',
    jumlah:0,
  }];

  const [formEvent, setFormEvent] = useState(initialFormEvent);

  const initialFormBonus = props.Tbonus.length > 0 ? props.Tbonus : [{
    ketDataBonus:'',
    idDataBonus:'',
    biayaDataBonus:'',
    qty:'',
    hari:'',
    harga:'',
    jumlah:0,
  }];

  const [formBonus, setFormBonus] = useState(initialFormBonus);

  const initialFormCrew = props.Tcrew.length > 0 ? props.Tcrew : [{
    ketCrewOperasional: '',
    idCrewOperasional: '',
    biayaCrewOperasional: '',
    qtyTcrew: '',
    jmlHariTcrew: '',
    hargaTcrew: '',
    jumlahTcrew: 0,
  }];
  
  const [formCrew, setFormCrew] = useState(initialFormCrew);

  const initialFormFasilitas = props.TFasilitas.length > 0 ? props.TFasilitas : [{
    ketFasilitas: '',
    idFasilitasTour: '',
    biayaFasilitas: '',
    qty: '',
    hari: '',
    harga: '',
    jumlah: 0,
  }];
  
  const [formFasilitas, setFormFasilitas] = useState(initialFormFasilitas);

  const [datas, setDatas] = useState({
    idQuotationTransaksi:props.data.idQuotationTransaksi,
    idProgram: '1',
    namaProgram: 'Ryan',
    idAreaWisata: props.data.quotation.idAreaWisata,
    namaArea: props.data.quotation.areawisata.namaArea,
    idSales: '',
    namaSales: 'YY',
    idKategoriTour: props.data.quotation.idKategoriTour, 
    namaKategoriTour: props.data.quotation.kategori.namaKategoriTour,
    namaproject: props.data.quotation.namaProject, 
    durasiproject: props.data.quotation.durasiProject,
    tipeDurasi: '',
    jumlahOrang: props.data.quotation.qty,
    foc: props.data.quotation.foc,
    totalOrang: parseInt(props.data.quotation.qty + props.data.quotation.foc),
    planWaktuPelaksanaan: props.data.quotation.planWaktuPelaksanaan || '',
    presentaseKeuntungan: props.data.quotation.presentaseKeuntungan,
    feemarketing: props.data.quotation.feeMarketing,
    namaKlien: props.data.quotation.klien.namaKlien,
    jenisKlien: props.data.quotation.klien.jenis_klien.namaJenisKlien,
    idJenisKlien: props.data.quotation.klien.idJenisKlien,
    idKlien: props.data.quotation.klien.idKlien,
    idQuotationTour: props.data.idQuotationTour,
  })

  
  console.log("datas", datas);
  // console.log("event", formEvent);
  // console.log("bonus", formBonus);
  // console.log("crew", formCrew);
  // console.log("fasilitas", formFasilitas);
  // console.log("destinasi", formDestinasi);
  // console.log('rumah makan', formRM);
  // console.log('penginapan', formPenginapan);
  // console.log('transportasi', formTransport);

  const [selectedDate, setSelectedDate] = useState('');
  const [listRM, setListRM] = useState({
    list: [],
  });

  const handleDateChange = (e) => {
    console.log('e', e)
    if(e == datas.planWaktuPelaksanaan) {
      const selectedDateString = e;
      const selectedDateObj = new Date(selectedDateString);
      const dayOfWeek = selectedDateObj.getDay();

      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

      setSelectedDate(selectedDateString);

      if (isWeekend) {
        console.log('Selected date is a weekend.');
        setDatas({
          ...datas,
          tipeDurasi: 'weekend',
        })
      } else {
        console.log('Selected date is a weekday.');
        setDatas({
          ...datas,
          tipeDurasi: 'weekday',
        })
      }
    } else {
      const selectedDateString = e.target.value;
      const selectedDateObj = new Date(selectedDateString);
      const dayOfWeek = selectedDateObj.getDay();

      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

      setSelectedDate(selectedDateString);

      if (isWeekend) {
        console.log('Selected date is a weekend.');
        setDatas({
          ...datas,
          planWaktuPelaksanaan: e.target.value,
          tipeDurasi: 'weekend',
        })
      } else {
        console.log('Selected date is a weekday.');
        setDatas({
          ...datas,
          planWaktuPelaksanaan: e.target.value,
          tipeDurasi: 'weekday',
        })
      }
    }
  };

  const findList = (e, index, params) => {
    console.log('value', e.target.value)
    console.log('name', e.target.name)
    console.log('index', index)
    console.log('params', params)
    if(params == 'rm'){
      const values = [...formRM]
      const list = []; 
      if(e.target.name == 'namaRumahMakan'){
        // alert(1)
        console.log('detailrm', props.detailRM)
        
        // setListRM(list)
        props.detailRM.forEach((lb) => {
          if(lb.idRM == e.target.value){
            console.log('cek lb', lb)
            list.push(lb)
          }
        })
        console.log('list', list)
      }
      values[index]['menuRM'] = list
      setFormRM(values)
    }
    if(params == 'penginapan'){
      const values = [...formPenginapan]
      const list = []; 
      if(e.target.name == 'namaPenginapan'){
        // alert(1)
        console.log('detailrm', props.detailRM)
        
        // setListRM(list)
        props.detailPenginapan.forEach((lb) => {
          if(lb.idPenginapan == e.target.value){
            console.log('cek lb', lb)
            list.push(lb)
          }
        })
        console.log('list', list)
      }
      values[index]['jenisKamar'] = list
      values[index]['idPenginapan'] = e.target.value
      setFormPenginapan(values)
    }
    if(params == 'transportasi'){
      const values = [...formTransport]
      const list = []; 
      if(e.target.name == 'namaTransportasi'){
        // alert(1)
        console.log('detailrm', props.detaiTransportasi)
        
        // setListRM(list)
        props.detaiTransportasi.forEach((lb) => {
          if(lb.idTransportasi == e.target.value){
            console.log('cek lb', lb)
            list.push(lb)
          }
        })
        console.log('list', list)
      }
      values[index]['nama'] = list
      setFormTransport(values)
    }
  }

  const datasFind = (e, params) => {
    // console.log('eaaa', e)
    // console.log('pppp', params)
    if(params == 'jenisKlien'){
      const find2 = props.jenisKlien.find((x) => {
        return x.id == e 
      });
      console.log('find', find2)
      setDatas({
        ...datas,
        jenisKlien: find2.namaJenisKlien,
        idJenisKlien: find2.id,
      })
    }

    if(params == 'sales'){
      const find2 = props.usersales.find((x) => {
        return x.id == e 
      });
      console.log('find', find2)
      setDatas({
        ...datas,
        namaSales: find2.namaSales,
        idSales: find2.id,
      })
    }

    if(params == 'kategori'){
      const find2 = props.kategoriwisata.find((x) => {
        return x.id == e 
      });
      // console.log('find', find2)
      setDatas({
        ...datas,
        namaKategoriTour: find2.namaKategoriTour,
        idKategoriTour: find2.id,
        presentaseKeuntungan: find2.presentaseKeuntungan,
      })
    }

    if(params == 'area'){
      const values = {...listRM}
      const find2 = props.areawisata.find((x) => {
        return x.id == e 
      });

      setDatas({
        ...datas,
        namaArea: find2.namaArea,
        idAreaWisata: find2.id,
      })

      // const list = [];
      //   props.rumahMakan.forEach((rm) => {
      //     console.log('rm', rm)
      //     if(rm.idAreaWisata == find2.id){
      //       console.log('rm2', rm)
      //       list.push(rm)
      //     } 
      //   })
      
      // values['list'] = list;
      // setListRM(values)
      // console.log('listRM1', listRM)
      // console.log('listRM2', list)
    }
  }

  const addFields = (e) => {
    console.log('cek', e)
   
    if(e == 'destinasi'){
      let object = {
        namaDestinasiWisata:'',
        idDestinasiWisata :'',
        biaya:'',
        qty:'',
        hari:'',
        harga:'',
        jumlah:'',
      }
      setFormDestinasi([...formDestinasi, object]);
    }
    if(e == 'penginapan'){
      let object = {
        namaPenginapan:'',
        idPenginapan:'',
        biaya:'',
        jenisKamar:[],
        qty:'',
        hari:'',
        harga:'',
        jumlah:'',
      }
      setFormPenginapan([...formPenginapan, object]);
    }
    if(e == 'rm'){
      let object = {
        namaRM:'',
        idRM:'',
        biaya:'',
        menuRM:[],
        qty:'',
        hari:'',
        harga:'',
        jumlah:'',
      }
      setFormRM([...formRM, object]);
    }
    if(e == 'transportasi'){
      let object = {
        namaTransportasi:'',
        idTransportasi:'',
        biaya:'',
        nama:[],
        qty:'',
        hari:'',
        harga:'',
        jumlah:'',  
      }
      setFormTransport([...formTransport, object]);
    }
    if(e == 'fasilitas'){
      let object = {
        ketFasilitas:'',
        idFasilitasTour :'',
        biayaFasilitas:'',
        qty:'',
        hari:'',
        harga:'',
        jumlah:'',
      }
      setFormFasilitas([
        ...formFasilitas,
        object
      ]);
    }
    if(e == 'crew'){
      let object = {
        ketCrewOperasional:'',
        idCrewOperasional :'',
        biayaCrewOperasional:'',
        qtyTcrew:'',
        jmlHariTcrew:'',
        hargaTcrew:'',
        jumlahTcrew:'',
      }
      setFormCrew([
        ...formCrew,
        object
      ]);
    }
    if(e == 'event'){
      let object = {
        ketDataEvent:'',
        idDataEvent:'',
        biayaDataEvent:'',
        qty:'',
        hari:'',
        harga:'',
        jumlah:'',
      }
      setFormEvent([
        ...formEvent,
        object
      ]);
    }
    if(e == 'bonus'){
      let object = {
        ketDataBonus:'',
        idDataBonus:'',
        biayaDataBonus:'',
        qty:'',
        hari:'',
        harga:'',
        jumlah:'',
      }
      setFormBonus([
        ...formBonus,
        object
      ]);
    }
  };

  const find = (e, index, params) => {
    console.log('value', e.target.value)
    console.log('name', e.target.name)
    console.log('index', index)
    console.log('params', params)
    
    if(params == 'destinasi'){
      const values = [...formDestinasi]
      if(e.target.name == 'namaDestinasiWisata'){
        // alert(1)
        const find2 = props.destinasi.find((x) => {
          return x.id == e.target.value 
        });
        const find3 = formDestinasi.find((x, key) => {
          console.log('find index', key)
          return key == index 
        });
        const list = [];
        // const list = '';
        props.detailDestinasi.forEach((lb) => {
          if(lb.idDestinasiWisata == e.target.value){
            if(datas.tipeDurasi == 'weekend'){
              console.log('weekend')
              list.push(lb.tiketMasukWeekend)
            }else{
              console.log('weekday')
              list.push(lb.tiketMasukWeekday)
            }
            console.log('cek lb', lb)
          }
        })
        console.log('list', list)
        console.log('find2', find2)
        console.log('find3', find3)
        values[index]['namaDestinasiWisata'] = find2.namaDestinasiWisata,
        values[index]['idDestinasiWisata'] = find2.id,
        values[index]['biaya'] = parseInt(list[0]),
        values[index]['harga'] = parseInt(list[0]),
        setFormDestinasi(values) 
        values[index]['jumlah'] = parseInt(find3.qty) * parseInt(find3.hari) * parseInt(find3.harga)
        setFormDestinasi(values)
        console.log('values', values)
      }else{
        // alert(2)
        const find2 = formDestinasi.find((x, key) => {
          console.log('finde index', key)
          return key == index 
        });
        console.log('find22', find2)
        values[index][e.target.name] = parseInt(e.target.value),
        setFormDestinasi(values)
        values[index]['jumlah'] = parseInt(find2.qty) * parseInt(find2.hari) * parseInt(find2.harga)
        setFormDestinasi(values)
      }
    }

    if(params == 'transportasi'){
      const values = [...formTransport]
      if(e.target.name == 'transportasi'){
        const find2 = props.detaiTransportasi.find((x) => {
          return x.id == e.target.value 
        });
        const find3 = formTransport.find((x, key) => {
          console.log('find index', key)
          return key == index 
        });
        const list = [];
        // const list = '';
        props.detaiTransportasi.forEach((lb) => {
          console.log('cek lb1', lb)
          if(lb.idTransportasi == find2.idTransportasi){
            if(datas.namaArea != 'Bandung'){
              if(datas.tipeDurasi == 'weekend'){
                console.log('weekend')
                list.push(lb.hargaSewaWeekendLuarKota)
              }else{
                console.log('weekday')
                list.push(lb.hargaSewaWeekdayLuarKota)
              }
            }else{
              if(datas.tipeDurasi == 'weekend'){
                console.log('weekend')
                list.push(lb.hargaSewaWeekendDalamKota)
              }else{
                console.log('weekday')
                list.push(lb.hargaSewaWeekdayDalamKota)
              }
            }
            console.log('cek lb2', lb)
          }
        })

        console.log('list', list)
        console.log('find2', find2)
        console.log('find3', find3)
        values[index]['namaTransportasi'] = find2.nama,
        values[index]['idTransportasi'] = find2.idTransportasi,
        values[index]['biaya'] = parseInt(list[0]),
        values[index]['harga'] = parseInt(list[0]),
        setFormTransport(values) 
        values[index]['jumlah'] = parseInt(find3.qty) * parseInt(find3.hari) * parseInt(find3.harga)
        setFormTransport(values)
        console.log('values', values)
      }else{
        const find2 = formTransport.find((x, key) => {
          console.log('finde index', key)
          return key == index 
        });
        console.log('find', find2)
        values[index][e.target.name] = parseInt(e.target.value),
        setFormTransport(values)
        values[index]['jumlah'] = parseInt(find2.qty) * parseInt(find2.hari) * parseInt(find2.harga)
        setFormTransport(values)
      }
    }

    if(params == 'penginapan'){
      const values = [...formPenginapan]
      if(e.target.name == 'jenisKamar'){
        const find2 = props.detailPenginapan.find((x) => {
          return x.id == e.target.value 
        });
        const find3 = formPenginapan.find((x, key) => {
          console.log('find index', key)
          return key == index 
        });
        const list = [];
        // const list = '';
        props.detailPenginapan.forEach((lb) => {
          console.log('cek lb1', lb)
          if(lb.idPenginapan == find2.idPenginapan){
            if(lb.id == e.target.value){
              if(datas.tipeDurasi == 'weekend'){
                console.log('weekend')
                list.push(lb.hargaSewaWeekendPerKamar)
              }else{
                console.log('weekday')
                list.push(lb.hargaSewaWeekdayPerKamar)
              }
            }
            console.log('cek lb2', lb)
          }
        })

        console.log('list', list)
        console.log('find2', find2)
        console.log('find3', find3)
        values[index]['namaPenginapan'] = find2.namaJenisKamar,
        values[index]['idPenginapan'] = find2.idPenginapan,
        values[index]['biaya'] = parseInt(list[0]),
        values[index]['harga'] = parseInt(list[0]),
        setFormPenginapan(values) 
        values[index]['jumlah'] = parseInt(find3.qty) * parseInt(find3.hari) * parseInt(find3.harga)
        setFormPenginapan(values)
        console.log('values', values)
      }else{
        const find2 = formPenginapan.find((x, key) => {
          console.log('finde index', key)
          return key == index 
        });
        console.log('find', find2)
        values[index][e.target.name] = parseInt(e.target.value),
        setFormPenginapan(values)
        values[index]['jumlah'] = parseInt(find2.qty) * parseInt(find2.hari) * parseInt(find2.harga)
        setFormPenginapan(values)
      }
    }

    if(params == 'rm'){
      const values = [...formRM]
      if(e.target.name == 'namaRumahMakan'){
        const find2 = props.detailRM.find((x) => {
          return x.id == e.target.value 
        });
        const find3 = formRM.find((x, key) => {
          console.log('find index', key)
          return key == index 
        });

        const list = [];
        // const list = '';
        props.detailRM.forEach((lb) => {
          console.log('cek lb1', lb)
          if(lb.idRM == find2.idRM){
            if(lb.id == e.target.value){
              list.push(lb.hargaMenu)
            }
            console.log('cek lb2', lb)
          }
        })

        console.log('list', list)
        console.log('find2', find2)
        console.log('find3', find3)
        values[index]['namaRM'] = find2.namaMenu,
        values[index]['idRM'] = find2.idRM,
        values[index]['biaya'] = parseInt(list[0]),
        values[index]['harga'] = parseInt(list[0]),
        setFormRM(values) 
        values[index]['jumlah'] = parseInt(find3.qty) * parseInt(find3.hari) * parseInt(find3.harga)
        setFormRM(values)
        console.log('values', values)
      }else{
        const find2 = formRM.find((x, key) => {
          console.log('finde index', key)
          return key == index 
        });
        console.log('find', find2)
        values[index][e.target.name] = parseInt(e.target.value),
        setFormRM(values)
        values[index]['jumlah'] = parseInt(find2.qty) * parseInt(find2.hari) * parseInt(find2.harga)
        setFormRM(values)
      }
    }

    if(params == 'fasilitas'){
      const values = [...formFasilitas]
      if(e.target.name == 'ketFasilitas'){
        const find2 = props.fasilitasTour.find((x) => {
          return x.id == e.target.value 
        });
        const find3 = formFasilitas.find((x, key) => {
          console.log('find index', key)
          return key == index 
        });
        console.log('find', find2)
        values[index]['ketFasilitas'] = find2.ketFasilitas,
        values[index]['idFasilitasTour'] = find2.id,
        values[index]['biayaFasilitas'] = find2.biayaFasilitas,
        values[index]['harga'] = find2.biayaFasilitas,
        setFormFasilitas(values) 
        values[index]['jumlah'] = parseInt(find3.qty) * parseInt(find3.hari) * parseInt(find3.harga)
        setFormFasilitas(values)
        console.log('values', values)
      }else{
        const find2 = formFasilitas.find((x, key) => {
          console.log('finde index', key)
          return key == index 
        });
        console.log('find22', find2)
        values[index][e.target.name] = parseInt(e.target.value),
        setFormFasilitas(values)
        values[index]['jumlah'] = parseInt(find2.qty) * parseInt(find2.hari) * parseInt(find2.harga)
        setFormFasilitas(values)
      }
    }

    if(params == 'crew'){
      const values = [...formCrew]
      if(e.target.name == 'ketCrewOperasional'){
        const find2 = props.crewOperasional.find((x) => {
          return x.idCrewOperasional == e.target.value 
        });
        const find3 = formCrew.find((x, key) => {
          console.log('find index', key)
          return key == index 
        });
        console.log('find', find2)
        console.log('find3', find3)
        values[index]['ketCrewOperasional'] = find2.ketCrewOperasional,
        values[index]['idCrewOperasional'] = find2.idCrewOperasional,
        values[index]['biayaCrewOperasional'] = find2.biayaCrewOperasional,
        values[index]['hargaTcrew'] = find2.biayaCrewOperasional,
        setFormCrew(values) 
        values[index]['jumlahTcrew'] = parseInt(find3.qtyTcrew) * parseInt(find3.jmlHariTcrew) * parseInt(find3.hargaTcrew)
        setFormCrew(values)
        console.log('values', values)
      }else{
        const find2 = formCrew.find((x, key) => {
          console.log('finde index', key)
          return key == index 
        });
        console.log('find', find2)
        values[index][e.target.name] = parseInt(e.target.value),
        setFormCrew(values)
        values[index]['jumlahTcrew'] = parseInt(find2.qtyTcrew) * parseInt(find2.jmlHariTcrew) * parseInt(find2.hargaTcrew)
        setFormCrew(values)
      }
    }

    if(params == 'event'){
      const values = [...formEvent]
      if(e.target.name == 'ketDataEvent'){
        const find2 = props.dataEvent.find((x) => {
          return x.id == e.target.value 
        });
        const find3 = formEvent.find((x, key) => {
          console.log('finde idnex', key)
          return key == index 
        });
        console.log('find', find2)
        values[index]['ketDataEvent'] = find2.ketDataEvent,
        values[index]['idDataEvent'] = find2.id,
        values[index]['biayaDataEvent'] = find2.biayaDataEvent,
        values[index]['harga'] = find2.biayaDataEvent,
        setFormEvent(values) 
        values[index]['jumlah'] = parseInt(find3.qty) * parseInt(find3.hari) * parseInt(find3.harga)
        setFormEvent(values)
        console.log('values', values)
      }else{
        const find2 = formEvent.find((x, key) => {
          console.log('finde idnex', key)
          return key == index 
        });
        console.log('find', find2)
        values[index][e.target.name] = parseInt(e.target.value),
        setFormEvent(values)
        values[index]['jumlah'] = parseInt(find2.qty) * parseInt(find2.hari) * parseInt(find2.harga)
        setFormEvent(values)
      }
    }

    if(params == 'bonus'){
      const values = [...formBonus]
      if(e.target.name == 'ketDataBonus'){
        const find2 = props.dataBonus.find((x) => {
          return x.id == e.target.value 
        });
        const find3 = formBonus.find((x, key) => {
          console.log('finde idnex', key)
          return key == index 
        });
        console.log('find', find2)
        values[index]['ketDataBonus'] = find2.ketDataBonus,
        values[index]['idDataBonus'] = find2.id,
        values[index]['biayaDataBonus'] = find2.biayaDataBonus,
        values[index]['harga'] = find2.biayaDataBonus,
        setFormBonus(values) 
        values[index]['jumlah'] = parseInt(find3.qty) * parseInt(find3.hari) * parseInt(find3.harga)
        setFormBonus(values)
        console.log('values', values)
      }else{
        const find2 = formBonus.find((x, key) => {
          console.log('finde idnex', key)
          return key == index 
        });
        console.log('find', find2)
        values[index][e.target.name] = parseInt(e.target.value),
        setFormBonus(values)
        values[index]['jumlah'] = parseInt(find2.qty) * parseInt(find2.hari) * parseInt(find2.harga)
        setFormBonus(values)
      }
    }
  }

  const removeFields = (index,params) => { 
    console.log('index', index)
    console.log('params', params)
    if(params == 'destinasi'){
      let data = [...formDestinasi];
      data.splice(index, 1);
      setFormDestinasi(data);
    }
    if(params == 'penginapan'){
      let data = [...formPenginapan];
      data.splice(index, 1);
      setFormPenginapan(data);
    }
    if(params == 'rm'){
      let data = [...formRM];
      data.splice(index, 1);
      setFormRM(data);
    }
    if(params == 'transportasi'){
      let data = [...formTransport];
      data.splice(index, 1);
      setFormTransport(data);
    }
    if(params == 'fasilitas'){
      let data = [...formFasilitas];
      data.splice(index, 1);
      setFormFasilitas(data);
    }
    if(params == 'crew'){
      let data = [...formCrew];
      data.splice(index, 1);
      setFormCrew(data);
    }
    if(params == 'event'){
      let data = [...formEvent];
      data.splice(index, 1);
      setFormEvent(data);
    }
    if(params == 'bonus'){
      let data = [...formBonus];
      data.splice(index, 1);
      setFormBonus(data);
    }
  };

  const handleSubmit = () => {
    const JumlahDestinasi = formDestinasi.reduce((sum, item) => sum + parseInt(item.jumlah), 0);
    const JumlahTransportasi = formTransport.reduce((sum, item) => sum + parseInt(item.jumlah), 0);
    const JumlahPenginapan = formPenginapan.reduce((sum, item) => sum + parseInt(item.jumlah), 0);
    const JumlahRM = formRM.reduce((sum, item) => sum + parseInt(item.jumlah), 0);
    const JumlahEvent = formEvent.reduce((sum, item) => sum + parseInt(item.jumlah), 0);
    const JumlahBonus = formBonus.reduce((sum, item) => sum + parseInt(item.jumlah), 0);
    const JumlahCrew = formCrew.reduce((sum, item) => sum + parseInt(item.jumlah), 0);
    const JumlahFasilitas = formFasilitas.reduce((sum, item) => sum + parseInt(item.jumlah), 0);
    const productionPrice = JumlahDestinasi + JumlahTransportasi + JumlahPenginapan + JumlahRM + JumlahEvent + JumlahBonus + JumlahCrew + JumlahFasilitas;
    const paxPay = datas.totalOrang;
    const netPrice = parseInt(productionPrice / paxPay);
    const surcharge = parseInt(((netPrice / (100/100 - parseInt(datas.presentaseKeuntungan)/100))* 100/100) - netPrice);
    const sellingPrice = parseInt(netPrice + surcharge);
    const totalPrice = parseInt(sellingPrice * paxPay);
    const profit = parseInt(sellingPrice + parseInt(datas.feemarketing));
    const data = {
      quotationTour : datas,
      destinasi : formDestinasi,
      transport : formTransport,
      rm : formRM,
      penginapan : formPenginapan,
      event : formEvent,
      bonus : formBonus,
      crew : formCrew,
      fasilitas : formFasilitas,
      productionPrice : productionPrice,
      paxPay : paxPay,
      nettPrice : netPrice,
      surcharge : surcharge,
      sellingPrice : sellingPrice,
      totalPrice : totalPrice,
      profit : profit,
      status : 'menunggu',
      created_at: new Date(),
      updated_at: new Date(),
    }
    Inertia.post('/quotation/qhistory/update', data)

    console.log('JumlahDestinasi',JumlahDestinasi);
    console.log('JumlahTransportasi',JumlahTransportasi);
    console.log('JumlahPenginapan',JumlahPenginapan);
    console.log('JumlahRM',JumlahRM);
    console.log('JumlahEvent',JumlahEvent);
    console.log('JumlahBonus',JumlahBonus);
    console.log('JumlahCrew',JumlahCrew);
    console.log('JumlahFasilitas',JumlahFasilitas);
    console.log('productionPrice',productionPrice);
    console.log('paxPay',paxPay);
    console.log('netPrice',netPrice);
    console.log('surcharge',surcharge);
    console.log('sellingPrice',sellingPrice);
    console.log('totalPrice',totalPrice);
    console.log('data', data)
  }

  useEffect(() => {
    // handleDateChange(props.quotationTransaksi.quotation.planWaktuPelaksanaan);
  }, []);

  return (
    <div className="min-h-screen bg-abu ">
      {/* Content */}
      <div className="ml-6">
        <a>Quotation Manual</a>
      </div>
      <div className="flex m-6 mt-2 mb-3">
        <a className="text-2xl font-bold text-black">Quotation Manual</a>
      </div>
      <div className="relative bg-white shadow-xl m-6 mt-3 md:max-xl:flex ring-1 ring-gray-900/5">
        <div className="p-4 bg-kuning border-b border-gray-200"></div>
        <div className="bg-white border-b border-gray-200">
          <div className="flex flex-col px-11 pt-6 pb-8 ">

            {/* Nama Program Quotation */}
            <div className="mb-10">
              <a className="mr-5 mt-2 text-black font-bold mb-4">Program Quotation</a>
              <div className="mb-5 mt-2 bg-gray-200 border-b border-gray-200"></div>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="sm:col-span-2">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nama Project</label>
                      <input 
                      type="text" 
                      name="name" 
                      id="name" 
                      className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={datas.namaproject}
                      onChange={(value) => 
                        setDatas({
                        ...datas,
                        namaproject: value.target.value,
                      })}
                      />
                  </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 mt-5">
                <div className="">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nama Klien</label>
                      <input 
                      type="text" 
                      name="name" 
                      id="name" 
                      className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={datas.namaKlien}
                      onChange={(value) => 
                        setDatas({
                        ...datas,
                        namaKlien: value.target.value,
                      })}
                      />
                  </div>
                  <div className="">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Jenis Klien</label>
                      <select 
                        placeholder="Jenis Klien" 
                        defaultValue="default"
                        className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        // onChange={(e) => 
                        //   setDatas({
                        //   ...datas,
                        //   idUserSales : e.target.value
                        //   })
                        // }
                        onChange={(e) => {
                          datasFind(e.target.value,'jenisKlien')
                        }}
                      >
                        <option value="default">-{datas.jenisKlien}-</option>
                        {props.jenisKlien.map((us, index) => {
                          return (
                            <option 
                              value={us.id} 
                              key={us.id}
                            >
                            {us.namaJenisKlien}
                            </option>
                        )})}
                      </select>
                  </div>
              </div>
            </div>

            {/* Penanggung Jawab Project */}
            <div className="mb-10">
              <a className="mr-5 mt-2 text-black font-bold mb-4">Penanggung Jawab Project</a>
              <div className="mb-5 mt-2 bg-gray-200 border-b border-gray-200"></div>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                  <div className="w-full">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"> Program</label>
                      <input 
                      type="text" 
                      name="brand" 
                      id="brand" 
                      className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={datas.namaProgram}
                      // onChange={(value) => 
                      //   setDatas({
                      //   ...datas,
                      //   namaProgram: value.target.value,
                      // })}
                      disabled readOnly
                      />
                  </div>
                  <div className="w-full">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Sales</label>
                      <select 
                        placeholder="Jenis Klien" 
                        defaultValue="default"
                        className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        // onChange={(e) => 
                        //   setDatas({
                        //   ...datas,
                        //   idUserSales : e.target.value
                        //   })
                        // }
                        onChange={(e) => {
                          datasFind(e.target.value, 'sales')
                        }}
                      >
                        <option value="default">-{datas.namaSales}-</option>
                        {/* {props.usersales.map((us, index) => {
                          return (
                            <option 
                              value={us.id} 
                              key={us.id}
                            >
                            {us.namaSales}
                            </option>
                        )})} */}
                      </select>
                  </div>
              </div>
            </div>

            {/* Data Project */}
            <div className="mb-10">
              <a className="mr-5 mt-2 text-black font-bold mb-4">Data Project</a>
              <div className="mb-5 mt-2 bg-gray-200 border-b border-gray-200"></div>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Kategori</label>
                      <select 
                        placeholder="Jenis Klien" 
                        defaultValue="default"
                        className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        onChange={(e) => {
                          datasFind(e.target.value, 'kategori')
                        }}
                      >
                        <option value="default">-{datas.namaKategoriTour}-</option>
                        {props.kategoriwisata.map((kw, index) => {
                          return (
                            <option 
                              value={kw.id} 
                              key={kw.id}
                            >
                            {kw.namaKategoriTour}
                            </option>
                        )})}
                      </select>
                  </div>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Area Wisata</label>
                      <select 
                        placeholder="Jenis Klien" 
                        defaultValue="default"
                        className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        // onChange={set}
                        onChange={(e) => {
                          datasFind(e.target.value, 'area')
                        }}
                      >
                        <option value="default">-{datas.namaArea}-</option>
                        {props.areawisata.map((ar, index) => {
                          return (
                            <option 
                              value={ar.id} 
                              key={ar.id}
                            >
                            {ar.namaArea}
                            </option>
                        )})}
                      </select>
                  </div>
                  <div className="w-full">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Jumlah Orang (QTY)</label>
                      <input 
                      type="number" 
                      name="brand" 
                      id="brand" 
                      className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={datas.jumlahOrang}
                      onChange={(value) => 
                        setDatas({
                        ...datas,
                        jumlahOrang: parseInt(value.target.value),
                        totalOrang: parseInt(value.target.value)
                      })}
                      />
                  </div>
                  <div className="w-full">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Jumlah Bebas Biaya (FOC)</label>
                      <input 
                      type="number" 
                      name="brand" 
                      id="brand" 
                      className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={datas.foc}
                      onChange={(value) => 
                        setDatas({
                        ...datas,
                        foc: parseInt(value.target.value),
                        totalOrang: parseInt(datas.jumlahOrang) + parseInt(value.target.value)
                      })}
                      />
                  </div>
                  <div className="w-full">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Total orang</label>
                      <input 
                      type="text" 
                      name="brand" 
                      id="brand" 
                      className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={datas.jumlahOrang + datas.foc}
                      onChange={(value) => 
                        setDatas({
                        ...datas,
                        totalOrang: value.target.value,
                      })}
                      />
                  </div>
                  <div className="w-full">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Plan Waktu Pelaksanan</label>
                      <input 
                         type="date" 
                         name="brand" 
                         id="brand"
                         value={datas.planWaktuPelaksanaan} 
                         className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                         onChange={(e) => 
                           handleDateChange(e)
                         }
                         />
                      {/* {datas.planWaktuPelaksanaan !== '' ? (
                         <input 
                         type="date" 
                         name="brand" 
                         id="brand"
                         value={datas.planWaktuPelaksanaan} 
                         className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                         onChange={(value) => 
                           handleDateChange(value)
                         }
                         />
                      ) : (
                        <input 
                        type="date" 
                        name="brand" 
                        id="brand"
                        value={selectedDate} 
                        className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        onChange={(value) => 
                          handleDateChange(value)
                        }
                        />
                      )} */}
                  </div>
                  <div className="w-full">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Durasi Pelaksanaan</label>
                      <input 
                      type="text" 
                      name="brand" 
                      id="brand" 
                      className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={datas.durasiproject}
                      onChange={(value) => 
                        setDatas({
                        ...datas,
                        durasiproject: value.target.value,
                      })}
                      />
                  </div>
                  <div className="w-full">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Fee Marketing</label>
                      <input 
                      type="text" 
                      name="brand" 
                      id="brand" 
                      className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={datas.feemarketing}
                      onChange={(value) => 
                        setDatas({
                        ...datas,
                        feemarketing: value.target.value,
                      })}
                      />
                  </div>
                  <div className="w-full">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Persentase Keuntungan</label>
                      <input 
                      type="text" 
                      name="brand" 
                      id="brand" 
                      className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={datas.presentaseKeuntungan}
                      onChange={(value) => 
                        setDatas({
                        ...datas,
                        presentaseKeuntungan: value.target.value,
                      })}
                      />
                  </div>
              </div>
            </div>

            {/* List Item Project */}
            <div className="mb-10">
              <a className="mr-5 mt-2 text-black font-bold mb-4">List Item Project</a>
              <div className="mb-5 mt-2 bg-gray-200 border-b border-gray-200"></div>

              {/* Data Destinasi */}
              {formDestinasi.map((ds, index) => {
                 if(ds.keterangan){
                  const detailHarga = ds.destinasi.detaildw.find((dtr) => {
                    return dtr.jenisPeserta === datas.jenisKlien;
                  });

                  // console.log('detail Harga', detailHarga)
                  if (detailHarga) {
                    return (
                      <div key={index}>
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-4 mt-3">
                          <div className="">
                            <label name="destinasi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Destinasi Wisata</label>
                            <select 
                              name="namaDestinasiWisata"
                              placeholder="Jenis Klien" 
                              defaultValue="default"
                              className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              // onChange={set}
                              onChange={(e) => {
                                find(e, index, 'destinasi')
                              }}
                            >
                              <option 
                              value="default"
                              >-{ds.destinasi.namaDestinasiWisata}-</option>
                              {props.destinasi.map((ds, index) => {
                                return (
                                  <option 
                                    value={ds.id} 
                                    key={ds.id}
                                    // name="ketDataEvent"
                                  >
                                  {ds.namaDestinasiWisata}
                                  </option>
                              )})}
                            </select>
                          </div>
                          <div className="">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Harga</label>
                            {ds.biaya !== undefined ? (
                              <input 
                              key={index}
                              type="number" 
                              name="biaya" 
                              id="brand" 
                              className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              value={ds.biaya}
                              disabled readOnly
                              />
                            ) : (
                              datas.tipeDurasi === 'weekend' ? (
                              <input 
                                key={index}
                                type="number" 
                                name="biayaFasilitas" 
                                id="brand" 
                                className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                value={detailHarga.tiketMasukWeekend}
                                disabled readOnly
                              />
                              ) : (
                                <input 
                                key={index}
                                type="number" 
                                name="biayaFasilitas" 
                                id="brand" 
                                className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                value={detailHarga.tiketMasukWeekday}
                                disabled readOnly
                              />
                              )
                            )}
                          </div>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-5 mt-3">
                          <div className="">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Quantity</label>
                            <input 
                              type="number" 
                              name="qty" 
                              id="brand" 
                              value={ds.qty}
                              className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              onChange={(e) => {
                                find(e, index, 'destinasi')
                              }}
                            />
                          </div>
                          <div className="">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Hari</label>
                            <input 
                              type="number" 
                              name="hari" 
                              id="brand" 
                              value={ds.hari}
                              className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              onChange={(e) => {
                                find(e, index, 'destinasi')
                              }}
                            />
                          </div>
                          <div className="">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Harga Satuan</label>
                            <input 
                              key={index}
                              type="number" 
                              name="harga" 
                              id="brand" 
                              className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              value={ds.harga}
                              onChange={(e) => {
                                find(e, index, 'destinasi')
                              }}
                            />
                          </div>
                          <div className="">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Jumlah</label>
                            <input 
                              type="number" 
                              name="jumlah" 
                              id="brand" 
                              value={ds.jumlah}
                              className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              onChange={(e) => {
                                find(e, index, 'destinasi')
                              }}
                            />
                          </div>
                          <div >
                            <div className="">
                              { formDestinasi.length!==1 &&
                                <button
                                  className="btn btn-warning  text-white border-0 btn-md mt-6 mr-3"
                                  onClick={() => {
                                    removeFields(index, "destinasi")
                                  }}
                                >
                                remove
                                </button>
                              }
                              { formDestinasi.length-1==index &&
                                <button
                                className="btn bg-green-600 text-white border-0 btn-md mt-6 px-7"
                                onClick={() => {
                                  addFields("destinasi")
                                  }}
                                >
                                add
                                </button>
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  }
                 } else {
                  return (
                    <div key={index}>
                      <div className="grid gap-4 sm:grid-cols-2 sm:gap-4 mt-3">
                        <div className="">
                          <label name="destinasi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Destinasi Wisata</label>
                          <select 
                            name="namaDestinasiWisata"
                            placeholder="Jenis Klien" 
                            defaultValue="default"
                            className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            // onChange={set}
                            onChange={(e) => {
                              find(e, index, 'destinasi')
                            }}
                          >
                            <option 
                            value="default"
                            >--</option>
                            {props.destinasi.map((ds, index) => {
                              if (ds.idAreaWisata === datas.idAreaWisata) {
                                return (
                                  <option 
                                    value={ds.idDestinasiWisata} 
                                    key={ds.id}
                                    // name="ketDataEvent"
                                  >
                                  {ds.namaDestinasiWisata}
                                  </option>
                                );
                              }
                             })}
                          </select>
                        </div>
                        <div className="">
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Harga</label>
                          <input 
                            key={index}
                            type="number" 
                            name="biaya" 
                            id="brand" 
                            className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            value={ds.biaya}
                            disabled readOnly
                            />
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-5 mt-3">
                        <div className="">
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Quantity</label>
                          <input 
                            type="number" 
                            name="qty" 
                            id="brand" 
                            value={ds.qty}
                            className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            onChange={(e) => {
                              find(e, index, 'destinasi')
                            }}
                          />
                        </div>
                        <div className="">
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Hari</label>
                          <input 
                            type="number" 
                            name="hari" 
                            id="brand" 
                            value={ds.hari}
                            className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            onChange={(e) => {
                              find(e, index, 'destinasi')
                            }}
                          />
                        </div>
                        <div className="">
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Harga Satuan</label>
                          <input 
                            key={index}
                            type="number" 
                            name="harga" 
                            id="brand" 
                            className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            value={ds.harga}
                            onChange={(e) => {
                              find(e, index, 'destinasi')
                            }}
                          />
                        </div>
                        <div className="">
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Jumlah</label>
                          <input 
                            type="number" 
                            name="jumlah" 
                            id="brand" 
                            value={ds.jumlah}
                            className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            onChange={(e) => {
                              find(e, index, 'destinasi')
                            }}
                          />
                        </div>
                        <div >
                          <div className="">
                            { formDestinasi.length!==1 &&
                              <button
                                className="btn btn-warning  text-white border-0 btn-md mt-6 mr-3"
                                onClick={() => {
                                  removeFields(index, "destinasi")
                                }}
                              >
                              remove
                              </button>
                            }
                            { formDestinasi.length-1==index &&
                              <button
                              className="btn bg-green-600 text-white border-0 btn-md mt-6 px-7"
                              onClick={() => {
                                addFields("destinasi")
                                }}
                              >
                              add
                              </button>
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                 }
              })}

              {/* Data Transportasi */}
              <div className="mb-5 mt-2 bg-gray-200 border-b border-gray-200 mt-10"></div>
              {formTransport.map((ds, index) => {
                if(ds.keterangan){
                  const detailHarga = ds.transportasi.detail_transportasi.find((dtr) => {
                    return dtr.nama === ds.keterangan;
                  });
                  
                  if(detailHarga) {
                    return (
                      <div key={index}>
                        <div className="grid gap-4 sm:grid-cols-3 sm:gap-4 mt-3">
                          <div className="">
                            <label name="destinasi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Vendor Transportasi</label>
                            <select 
                              name="namaTransportasi"
                              placeholder="Jenis Klien" 
                              defaultValue="default"
                              className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              // onChange={set}
                              onChange={(e) => {
                                findList(e, index, 'transportasi')
                              }}
                            >
                              <option 
                              value="default"
                              >-{ds.transportasi.namaTransportasi}-</option>
                              {props.transportasi.map((ds, index) => {
                                return (
                                  <option 
                                    value={ds.id} 
                                    key={ds.id}
                                    // name="ketDataEvent"
                                  >
                                  {ds.namaTransportasi}
                                  </option>
                              )})}
                            </select>
                          </div>
                          <div className="">
                            <label name="destinasi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nama Transportasi</label>
                            <select 
                              name="transportasi"
                              placeholder="Jenis Klien" 
                              defaultValue="default"
                              className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              // onChange={set}
                              onChange={(e) => {
                                find(e, index, 'transportasi')
                              }}
                            >
                              <option 
                              value="default"
                              >-{ds.keterangan}-</option>
                              {ds.transportasi.detail_transportasi.map((ds, index) => {
                                return (
                                  <option 
                                    value={ds.id} 
                                    key={ds.id}
                                    // name="ketDataEvent"
                                  >
                                  {ds.nama}
                                  </option>
                              )})}
                            </select>
                          </div>
                          <div className="">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Harga</label>
                            {ds.biaya !== undefined ? (
                            <input 
                              key={index}
                              type="number" 
                              name="biaya" 
                              id="brand" 
                              className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              value={ds.biaya}
                              disabled readOnly
                            />
                          ) : (
                            datas.namaArea != 'Bandung' ? (
                              datas.tipeDurasi === 'weekend' ? (
                                <input 
                                  key={index}
                                  type="number" 
                                  name="biayaFasilitas" 
                                  id="brand" 
                                  className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                  value={detailHarga.hargaSewaWeekendLuarKota}
                                  disabled readOnly
                                />
                              ) : (
                                <input 
                                  key={index}
                                  type="number" 
                                  name="biayaFasilitas" 
                                  id="brand" 
                                  className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                  value={detailHarga.hargaSewaWeekdayLuarKota}
                                  disabled readOnly
                                />
                              )
                            ) : (
                              datas.tipeDurasi === 'weekend' ? (
                                <input 
                                  key={index}
                                  type="number" 
                                  name="biayaFasilitas" 
                                  id="brand" 
                                  className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                  value={detailHarga.hargaSewaWeekendDalamKota}
                                  disabled readOnly
                                />
                              ) : (
                                <input 
                                  key={index}
                                  type="number" 
                                  name="biayaFasilitas" 
                                  id="brand" 
                                  className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                  value={detailHarga.hargaSewaWeekdayDalamKota}
                                  disabled readOnly
                                />
                              )
                            )
                            
                          )}
                          </div>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-5 mt-3">
                          <div className="">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Quantity</label>
                            <input 
                              type="number" 
                              name="qty" 
                              id="brand" 
                              value={ds.qty}
                              className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              onChange={(e) => {
                                find(e, index, 'transportasi')
                              }}
                            />
                          </div>
                          <div className="">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Hari</label>
                            <input 
                              type="number" 
                              name="hari" 
                              id="brand" 
                              value={ds.hari}
                              className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              onChange={(e) => {
                                find(e, index, 'transportasi')
                              }}
                            />
                          </div>
                          <div className="">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Harga Satuan</label>
                            <input 
                              key={index}
                              type="number" 
                              name="harga" 
                              id="brand" 
                              className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              value={ds.harga}
                              onChange={(e) => {
                                find(e, index, 'transportasi')
                              }}
                            />
                          </div>
                          <div className="">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Jumlah</label>
                            <input 
                              type="number" 
                              name="jumlah" 
                              id="brand" 
                              value={ds.jumlah}
                              className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              onChange={(e) => {
                                find(e, index, 'transportasi')
                              }}
                            />
                          </div>
                          <div >
                            <div className="">
                              { formTransport.length!==1 &&
                                <button
                                  className="btn btn-warning  text-white border-0 btn-md mt-6 mr-3"
                                  onClick={() => {
                                    removeFields(index, "transportasi")
                                  }}
                                >
                                remove
                                </button>
                              }
                              { formTransport.length-1==index &&
                                <button
                                className="btn bg-green-600 text-white border-0 btn-md mt-6 px-7"
                                onClick={() => {
                                  addFields("transportasi")
                                  }}
                                >
                                add
                                </button>
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  }
                } else {
                  return (
                    <div key={index}>
                      <div className="grid gap-4 sm:grid-cols-3 sm:gap-4 mt-3">
                        <div className="">
                          <label name="destinasi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Vendor Transportasi</label>
                          <select 
                            name="namaTransportasi"
                            placeholder="Jenis Klien" 
                            defaultValue="default"
                            className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            // onChange={set}
                            onChange={(e) => {
                              findList(e, index, 'transportasi')
                            }}
                          >
                            <option 
                            value="default"
                            >--</option>
                            {props.transportasi.map((ds, index) => {
                              return (
                                <option 
                                  value={ds.id} 
                                  key={ds.id}
                                  // name="ketDataEvent"
                                >
                                {ds.namaTransportasi}
                                </option>
                            )})}
                          </select>
                        </div>
                        <div className="">
                          <label name="destinasi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nama Transportasi</label>
                          <select 
                            name="transportasi"
                            placeholder="Jenis Klien" 
                            defaultValue="default"
                            className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            // onChange={set}
                            onChange={(e) => {
                              find(e, index, 'transportasi')
                            }}
                          >
                            <option 
                            value="default"
                            >--</option>
                            {/* {ds.nama.map((ds, index) => {
                              return (
                                <option 
                                  value={ds.id} 
                                  key={ds.id}
                                  // name="ketDataEvent"
                                >
                                {ds.nama}
                                </option>
                            )})} */}
                          </select>
                        </div>
                        <div className="">
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Harga</label>
                          <input 
                            key={index}
                            type="number" 
                            name="biaya" 
                            id="brand" 
                            className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            value={ds.biaya}
                            disabled readOnly
                            />
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-5 mt-3">
                        <div className="">
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Quantity</label>
                          <input 
                            type="number" 
                            name="qty" 
                            id="brand" 
                            value={ds.qty}
                            className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            onChange={(e) => {
                              find(e, index, 'transportasi')
                            }}
                          />
                        </div>
                        <div className="">
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Hari</label>
                          <input 
                            type="number" 
                            name="hari" 
                            id="brand" 
                            value={ds.hari}
                            className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            onChange={(e) => {
                              find(e, index, 'transportasi')
                            }}
                          />
                        </div>
                        <div className="">
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Harga Satuan</label>
                          <input 
                            key={index}
                            type="number" 
                            name="harga" 
                            id="brand" 
                            className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            value={ds.harga}
                            onChange={(e) => {
                              find(e, index, 'transportasi')
                            }}
                          />
                        </div>
                        <div className="">
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Jumlah</label>
                          <input 
                            type="number" 
                            name="jumlah" 
                            id="brand" 
                            value={ds.jumlah}
                            className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            onChange={(e) => {
                              find(e, index, 'transportasi')
                            }}
                          />
                        </div>
                        <div >
                          <div className="">
                            { formTransport.length!==1 &&
                              <button
                                className="btn btn-warning  text-white border-0 btn-md mt-6 mr-3"
                                onClick={() => {
                                  removeFields(index, "transportasi")
                                }}
                              >
                              remove
                              </button>
                            }
                            { formTransport.length-1==index &&
                              <button
                              className="btn bg-green-600 text-white border-0 btn-md mt-6 px-7"
                              onClick={() => {
                                addFields("transportasi")
                                }}
                              >
                              add
                              </button>
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
              })}

              {/* Data Penginapan */}
              <div className="mb-5 mt-2 bg-gray-200 border-b border-gray-200 mt-10"></div>
              {formPenginapan.map((ds, index) => {
                if(ds.keterangan){
                const detailHarga = ds.penginapan.detail_penginapan.find((dtr) => {
                  return dtr.namaJenisKamar === ds.keterangan;
                });
                
                // console.log('detail Harga', detailHarga)
                if(detailHarga) {
                  return (
                    <div key={index}>
                      <div className="grid gap-4 sm:grid-cols-3 sm:gap-4 mt-3">
                        <div className="">
                          <label name="destinasi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Vendor Penginapan</label>
                          <select 
                            name="namaPenginapan"
                            placeholder="Jenis Klien" 
                            defaultValue="default"
                            className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            // onChange={set}
                            onChange={(e) => {
                              findList(e, index, 'penginapan')
                            }}
                          >
                            <option 
                            value="default"
                            >-{ds.penginapan.namaPenginapan}-</option>
                            {props.penginapan.map((ds, index) => {
                              return (
                                <option 
                                  value={ds.id} 
                                  key={ds.id}
                                  // name="ketDataEvent"
                                >
                                {ds.namaPenginapan}
                                </option>
                            )})}
                          </select>
                        </div>
                        <div className="">
                          <label name="destinasi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Jenis Kamar</label>
                          <select 
                            name="jenisKamar"
                            placeholder="Jenis Klien" 
                            defaultValue="default"
                            className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            // onChange={set}
                            onChange={(e) => {
                              find(e, index, 'penginapan')
                            }}
                          >
                            <option 
                            value="default"
                            >-{ds.keterangan}-</option>
                            {ds.penginapan.detail_penginapan.map((ds, index) => {
                              return (
                                <option 
                                  value={ds.id} 
                                  key={ds.id}
                                  // name="ketDataEvent"
                                >
                                {ds.namaJenisKamar}
                                </option>
                            )})}
                          </select>
                        </div>
                        <div className="">
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Harga</label>
                          {ds.biaya !== undefined ? (
                            <input 
                              key={index}
                              type="number" 
                              name="biaya" 
                              id="brand" 
                              className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              value={ds.biaya}
                              disabled readOnly
                            />
                          ) : (
                            datas.tipeDurasi === 'weekend' ? (
                              <input 
                                key={index}
                                type="number" 
                                name="biayaFasilitas" 
                                id="brand" 
                                className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                value={detailHarga.hargaSewaWeekendPerKamar}
                                disabled readOnly
                              />
                            ) : (
                              <input 
                                key={index}
                                type="number" 
                                name="biayaFasilitas" 
                                id="brand" 
                                className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                value={detailHarga.hargaSewaWeekdayPerKamar}
                                disabled readOnly
                              />
                            )
                          )}
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-5 mt-3">
                        <div className="">
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Quantity</label>
                          <input 
                            type="number" 
                            name="qty" 
                            id="brand" 
                            value={ds.qty}
                            className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            onChange={(e) => {
                              find(e, index, 'penginapan')
                            }}
                          />
                        </div>
                        <div className="">
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Hari</label>
                          <input 
                            type="number" 
                            name="hari" 
                            id="brand" 
                            value={ds.hari}
                            className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            onChange={(e) => {
                              find(e, index, 'penginapan')
                            }}
                          />
                        </div>
                        <div className="">
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Harga Satuan</label>
                          <input 
                            key={index}
                            type="number" 
                            name="harga" 
                            id="brand" 
                            className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            value={ds.harga}
                            onChange={(e) => {
                              find(e, index, 'penginapan')
                            }}
                          />
                        </div>
                        <div className="">
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Jumlah</label>
                          <input 
                            type="number" 
                            name="jumlah" 
                            id="brand" 
                            value={ds.jumlah}
                            className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            onChange={(e) => {
                              find(e, index, 'penginapan')
                            }}
                          />
                        </div>
                        <div >
                          <div className="">
                            { formPenginapan.length!==1 &&
                              <button
                                className="btn btn-warning  text-white border-0 btn-md mt-6 mr-3"
                                onClick={() => {
                                  removeFields(index, "penginapan")
                                }}
                              >
                              remove
                              </button>
                            }
                            { formPenginapan.length-1==index &&
                              <button
                              className="btn bg-green-600 text-white border-0 btn-md mt-6 px-7"
                              onClick={() => {
                                addFields("penginapan")
                                }}
                              >
                              add
                              </button>
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
              } else {
                return (
                  <div key={index}>
                    <div className="grid gap-4 sm:grid-cols-3 sm:gap-4 mt-3">
                      <div className="">
                        <label name="destinasi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Vendor Penginapan</label>
                        <select 
                          name="namaPenginapan"
                          placeholder="Jenis Klien" 
                          defaultValue="default"
                          className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          // onChange={set}
                          onChange={(e) => {
                            findList(e, index, 'penginapan')
                          }}
                        >
                          <option 
                          value="default"
                          >--</option>
                          {props.penginapan.map((ds, index) => {
                            return (
                              <option 
                                value={ds.id} 
                                key={ds.id}
                                // name="ketDataEvent"
                              >
                              {ds.namaPenginapan}
                              </option>
                          )})}
                        </select>
                      </div>
                      <div className="">
                        <label name="destinasi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Jenis Kamar</label>
                        <select 
                          name="jenisKamar"
                          placeholder="Jenis Klien" 
                          defaultValue="default"
                          className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          // onChange={set}
                          onChange={(e) => {
                            find(e, index, 'penginapan')
                          }}
                        >
                          <option 
                          value="default"
                          >--</option>
                          {/* {ds.jenisKamar.map((ds, index) => {
                            return (
                              <option 
                                value={ds.id} 
                                key={ds.id}
                                // name="ketDataEvent"
                              >
                              {ds.namaJenisKamar}
                              </option>
                          )})} */}
                        </select>
                      </div>
                      <div className="">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Harga</label>
                        <input 
                          key={index}
                          type="number" 
                          name="biaya" 
                          id="brand" 
                          className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          value={ds.biaya}
                          disabled readOnly
                          />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-5 mt-3">
                      <div className="">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Quantity</label>
                        <input 
                          type="number" 
                          name="qty" 
                          id="brand" 
                          value={ds.qty}
                          className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          onChange={(e) => {
                            find(e, index, 'penginapan')
                          }}
                        />
                      </div>
                      <div className="">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Hari</label>
                        <input 
                          type="number" 
                          name="hari" 
                          id="brand" 
                          value={ds.hari}
                          className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          onChange={(e) => {
                            find(e, index, 'penginapan')
                          }}
                        />
                      </div>
                      <div className="">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Harga Satuan</label>
                        <input 
                          key={index}
                          type="number" 
                          name="harga" 
                          id="brand" 
                          className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          value={ds.harga}
                          onChange={(e) => {
                            find(e, index, 'penginapan')
                          }}
                        />
                      </div>
                      <div className="">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Jumlah</label>
                        <input 
                          type="number" 
                          name="jumlah" 
                          id="brand" 
                          value={ds.jumlah}
                          className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          onChange={(e) => {
                            find(e, index, 'penginapan')
                          }}
                        />
                      </div>
                      <div >
                        <div className="">
                          { formPenginapan.length!==1 &&
                            <button
                              className="btn btn-warning  text-white border-0 btn-md mt-6 mr-3"
                              onClick={() => {
                                removeFields(index, "penginapan")
                              }}
                            >
                            remove
                            </button>
                          }
                          { formPenginapan.length-1==index &&
                            <button
                            className="btn bg-green-600 text-white border-0 btn-md mt-6 px-7"
                            onClick={() => {
                              addFields("penginapan")
                              }}
                            >
                            add
                            </button>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
              })}          

              {/* Data Rumah Makan */}
              <div className="mb-5 mt-2 bg-gray-200 border-b border-gray-200 mt-10"></div>
              {formRM.map((ds, index) => {
                if(ds.keterangan){
                  const detailHarga = ds.rumah_makan.detail_r_m.find((dtr) => {
                    return dtr.namaMenu === ds.keterangan;
                  });
                  if(detailHarga) {
                    return (
                      <div key={index}>
                        <div className="grid gap-4 sm:grid-cols-3 sm:gap-4 mt-3">
                          <div className="">
                            <label name="destinasi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Makan Dan Minum</label>
                            <select 
                              name="namaRumahMakan"
                              placeholder="Jenis Klien" 
                              defaultValue="default"
                              className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              // onChange={set}
                              onChange={(e) => {
                                findList(e, index, 'rm')
                              }}
                            >
                              <option 
                              value="default"
                              >-{ds.rumah_makan.namaRM}-</option>
                              {props.rumahMakan.map((ds, index) => {
                                return (
                                  <option 
                                    value={ds.id} 
                                    key={ds.id}
                                    // name="ketDataEvent"
                                  >
                                  {ds.namaRM}
                                  </option>
                              )})}
                            </select>
                          </div>
                          <div className="">
                            <label name="destinasi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Menu</label>
                            <select 
                              name="namaRumahMakan"
                              placeholder="Jenis Klien" 
                              defaultValue="default"
                              className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              // onChange={set}
                              onChange={(e) => {
                                find(e, index, 'rm')
                              }}
                            >
                              <option 
                              value="default"
                              >-{ds.keterangan}-</option>
                              {ds.rumah_makan.detail_r_m.map((ds, index) => {
                                return (
                                  <option 
                                    value={ds.id} 
                                    key={ds.id}
                                    // name="ketDataEvent"
                                  >
                                  {ds.namaMenu}
                                  </option>
                              )})}
                            </select>
                          </div>
                          <div className="">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Harga</label>
                            {ds.biaya !== undefined ? (
                              <input 
                              key={index}
                              type="number" 
                              name="biaya" 
                              id="brand" 
                              className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              value={ds.biaya}
                              disabled readOnly
                              />
                            ) : (
                              <input 
                              key={index}
                              type="number" 
                              name="biayaFasilitas" 
                              id="brand" 
                              className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              value={detailHarga.hargaMenu}
                              disabled readOnly
                              />
                            )}
                          </div>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-5 mt-3">
                          <div className="">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Quantity</label>
                            <input 
                              type="number" 
                              name="qty" 
                              id="brand" 
                              value={ds.qty}
                              className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              onChange={(e) => {
                                find(e, index, 'rm')
                              }}
                            />
                          </div>
                          <div className="">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Hari</label>
                            <input 
                              type="number" 
                              name="hari" 
                              id="brand" 
                              value={ds.hari}
                              className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              onChange={(e) => {
                                find(e, index, 'rm')
                              }}
                            />
                          </div>
                          <div className="">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Harga Satuan</label>
                            <input 
                              key={index}
                              type="number" 
                              name="harga" 
                              id="brand" 
                              className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              value={ds.harga}
                              onChange={(e) => {
                                find(e, index, 'rm')
                              }}
                            />
                          </div>
                          <div className="">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Jumlah</label>
                            <input 
                              type="number" 
                              name="jumlah" 
                              id="brand" 
                              value={ds.jumlah}
                              className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              onChange={(e) => {
                                find(e, index, 'rm')
                              }}
                            />
                          </div>
                          <div >
                            <div className="">
                              { formRM.length!==1 &&
                                <button
                                  className="btn btn-warning  text-white border-0 btn-md mt-6 mr-3"
                                  onClick={() => {
                                    removeFields(index, "rm")
                                  }}
                                >
                                remove
                                </button>
                              }
                              { formRM.length-1==index &&
                                <button
                                className="btn bg-green-600 text-white border-0 btn-md mt-6 px-7"
                                onClick={() => {
                                  addFields("rm")
                                  }}
                                >
                                add
                                </button>
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  }
                } else {
                  return (
                    <div key={index}>
                      <div className="grid gap-4 sm:grid-cols-3 sm:gap-4 mt-3">
                        <div className="">
                          <label name="destinasi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Makan Dan Minum</label>
                          <select 
                            name="namaRumahMakan"
                            placeholder="Jenis Klien" 
                            defaultValue="default"
                            className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            // onChange={set}
                            onChange={(e) => {
                              findList(e, index, 'rm')
                            }}
                          >
                            <option 
                            value="default"
                            >--</option>
                            {props.rumahMakan.map((ds, index) => {
                              return (
                                <option 
                                  value={ds.id} 
                                  key={ds.id}
                                  // name="ketDataEvent"
                                >
                                {ds.namaRM}
                                </option>
                            )})}
                          </select>
                        </div>
                        <div className="">
                          <label name="destinasi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Menu</label>
                          <select 
                            name="namaRumahMakan"
                            placeholder="Jenis Klien" 
                            defaultValue="default"
                            className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            // onChange={set}
                            onChange={(e) => {
                              find(e, index, 'rm')
                            }}
                          >
                            <option 
                            value="default"
                            >--</option>
                            {/* {ds.menuRM.map((ds, index) => {
                              return (
                                <option 
                                  value={ds.id} 
                                  key={ds.id}
                                  // name="ketDataEvent"
                                >
                                {ds.namaMenu}
                                </option>
                            )})} */}
                          </select>
                        </div>
                        <div className="">
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Harga</label>
                          <input 
                            key={index}
                            type="number" 
                            name="biaya" 
                            id="brand" 
                            className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            value={ds.biaya}
                            disabled readOnly
                            />
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-5 mt-3">
                        <div className="">
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Quantity</label>
                          <input 
                            type="number" 
                            name="qty" 
                            id="brand" 
                            value={ds.qty}
                            className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            onChange={(e) => {
                              find(e, index, 'rm')
                            }}
                          />
                        </div>
                        <div className="">
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Hari</label>
                          <input 
                            type="number" 
                            name="hari" 
                            id="brand" 
                            value={ds.hari}
                            className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            onChange={(e) => {
                              find(e, index, 'rm')
                            }}
                          />
                        </div>
                        <div className="">
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Harga Satuan</label>
                          <input 
                            key={index}
                            type="number" 
                            name="harga" 
                            id="brand" 
                            className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            value={ds.harga}
                            onChange={(e) => {
                              find(e, index, 'rm')
                            }}
                          />
                        </div>
                        <div className="">
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Jumlah</label>
                          <input 
                            type="number" 
                            name="jumlah" 
                            id="brand" 
                            value={ds.jumlah}
                            className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            onChange={(e) => {
                              find(e, index, 'rm')
                            }}
                          />
                        </div>
                        <div >
                          <div className="">
                            { formRM.length!==1 &&
                              <button
                                className="btn btn-warning  text-white border-0 btn-md mt-6 mr-3"
                                onClick={() => {
                                  removeFields(index, "rm")
                                }}
                              >
                              remove
                              </button>
                            }
                            { formRM.length-1==index &&
                              <button
                              className="btn bg-green-600 text-white border-0 btn-md mt-6 px-7"
                              onClick={() => {
                                addFields("rm")
                                }}
                              >
                              add
                              </button>
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
              })}
              
              {/* Data Fasilitas Tour */}
              <div className="mb-5 mt-2 bg-gray-200 border-b border-gray-200 mt-10"></div>
              {formFasilitas.map((fs, index) => {
                return (
                  <div key={index}>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-4 mt-3">
                      <div className="">
                        <label name="destinasi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Fasilitas Tour</label>
                        <select 
                          name="ketFasilitas"
                          placeholder="Jenis Klien" 
                          defaultValue="default"
                          className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          // onChange={set}
                          onChange={(e) => {
                            find(e, index, 'fasilitas')
                          }}
                        >
                          <option 
                          value="default"
                          >-{fs.keterangan}-</option>
                          {props.fasilitasTour.map((ds, index) => {
                            return (
                              <option 
                                value={ds.id} 
                                key={ds.id}
                                // name="ketDataEvent"
                              >
                              {ds.ketFasilitas}
                              </option>
                          )})}
                        </select>
                      </div>
                      <div className="">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Harga</label>
                        {fs.biayaFasilitas !== undefined ? (
                          <input 
                          key={index}
                          type="number" 
                          name="biayaFasilitas" 
                          id="brand" 
                          className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          value={fs.biayaFasilitas}
                          disabled readOnly
                          />
                        ) : (
                          <input 
                          key={index}
                          type="number" 
                          name="biayaFasilitas" 
                          id="brand" 
                          className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          // value={fs.fasilitas_tour.biayaFasilitas}
                          disabled readOnly
                          />
                        )}
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-5 mt-3">
                      <div className="">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Quantity</label>
                        <input 
                          type="number" 
                          name="qty" 
                          id="brand" 
                          value={fs.qty}
                          className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          onChange={(e) => {
                            find(e, index, 'fasilitas')
                          }}
                        />
                      </div>
                      <div className="">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Hari</label>
                        <input 
                          type="number" 
                          name="hari" 
                          id="brand" 
                          value={fs.hari}
                          className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          onChange={(e) => {
                            find(e, index, 'fasilitas')
                          }}
                        />
                      </div>
                      <div className="">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Harga Satuan</label>
                        <input 
                          key={index}
                          type="number" 
                          name="harga" 
                          id="brand" 
                          className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          value={fs.harga}
                          onChange={(e) => {
                            find(e, index, 'fasilitas')
                          }}
                        />
                      </div>
                      <div className="">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Jumlah</label>
                        <input 
                          type="number" 
                          name="jumlah" 
                          id="brand" 
                          value={fs.jumlah}
                          className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          onChange={(e) => {
                            find(e, index, 'fasilitas')
                          }}
                        />
                      </div>
                      <div >
                        <div className="">
                          { formFasilitas.length!==1 &&
                            <button
                              className="btn btn-warning  text-white border-0 btn-md mt-6 mr-3"
                              onClick={() => {
                                removeFields(index, "fasilitas")
                              }}
                            >
                            remove
                            </button>
                          }
                          { formFasilitas.length-1==index &&
                            <button
                            className="btn bg-green-600 text-white border-0 btn-md mt-6 px-7"
                            onClick={() => {
                              addFields("fasilitas")
                              }}
                            >
                            add
                            </button>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}

              {/* Data Crew */}
              <div className="mb-5 mt-2 bg-gray-200 border-b border-gray-200 mt-10"></div>
              {formCrew.map((crew, index) => {
                return (
                  <div key={index}>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-4 mt-3">
                      <div className="">
                        <label name="destinasi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Crew Operasional</label>
                        <select 
                          name="ketCrewOperasional"
                          placeholder="Jenis Klien" 
                          defaultValue="default"
                          className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          // onChange={set}
                          onChange={(e) => {
                            find(e, index, 'crew')
                          }}
                        >
                          <option 
                          value="default"
                          >-{crew.namaTcrew}-</option>
                          {props.crewOperasional.map((ds, index) => {
                            return (
                              <option 
                                value={ds.idCrewOperasional} 
                                key={ds.id}
                                // name="ketDataEvent"
                              >
                              {ds.ketCrewOperasional}
                              </option>
                          )})}
                        </select>
                      </div>
                      <div className="">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Harga</label>
                        {crew.biayaCrewOperasional !== undefined ? (
                          <input
                            key={index}
                            type="number"
                            name="biayaCrewOperasional"
                            id="brand"
                            className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            value={crew.biayaCrewOperasional}
                            disabled
                            readOnly
                          />
                        ) : (
                          <input
                            key={index}
                            type="number"
                            name="biayaCrewOperasional"
                            id="brand"
                            className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            value={crew.crew.biayaCrewOperasional}
                            disabled
                            readOnly
                          />
                        )}
                        {/* <input 
                          key={index}
                          type="number" 
                          name="biayaCrewOperasional" 
                          id="brand" 
                          className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          value={crew.biayaCrewOperasional}
                          disabled readOnly
                          /> */}
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-5 mt-3">
                      <div className="">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Quantity</label>
                        <input 
                          type="number" 
                          name="qtyTcrew" 
                          id="brand" 
                          value={crew.qtyTcrew}
                          className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          onChange={(e) => {
                            find(e, index, 'crew')
                          }}
                        />
                      </div>
                      <div className="">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Hari</label>
                        <input 
                          type="number" 
                          name="jmlHariTcrew" 
                          id="brand" 
                          value={crew.jmlHariTcrew}
                          className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          onChange={(e) => {
                            find(e, index, 'crew')
                          }}
                        />
                      </div>
                      <div className="">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Harga Satuan</label>
                        <input 
                          key={index}
                          type="number" 
                          name="hargaTcrew" 
                          id="brand" 
                          className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          value={crew.hargaTcrew}
                          onChange={(e) => {
                            find(e, index, 'crew')
                          }}
                        />
                      </div>
                      <div className="">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Jumlah</label>
                        <input 
                          type="number" 
                          name="jumlahTcrew" 
                          id="brand" 
                          value={crew.jumlahTcrew}
                          className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          onChange={(e) => {
                            find(e, index, 'crew')
                          }}
                        />
                      </div>
                      <div >
                        <div className="">
                          { formCrew.length!==1 &&
                            <button
                              className="btn btn-warning  text-white border-0 btn-md mt-6 mr-3"
                              onClick={() => {
                                removeFields(index, "crew")
                              }}
                            >
                            remove
                            </button>
                          }
                          { formCrew.length-1==index &&
                            <button
                            className="btn bg-green-600 text-white border-0 btn-md mt-6 px-7"
                            onClick={() => {
                              addFields("crew")
                              }}
                            >
                            add
                            </button>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}

              {/* Data Event */}
              <div className="mb-5 mt-2 bg-gray-200 border-b border-gray-200 mt-10"></div>
              {formEvent.map((event, index) => {
                return (
                  <div key={index}>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-4 mt-3">
                      <div className="">
                        <label name="destinasi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Data Event</label>
                        <select 
                          name="ketDataEvent"
                          placeholder="Jenis Klien" 
                          defaultValue="default"
                          className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          // onChange={set}
                          onChange={(e) => {
                            find(e, index, 'event')
                          }}
                        >
                          <option 
                          value="default"
                          >--</option>
                          {props.dataEvent.map((ds, index) => {
                            return (
                              <option 
                                value={ds.id} 
                                key={ds.id}
                                // name="ketDataEvent"
                              >
                              {ds.ketDataEvent}
                              </option>
                          )})}
                        </select>
                      </div>
                      <div className="">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Harga</label>
                        <input 
                          key={index}
                          type="number" 
                          name="brand" 
                          id="brand" 
                          className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          value={event.biayaDataEvent}
                          disabled readOnly
                          />
                        {/* {formEvent.map((ev, index) => {
                          return (
                            <input 
                              key={index}
                              type="number" 
                              name="brand" 
                              id="brand" 
                              className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              value={ev.biayaDataEvent}
                              disabled readOnly
                            />
                          )
                        })} */}
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-5 mt-3">
                      <div className="">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Quantity</label>
                        <input 
                          type="number" 
                          name="qty" 
                          id="brand" 
                          value={event.qty}
                          className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          onChange={(e) => {
                            find(e, index, 'event')
                          }}
                        />
                      </div>
                      <div className="">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Hari</label>
                        <input 
                          type="number" 
                          name="hari" 
                          id="brand" 
                          value={event.hari}
                          className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          onChange={(e) => {
                            find(e, index, 'event')
                          }}
                        />
                      </div>
                      <div className="">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Harga Satuan</label>
                        <input 
                          key={index}
                          type="number" 
                          name="harga" 
                          id="brand" 
                          className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          value={event.harga}
                          onChange={(e) => {
                            find(e, index, 'event')
                          }}
                        />
                      </div>
                      <div className="">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Jumlah</label>
                        <input 
                          type="number" 
                          name="jumlah" 
                          id="brand" 
                          value={event.jumlah}
                          className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          onChange={(e) => {
                            find(e, index, 'event')
                          }}
                        />
                      </div>
                      <div >
                        <div className="">
                          { formEvent.length!==1 &&
                            <button
                              className="btn btn-warning  text-white border-0 btn-md mt-6 mr-3"
                              onClick={() => {
                                removeFields(index, "event")
                              }}
                            >
                            remove
                            </button>
                          }
                          { formEvent.length-1===index &&
                            <button
                            className="btn bg-green-600 text-white border-0 btn-md mt-6 px-7"
                            onClick={() => {
                              addFields("event")
                              }}
                            >
                            add
                            </button>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}


              {/* Data Bonus */}  
              <div className="mb-5 mt-2 bg-gray-200 border-b border-gray-200 mt-10"></div>
              {formBonus.map((bonus, index) => {
                return (
                  <div key={index}>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-4 mt-3">
                      <div className="">
                        <label name="destinasi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Data Bonus</label>
                        <select 
                          name="ketDataBonus"
                          placeholder="Jenis Klien" 
                          defaultValue="default"
                          className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          // onChange={set}
                          onChange={(e) => {
                            find(e, index, 'bonus')
                          }}
                        >
                          <option 
                          value="default"
                          >--</option>
                          {props.dataBonus.map((ds, index) => {
                            return (
                              <option 
                                value={ds.id} 
                                key={ds.id}
                                // name="ketDataEvent"
                              >
                              {ds.ketDataBonus}
                              </option>
                          )})}
                        </select>
                      </div>
                      <div className="">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Harga</label>
                        <input 
                          key={index}
                          type="number" 
                          name="biayaDataBonus" 
                          id="brand" 
                          className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          value={bonus.biayaDataBonus}
                          disabled readOnly
                          />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-5 mt-3">
                      <div className="">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Quantity</label>
                        <input 
                          type="number" 
                          name="qty" 
                          id="brand" 
                          value={bonus.qty}
                          className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          onChange={(e) => {
                            find(e, index, 'bonus')
                          }}
                        />
                      </div>
                      <div className="">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Hari</label>
                        <input 
                          type="number" 
                          name="hari" 
                          id="brand" 
                          value={bonus.hari}
                          className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          onChange={(e) => {
                            find(e, index, 'bonus')
                          }}
                        />
                      </div>
                      <div className="">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Harga Satuan</label>
                        <input 
                          key={index}
                          type="number" 
                          name="harga" 
                          id="brand" 
                          className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          value={bonus.harga}
                          onChange={(e) => {
                            find(e, index, 'bonus')
                          }}
                        />
                      </div>
                      <div className="">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Jumlah</label>
                        <input 
                          type="number" 
                          name="jumlah" 
                          id="brand" 
                          value={bonus.jumlah}
                          className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          onChange={(e) => {
                            find(e, index, 'bonus')
                          }}
                        />
                      </div>
                      <div >
                        <div className="">
                          { formBonus.length!==1 &&
                            <button
                              className="btn btn-warning  text-white border-0 btn-md mt-6 mr-3"
                              onClick={() => {
                                removeFields(index, "bonus")
                              }}
                            >
                            remove
                            </button>
                          }
                          { formBonus.length-1==index &&
                            <button
                            className="btn bg-green-600 text-white border-0 btn-md mt-6 px-7"
                            onClick={() => {
                              addFields("bonus")
                              }}
                            >
                            add
                            </button>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
              
            </div>
            <div className="space-x-3">
              <button className="btn bg-primary text-white border-0 btn-md mt-10"
              onClick={() => {
                  handleSubmit()
              }}
              >
                simpan
              </button>
              <button className="btn bg-gray-400 text-white border-0 btn-md mt-10">
                Kembali
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuotationsClone

QuotationsClone.layout = (page) => <Layout auth={page.props.auth} errors={page.props.errors}>{page}</Layout>;

