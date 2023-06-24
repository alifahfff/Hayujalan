import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import NewsLists from "@/Components/Homepage/NewsLists";
import Paginator from "@/Components/Homepage/Paginator";
import Crew from "@/Components/Item Quotation/Crew/Crew";
import Pagination from "@/Components/Pagination";
import { BsPlusSquare } from "react-icons/bs";
import ModalCrew from "@/Components/Item Quotation/Crew/ModalCrew";
import Layout from "@/Layouts/Layout";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function Quotations(props) {
  // const {data} = this.props.location;
  console.log("cek", props);
  console.log("referensi", props.referensi);
  const [data, setData] = useState({
      namaKlien: '',
      b_areaWisata: '',
      b_kategori: '',
      b_budget: '',
      b_durasi: '',
      b_jumlahOrang: '',
      k_area: '',
      k_kategori: '',
      k_jumlahOrang: '',
      k_durasi: '',
      k_budget: '',
  })

  console.log('cek data', data);

  const normalisasi = (e, params) => {
    console.log("e", e.target.value)
    console.log("params", params)
    if(params == 'area'){
      const totalB = 0 + (parseFloat(e.target.value) - parseFloat(props.minArea)) * (1-0) / (parseFloat(props.maxArea) - parseFloat(props.minArea))
      console.log('totalB', totalB)
      setData({
        ...data,
        b_areaWisata: totalB
      })
    }
    if(params == 'kategori'){
      const totalB = 0 + (parseFloat(e.target.value) - parseFloat(props.minKategori)) * (1-0) / (parseFloat(props.maxKategori) - parseFloat(props.minKategori))
      console.log('totalB', totalB)
      setData({
        ...data,
        b_kategori: totalB
      })
    }
    if(params == 'durasi'){
      const totalB = 0 + (parseFloat(e.target.value) - parseFloat(props.minDurasi)) * (1-0) / (parseFloat(props.maxDurasi) - parseFloat(props.minDurasi))
      console.log('totalB', totalB)
      setData({
        ...data,
        b_durasi: totalB
      })
    }
    if(params == 'budget'){
      
      const totalB = 0 + (parseFloat(e.target.value) - parseFloat(props.minBudget)) * (1-0) / (parseFloat(props.maxBudget) - parseFloat(props.minBudget))
      console.log('totalB', totalB)
      setData({
        ...data,
        b_budget: totalB
      })
    }
    if(params == 'qty'){
      const totalB = 0 + (parseFloat(e.target.value) - parseFloat(props.minQTY)) * (1-0) / (parseFloat(props.maxQTY) - parseFloat(props.minQTY))
      console.log('totalB', totalB)
      setData({
        ...data,
        b_jumlahOrang: totalB
      })
    }
  }

  const handleSubmit = () => {
    let results = [];
    const hasilarea = data.b_areaWisata;
    const hasilKategori = data.b_kategori;
    const hasilQty = data.b_jumlahOrang;
    const hasilDurasi = data.b_durasi;
    const hasilBudget = data.b_budget;

    props.referensi.forEach((row) => {
      const id = row.id;
      const b_areaWisata = row.b_areaWisata;
      const b_kategori = row.b_kategori;
      const b_budget = row.b_budget;
      const b_durasi = row.b_durasi;
      const b_jumlahOrang = row.b_jumlahOrang;

      // const areaWisata = parseFloat(Math.pow((b_areaWisata - hasilarea), 2) * (data.k_area));
      // const roundedArea = parseFloat(areaWisata.toFixed(5)); // Bulatkan ke lima angka desimal
      // const kategori = parseFloat(Math.pow((b_kategori - hasilKategori), 2) * (data.k_kategori));
      // const roundedKategori = parseFloat(kategori.toFixed(5)); // Bulatkan ke lima angka desimal
      // const jumlahOrang = parseFloat(Math.pow((b_jumlahOrang - hasilQty), 2) * (data.k_jumlahOrang));
      // const roundedJumlahOrang = parseFloat(jumlahOrang.toFixed(5)); // Bulatkan ke lima angka desimal
      // const durasi = parseFloat(Math.pow((b_durasi - hasilDurasi), 2) * (data.k_durasi));
      // const roundedDurasi = parseFloat(durasi.toFixed(5)); // Bulatkan ke lima angka desimal
      // const budget = parseFloat(Math.pow((b_budget - hasilBudget), 2) * (data.k_budget));
      // const roundedBudget = parseFloat(budget.toFixed(5)); // Bulatkan ke lima angka desimal
      

      // console.log('id', id)
      // console.log('areawisata', areaWisata)
      // console.log('roundedArea',roundedArea);
      // console.log('kategori', kategori)
      // console.log('roundedKatgeori',roundedKategori);
      // console.log('qty', jumlahOrang)
      // console.log('roundedJumlahOrang',roundedJumlahOrang);
      // console.log('durasi', durasi)
      // console.log('roundedDurasi',roundedDurasi);
      // console.log('budget', budget)
      // console.log('roundedBudget',roundedBudget);

      // const sum = roundedArea + roundedKategori + roundedJumlahOrang + roundedDurasi + roundedBudget;
      // const devided = sum / (1);
      // const total2 =  Math.sqrt(devided);
      // const similarity2 = 1 - total2;

      const total = Math.sqrt((parseFloat(Math.pow((b_areaWisata - hasilarea), 2) * (data.k_area)) + 
      parseFloat(Math.pow((b_kategori - hasilKategori), 2) * (data.k_kategori)) +
      parseFloat(Math.pow((b_jumlahOrang - hasilQty), 2) * (data.k_jumlahOrang)) + 
      parseFloat(Math.pow((b_durasi - hasilDurasi), 2) * (data.k_durasi)) +
      parseFloat(Math.pow((b_budget - hasilBudget), 2) * (data.k_budget))) / 1)
      const roundedTotal = parseFloat(total.toFixed(5)); // Bulatkan ke lima angka desimal
      const similarity = 1 - roundedTotal;
      const roundedSim = parseFloat(similarity.toFixed(5)); // Bulatkan ke lima angka desimal
      // const total = Math.sqrt(areaWisata + kategori + jumlahOrang + durasi + budget) / 1;
      // const similarity = 1 - total;

      // console.log('sum', sum)
      // console.log('devided', devided)
      // console.log('total2', total2)
      // console.log('similarty', similarity2)
      console.log('id', id)
      console.log('total', total)
      console.log('roundedTotal', roundedTotal)
      console.log('similarty', similarity)
      const result = {
        id: id,
        total: roundedTotal,
        similarity: roundedSim,
      };

      // Save calculation results in the array
      results.push(result);
    });

    //Sort the calculation results based on the highest similarity value
    results.sort((a, b) => b.similarity - a.similarity);

    console.log('results',results);

    const dataSubmit = {
      namaKlien: data.namaKlien,
      b_areaWisata: data.b_areaWisata,
      b_kategori: data.b_kategori,
      b_budget: data.b_budget,
      b_durasi: data.b_durasi,
      b_jumlahOrang: data.b_jumlahOrang,
      result: results, 
    }
    console.log('data submit', dataSubmit)
    Inertia.post('/quotation/qrecomend', dataSubmit)
  }

  return (
    <div className="min-h-screen bg-abu ">
      {/* Content */}
      <div className="ml-6">
        <a>Quotation Recomendation</a>
      </div>
      <div className="flex justify-between m-6 mt-2 mb-3">
        <a className="text-2xl font-bold text-black">Quotation Recomendation</a>
      </div>
      <div className="relative bg-white shadow-xl m-6 mt-3 md:max-xl:flex ring-1 ring-gray-900/5">
        <div className="p-4 bg-kuning border-b border-gray-200"></div>
        <div className="bg-white border-b border-gray-200">
          <div className="flex flex-col px-11 pt-6 pb-8 ">

            <a className="mr-5 mt-2 text-black font-bold mb-4">Quotation</a>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="sm:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nama Klien</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    onChange={(e) => 
                      setData({
                        ...data,
                        namaKlien: e.target.value
                      })
                    }
                  />
                </div>

                <div className="">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Area Wisata</label>
                  <select 
                    placeholder="Jenis Klien" 
                    defaultvalue="default"
                    className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    onChange={(e) => 
                      normalisasi(e, 'area')
                    }
                  >
                    <option value="default">- Pilih Area Wisata -</option>
                    {props.areawisata.map((jk, index) => {
                      return (
                        <option 
                          value={jk.jmlBobot} 
                          key={jk.id}
                        >
                        {jk.namaBobot}
                        </option>
                    )})}
                  </select>
                </div>
                <div className="">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Bobot</label>
                  <select 
                    placeholder="Jenis Klien" 
                    defaultvalue="default"
                    className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    onChange={(e) => 
                      setData({
                        ...data,
                        k_area: parseFloat(e.target.value)
                      })
                    }
                  >
                    <option value="default">- Pilih prioritas -</option>  
                    <option value={parseFloat(0.3)}>1</option> 
                    <option value={parseFloat(0.25)}>2</option> 
                    <option value={parseFloat(0.2)}>3</option> 
                    <option value={parseFloat(0.15)}>4</option> 
                    <option value={parseFloat(0.1)}>5</option>   
                  </select>
                </div>

                <div className="">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Kategori Wisata</label>
                  <select 
                    placeholder="Jenis Klien" 
                    defaultvalue="default"
                    className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    onChange={(e) => 
                      normalisasi(e, 'kategori')
                    }
                  >
                    <option value="default">- Pilih Kategori Wisata -</option>
                    {props.kategori.map((jk, index) => {
                      return (
                        <option 
                          value={jk.jmlBobot} 
                          key={jk.id}
                        >
                        {jk.namaBobot}
                        </option>
                    )})}
                  </select>
                </div>
                <div className="">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Bobot</label>
                  <select 
                    placeholder="Jenis Klien" 
                    defaultvalue="default"
                    className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    onChange={(e) => 
                      setData({
                        ...data,
                        k_kategori: parseFloat(e.target.value)
                      })
                    }
                  >
                    <option value="default">- Pilih prioritas -</option>  
                    <option value={parseFloat(0.3)}>1</option> 
                    <option value={parseFloat(0.25)}>2</option> 
                    <option value={parseFloat(0.2)}>3</option> 
                    <option value={parseFloat(0.15)}>4</option> 
                    <option value={parseFloat(0.1)}>5</option>  
                  </select>
                </div>

                <div className="">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Jumlah Orang</label>
                  <select 
                    placeholder="Jenis Klien" 
                    defaultvalue="default"
                    className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    onChange={(e) => 
                      normalisasi(e, 'qty')
                    }
                  >
                    <option value="default">- Pilih Jumlah Orang -</option>
                    {props.quantity.map((jk, index) => {
                      return (
                      <option 
                        value={jk.jmlBobot} 
                        key={jk.id}
                      >
                      {jk.namaBobot}
                      </option>
                    )})}
                  </select>
                </div>
                <div className="">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Bobot</label>
                  <select 
                    placeholder="Jenis Klien" 
                    defaultvalue="default"
                    className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    onChange={(e) => 
                      setData({
                        ...data,
                        k_jumlahOrang: parseFloat(e.target.value)
                      })
                    }
                  >
                    <option value="default">- Pilih prioritas -</option>  
                    <option value={parseFloat(0.3)}>1</option> 
                    <option value={parseFloat(0.25)}>2</option> 
                    <option value={parseFloat(0.2)}>3</option> 
                    <option value={parseFloat(0.15)}>4</option> 
                    <option value={parseFloat(0.1)}>5</option>  
                  </select>
                </div>

                <div className="">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Durasi Wisata</label>
                  <select 
                    placeholder="Jenis Klien" 
                    defaultvalue="default"
                    className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    onChange={(e) => 
                      normalisasi(e, 'durasi')
                    }
                  >
                    <option value="default">- Pilih Durasi Wisata -</option>
                    {props.durasi.map((jk, index) => {
                      return (
                      <option 
                        value={jk.jmlBobot} 
                        key={jk.id}
                      >
                      {jk.namaBobot}
                      </option>
                    )})}
                  </select>
                </div>
                <div className="">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Bobot</label>
                  <select 
                    placeholder="Jenis Klien" 
                    defaultvalue="default"
                    className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    onChange={(e) => 
                      setData({
                        ...data,
                        k_durasi: parseFloat(e.target.value)
                      })
                    }
                  >
                    <option value="default">- Pilih prioritas -</option>  
                    <option value={parseFloat(0.3)}>1</option> 
                    <option value={parseFloat(0.25)}>2</option> 
                    <option value={parseFloat(0.2)}>3</option> 
                    <option value={parseFloat(0.15)}>4</option> 
                    <option value={parseFloat(0.1)}>5</option>   
                  </select>
                </div>

                <div className="">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Budget Wisata</label>
                  <select 
                    placeholder="Jenis Klien" 
                    defaultvalue="default"
                    className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    onChange={(e) => 
                      normalisasi(e, 'budget')
                    }
                  >
                    <option value="default">- Pilih Budget Wisata -</option>
                    {props.budget.map((jk, index) => {
                      return (
                        <option 
                          value={jk.jmlBobot} 
                          key={jk.id}
                        >
                        {jk.namaBobot}
                        </option>
                    )})}
                  </select>
                </div>
                <div className="">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Bobot</label>
                  <select 
                    placeholder="Jenis Klien" 
                    defaultvalue="default"
                    className="bg-abu border border-inherit text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-crem dark:border-inherit dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    onChange={(e) => 
                      setData({
                        ...data,
                        k_budget: parseFloat(e.target.value)
                      })
                    }
                  >
                    <option value="default">- Pilih prioritas -</option>  
                    <option value={parseFloat(0.3)}>1</option> 
                    <option value={parseFloat(0.25)}>2</option> 
                    <option value={parseFloat(0.2)}>3</option> 
                    <option value={parseFloat(0.15)}>4</option> 
                    <option value={parseFloat(0.1)}>5</option>  
                  </select>
                </div>
              </div>
              
            <div className="mt-10">
              <button 
              className="btn bg-green-600 text-white border-0 btn-md w-1/6 h-0 float-right"
              onClick={() => handleSubmit()}>
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Quotations.layout = (page) => <Layout children={page} />;
