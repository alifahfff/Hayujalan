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

  const [data, setData] = useState({
      namaKlien: '',
      b_areaWisata: '',
      b_kategori: '',
      b_budget: '',
      b_durasi: '',
      b_jumlahOrang: '',
  })

  console.log('cek data', data);

  const normalisasi = (e, params) => {
    console.log("e", e.target.value)
    console.log("params", params)
    if(params == 'area'){
      const totalB = parseFloat(e.target.value) - parseFloat(props.minArea) / parseFloat(props.maxArea) - parseFloat(props.minArea)
      console.log('totalB', totalB)
      setData({
        ...data,
        b_areaWisata: totalB
      })
    }
    if(params == 'kategori'){
      const totalB = parseFloat(e.target.value) - parseFloat(props.minKategori) / parseFloat(props.maxKategori) - parseFloat(props.minKategori)
      console.log('totalB', totalB)
      setData({
        ...data,
        b_kategori: totalB
      })
    }
    if(params == 'durasi'){
      const totalB = parseFloat(e.target.value) - parseFloat(props.minDurasi) / parseFloat(props.maxDurasi) - parseFloat(props.minDurasi)
      console.log('totalB', totalB)
      setData({
        ...data,
        b_durasi: totalB
      })
    }
    if(params == 'budget'){
      const totalB = parseFloat(e.target.value) - parseFloat(props.minBudget) / parseFloat(props.maxBudget) - parseFloat(props.minBudget)
      console.log('totalB', totalB)
      setData({
        ...data,
        b_budget: totalB
      })
    }
    if(params == 'qty'){
      const totalB = parseFloat(e.target.value) - parseFloat(props.minQTY) / parseFloat(props.maxQTY) - parseFloat(props.minQTY)
      console.log('totalB', totalB)
      setData({
        ...data,
        b_jumlahOrang: totalB
      })
    }
  }

  const handleSubmit = () => {
    const dataSubmit = {
      namaKlien: data.namaKlien,
      b_areaWisata: data.b_areaWisata,
      b_kategori: data.b_kategori,
      b_budget: data.b_budget,
      b_durasi: data.b_durasi,
      b_jumlahOrang: data.b_jumlahOrang,
    }
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
            <form className="max-w-3xl space-y-6 ">
              <label className="label">
                <span className="label-text text-black">Nama Klien</span>
                <input
                  type="text"
                  className="input border-2 border-inherit  bg-inherit  w-2/4 mr-52"
                  onChange={(e) => 
                    setData({
                      ...data,
                      namaKlien: e.target.value
                    })
                  }
                />
              </label>
              {/* <a>{props.areawisata.bo}</a> */}

              <label className="label">
                <span className="label-text  text-black">Kategori Wisata</span>
                    <select 
                      placeholder="Jenis Klien" 
                      defaultvalue="default"
                      className="select  bg-inherit border-2 border-inherit w-2/4 ml-36"
                      onChange={(e) => 
                        normalisasi(e, 'kategori')
                      }
                    >
                    <option value="default">- Pilih paket -</option>
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
                    <span className="label-text  text-black ml-5">Bobot</span>
                    <input
                      type="text"
                      className="input border-2 border-inherit  bg-inherit  w-3/4 ml-5"
                    />      
              </label>

              <label className="label">
                <span className="label-text  text-black">Jumlah Orang</span>
                    <select 
                      placeholder="Jenis Klien" 
                      defaultvalue="default"
                      className="select  bg-inherit border-2 border-inherit w-2/4 ml-36"
                      onChange={(e) => 
                        normalisasi(e, 'qty')
                      }
                    >
                    <option value="default">- Pilih jumlah orang -</option>
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
                    <span className="label-text  text-black ml-5">Bobot</span>
                    <input
                      type="text"
                      className="input border-2 border-inherit  bg-inherit  w-3/4 ml-5"
                    />      
              </label>

              <label className="label">
                <span className="label-text  text-black">Hari</span>
                    <select 
                      placeholder="Jenis Klien" 
                      defaultvalue="default"
                      className="select  bg-inherit border-2 border-inherit w-2/4 ml-36"
                      onChange={(e) => 
                        normalisasi(e, 'durasi')
                      }
                    >
                    <option value="default">- Pilih durasi -</option>
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
                    <span className="label-text  text-black ml-5">Bobot</span>
                    <input
                      type="text"
                      className="input border-2 border-inherit  bg-inherit  w-3/4 ml-5"
                    />      
              </label>

              {/* <label className="label">
                <span className="label-text  text-black">Hari</span>
                <input
                  type="text"
                  className="input border-2 border-inherit bg-inherit  w-2/4 mr-52"
                />
              </label> */}

              <label className="label">
                <span className="label-text  text-black ">Area Wisata</span>
                  <select 
                    placeholder="Jenis Klien" 
                    defaultvalue="default"
                    className="select  bg-inherit border-2 border-inherit w-2/4 ml-32"
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
                  <span className="label-text  text-black ml-5">Bobot</span>
                  <input
                    type="text"
                    className="input border-2 border-inherit  bg-inherit  w-3/4 ml-5"
                  /> 
              </label>

              <label className="label">
                <span className="label-text  text-black ">Budget</span>
                <select 
                                    placeholder="Jenis Klien" 
                                    defaultvalue="default"
                                    className="select  bg-inherit border-2 border-inherit w-2/4 ml-32"
                                    onChange={(e) => 
                                      normalisasi(e, 'budget')
                                    }
                                >
                                    <option value="default">- Pilih Budget -</option>
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
                    <span className="label-text  text-black ml-5">Bobot</span>
                        <input
                          type="text"
                          className="input border-2 border-inherit  bg-inherit  w-3/4 ml-5"
                        /> 
              </label>
            </form>
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
