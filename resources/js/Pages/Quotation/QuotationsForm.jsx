import React from "react";
import Layout from "@/Layouts/Layout";
import { useState } from "react";


const Quotations = (props, crewL) => {
  // const {data} = this.props.location;
  const [formDestinasi, setFormDestinasi] = useState([{
    namaDestinasiWisata:'',
    idDestinasiWisata :'',
    biaya:'',
    pilihanBiaya:'',
    qty:'',
    hari:'',
    harga:'',
    jumlah:'',
  }]);

  const [formTransport, setFormTransport] = useState([

  ]);

  const [formRM, setFormRM] = useState([{
    namaRM:'',
    idRM:'',
    biaya:'',
    hargaMenu:'',
    qty:'',
    hari:'',
    harga:'',
    jumlah:'',
  }]);
  
  const [formEvent, setFormEvent] = useState([{
    ketDataEvent:'',
    idDataEvent:'',
    biayaDataEvent:'',
    qty:'',
    hari:'',
    harga:'',
    jumlah:'',
  }]);
  
  const [formBonus, setFormBonus] = useState([{
    ketDataBonus:'',
    idDataBonus:'',
    biayaDataBonus:'',
    qty:'',
    hari:'',
    harga:'',
    jumlah:'',
  }]);

  const [formCrew, setFormCrew] = useState([{
    ketCrewOperasional:'',
    idCrewOperasional :'',
    biayaCrewOperasional:'',
    qty:'',
    hari:'',
    harga:'',
    jumlah:'',
  }]);

  const [formFasilitas, setFormFasilitas] = useState([{
    ketFasilitas:'',
    idFasilitasTour :'',
    biayaFasilitas:'',
    qty:'',
    hari:'',
    harga:'',
    jumlah:'',
  }]);
  
  const [datas, setDatas] = useState({
    idProgram: '1',
    namaProgram: 'Ryan',
    idAreaWisata: '',
    namaArea: '',
    idSales: '',
    namaSales: '',
    idKategoriTour: '', 
    namaKategoriTour: '',
    namaproject: '', 
    durasiproject: '',
    tipeDurasi: '',
    jumlahOrang: '',
    foc: '',
    totalOrang: '',
    planWaktuPelaksanaan: '',
    presentaseKeuntungan: '',
    feemarketing: '',
    namaKlien: '',
    jenisKlien: '',
    jenis_klien_id: '',
  })

  console.log("data quotation", props);
  console.log("datas", datas);
  console.log("event", formEvent);
  console.log("bonus", formBonus);
  console.log("crew", formCrew);
  console.log("fasilitas", formFasilitas);

  const [selectedDate, setSelectedDate] = useState('');
  const [listRM, setListRM] = useState([]);

  const handleDateChange = (e) => {
    const selectedDateString = e.target.value;
    const selectedDateObj = new Date(selectedDateString);
    const dayOfWeek = selectedDateObj.getDay();

    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

    setSelectedDate(selectedDateString);

    if (isWeekend) {
      console.log('Selected date is a weekend.');
      setDatas({
        ...datas,
        durasi: e.target.value,
        tipeDurasi: 'weekend',
      })
    } else {
      console.log('Selected date is a weekday.');
      setDatas({
        ...datas,
        durasi: e.target.value,
        tipeDurasi: 'weekday',
      })
    }
  };

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
        jenis_klien_id: find2.id,
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
      const find2 = props.areawisata.find((x) => {
        return x.id == e 
      });

      setDatas({
        ...datas,
        namaArea: find2.namaArea,
        idAreaWisata: find2.id,
      })

      if(find2){
        props.rumahMakan.forEach((rm) => {
          console.log('rm', rm)
          if(rm.idAreaWIsata == find2.id){
            console.log('rm', rm)
            listRM.push(rm)
          } 
          // alert(2)
          // // listRM.splice(rm, 1)
        })
      }

      // setListRM(listRM2)
      console.log('listRM', listRM)
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
    if(e == 'transport'){
      let object = {}
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
        qty:'',
        hari:'',
        harga:'',
        jumlah:'',
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
      const values = [...formFasilitas]
      if(e.target.name == 'namaDestinasiWisata'){
        alert(1)
        const find2 = props.detailDestinasi.find((x) => {
          return x.id == e.target.value 
        });
        const find3 = formDestinasi.find((x, key) => {
          console.log('find index', key)
          return key == index 
        });
        // const list = [];
        const list = '';
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
        console.log('find', find2)
        console.log('find', find3)
        values[index]['namaDestinasiWisata'] = find2.namaDestinasiWisata,
        values[index]['idDestinasiWisata'] = find2.id,
        values[index]['biaya'] = find2.biayaFasilitas,
        values[index]['harga'] = find2.biayaFasilitas,
        // setFormDestinasi(values) 
        // values[index]['jumlah'] = parseInt(find3.qty) * parseInt(find3.hari) * parseInt(find3.harga)
        // setFormDestinasi(values)
        console.log('values', values)
      }else{
        alert(2)
        // const find2 = formFasilitas.find((x, key) => {
        //   console.log('finde index', key)
        //   return key == index 
        // });
        // console.log('find', find2)
        // values[index][e.target.name] = parseInt(e.target.value),
        // setFormDestinasi(values)
        // values[index]['jumlah'] = parseInt(find2.qty) * parseInt(find2.hari) * parseInt(find2.harga)
        // setFormDestinasi(values)
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
        values[index]['biayaCrewOperasional'] = find2.biayaFasilitas,
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
        console.log('find', find2)
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
          return x.id == e.target.value 
        });
        const find3 = formCrew.find((x, key) => {
          console.log('find index', key)
          return key == index 
        });
        console.log('find', find2)
        values[index]['ketCrewOperasional'] = find2.ketCrewOperasional,
        values[index]['idCrewOperasional'] = find2.id,
        values[index]['biayaCrewOperasional'] = find2.biayaCrewOperasional,
        values[index]['harga'] = find2.biayaCrewOperasional,
        setFormCrew(values) 
        values[index]['jumlah'] = parseInt(find3.qty) * parseInt(find3.hari) * parseInt(find3.harga)
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
        values[index]['jumlah'] = parseInt(find2.qty) * parseInt(find2.hari) * parseInt(find2.harga)
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
    if(params == 'transportasi'){
      let data = [...formDestinasi];
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

  const handleChange = (e, i, params) => {
    console.log('eaaa', e)
    console.log('iiii', i)
    console.log('pppp', params)
  }

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
                        <option value="default">--</option>
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
                        {props.usersales.map((us, index) => {
                          return (
                            <option 
                              value={us.id} 
                              key={us.id}
                            >
                            {us.namaSales}
                            </option>
                        )})}
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
                      value={datas.totalOrang}
                      onChange={(value) => 
                        setDatas({
                        ...datas,
                        totalOrang: value.target.value,
                      })}
                      />
                  </div>
                  <div className="w-full">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Durasi Project</label>
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
              })}

              {/* Data Transportasi */}
              <div className="mb-5 mt-2 bg-gray-200 border-b border-gray-200 mt-10"></div>
              <div className="grid gap-4 sm:grid-cols-3 sm:gap-4 ">
                <div className="">
                  <label name="destinasi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Vendor Transportasi</label>
                  <select 
                    placeholder="Jenis Klien" 
                    defaultValue="default"
                    className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    // onChange={set}
                    onChange={(e) => {
                      find(e.target.value)
                    }
                    // setDatas({
                    // ...datas,
                    // namaArea: e.target.value
                    // })
                    }
                  >
                    <option value="default">--</option>
                    {props.transportasi.map((ds, index) => {
                      return (
                        <option 
                          value={ds.id} 
                          key={ds.id}
                        >
                        {ds.namaTransportasi}
                        </option>
                    )})}
                  </select>
                </div>
                <div className="">
                  <label name="destinasi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Transportasi</label>
                  <select 
                    placeholder="Jenis Klien" 
                    defaultValue="default"
                    className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    // onChange={set}
                    onChange={(e) => {
                      find(e.target.value)
                    }
                    // setDatas({
                    // ...datas,
                    // namaArea: e.target.value
                    // })
                    }
                  >
                    <option value="default">--</option>
                    {props.transportasi.map((ds, index) => {
                      return (
                        <option 
                          value={ds.id} 
                          key={ds.id}
                        >
                        {ds.namaTransportasi}
                        </option>
                    )})}
                  </select>
                </div>
                <div className="">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Harga</label>
                  <input type="number" name="brand" id="brand" className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"/>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-5 mt-3">
                <div className="">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Quantity</label>
                  <input type="number" name="brand" id="brand" className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"/>
                </div>
                <div className="">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Hari</label>
                  <input type="number" name="brand" id="brand" className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"/>
                </div>
                <div className="">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Harga Satuan</label>
                  <input type="number" name="brand" id="brand" className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"/>
                </div>
                <div className="">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Jumlah</label>
                  <input type="number" name="brand" id="brand" className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"/>
                </div>
                <div >
                  <div className="">
                    {/* <button
                        className="btn btn-warning  text-white border-0 btn-md mt-6 mr-3"
                        onClick={removeFields}
                        >
                        remove
                        </button> */}
                    <button
                      className="btn bg-green-600 text-white border-0 btn-md mt-6 px-7"
                      onClick={() => {
                        addFields("transportasi")
                      }}
                    >
                    add
                    </button>
                  </div>
                </div>
              </div>

              {/* Data Penginapan */}
              <div className="mb-5 mt-2 bg-gray-200 border-b border-gray-200 mt-10"></div>
              <div className="grid gap-4 sm:grid-cols-3 sm:gap-4 ">
                <div className="">
                  <label name="destinasi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">VendorPenginapan</label>
                  <select 
                    placeholder="Jenis Klien" 
                    defaultValue="default"
                    className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    // onChange={set}
                    onChange={(e) => {
                      find(e.target.value)
                    }
                    // setDatas({
                    // ...datas,
                    // namaArea: e.target.value
                    // })
                    }
                  >
                    <option value="default">--</option>
                    {props.transportasi.map((ds, index) => {
                      return (
                        <option 
                          value={ds.id} 
                          key={ds.id}
                        >
                        {ds.namaTransportasi}
                        </option>
                    )})}
                  </select>
                </div>
                <div className="">
                  <label name="destinasi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Penginapan</label>
                  <select 
                    placeholder="Jenis Klien" 
                    defaultValue="default"
                    className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    // onChange={set}
                    onChange={(e) => {
                      find(e.target.value)
                    }
                    // setDatas({
                    // ...datas,
                    // namaArea: e.target.value
                    // })
                    }
                  >
                    <option value="default">--</option>
                    {props.transportasi.map((ds, index) => {
                      return (
                        <option 
                          value={ds.id} 
                          key={ds.id}
                        >
                        {ds.namaTransportasi}
                        </option>
                    )})}
                  </select>
                </div>
                <div className="">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Harga</label>
                  <input type="number" name="brand" id="brand" className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"/>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-5 mt-3">
                <div className="">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Quantity</label>
                  <input type="number" name="brand" id="brand" className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"/>
                </div>
                <div className="">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Hari</label>
                  <input type="number" name="brand" id="brand" className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"/>
                </div>
                <div className="">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Harga Satuan</label>
                  <input type="number" name="brand" id="brand" className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"/>
                </div>
                <div className="">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Jumlah</label>
                  <input type="number" name="brand" id="brand" className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"/>
                </div>
                <div >
                  <div className="">
                    {/* <button
                        className="btn btn-warning  text-white border-0 btn-md mt-6 mr-3"
                        onClick={removeFields}
                        >
                        remove
                        </button> */}
                    <button
                      className="btn bg-green-600 text-white border-0 btn-md mt-6 px-7"
                      onClick={() => {
                        addFields("transportasi")
                      }}
                    >
                    add
                    </button>
                  </div>
                </div>
              </div>              

              {/* Data Rumah Makan */}
              <div className="mb-5 mt-2 bg-gray-200 border-b border-gray-200 mt-10"></div>
              {formRM.map((ds, index) => {
                return (
                  <div key={index}>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-4 mt-3">
                      <div className="">
                        <label name="destinasi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Makan Dan Minum</label>
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
                          {listRM.map((ds, index) => {
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
              })}
              
              {/* Data Fasilitas Peserta */}
              <div className="mb-5 mt-2 bg-gray-200 border-b border-gray-200 mt-10"></div>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-4 ">
                <div className="">
                  <label name="destinasi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Fasilitas Tour</label>
                  <select 
                    placeholder="Jenis Klien" 
                    defaultValue="default"
                    className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    // onChange={set}
                    onChange={(e) => {
                      find(e.target.value)
                    }
                    // setDatas({
                    // ...datas,
                    // namaArea: e.target.value
                    // })
                    }
                  >
                    <option value="default">--</option>
                    {props.fasilitasTour.map((ft, index) => {
                      return (
                        <option 
                          value={ft.id} 
                          key={ft.id}
                        >
                        {ft.ketFasilitas}
                        </option>
                    )})}
                  </select>
                </div>
                <div className="">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Harga</label>
                  <input type="number" name="brand" id="brand" className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"/>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-5 mt-3">
                <div className="">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Quantity</label>
                  <input type="number" name="brand" id="brand" className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"/>
                </div>
                <div className="">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Hari</label>
                  <input type="number" name="brand" id="brand" className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"/>
                </div>
                <div className="">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Harga Satuan</label>
                  <input type="number" name="brand" id="brand" className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"/>
                </div>
                <div className="">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Jumlah</label>
                  <input type="number" name="brand" id="brand" className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"/>
                </div>
                <div >
                  <div className="">
                    {/* <button
                        className="btn btn-warning  text-white border-0 btn-md mt-6 mr-3"
                        onClick={removeFields}
                        >
                        remove
                        </button> */}
                    <button
                      className="btn bg-green-600 text-white border-0 btn-md mt-6 px-7"
                      onClick={() => {
                        addFields("transportasi")
                      }}
                    >
                    add
                    </button>
                  </div>
                </div>
              </div>
              
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
                          >--</option>
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
                        <input 
                          key={index}
                          type="number" 
                          name="biayaFasilitas" 
                          id="brand" 
                          className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          value={fs.biayaFasilitas}
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
                          >--</option>
                          {props.crewOperasional.map((ds, index) => {
                            return (
                              <option 
                                value={ds.id} 
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
                        <input 
                          key={index}
                          type="number" 
                          name="biayaCrewOperasional" 
                          id="brand" 
                          className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          value={crew.biayaCrewOperasional}
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
                          value={crew.qty}
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
                          name="hari" 
                          id="brand" 
                          value={crew.hari}
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
                          name="harga" 
                          id="brand" 
                          className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          value={crew.harga}
                          onChange={(e) => {
                            find(e, index, 'crew')
                          }}
                        />
                      </div>
                      <div className="">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Jumlah</label>
                        <input 
                          type="number" 
                          name="jumlah" 
                          id="brand" 
                          value={crew.jumlah}
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
              <button className="btn bg-primary text-white border-0 btn-md mt-10">
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

export default Quotations

Quotations.layout = (page) => <Layout children={page} />;

