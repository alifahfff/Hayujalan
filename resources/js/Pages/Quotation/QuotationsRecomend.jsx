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

export default function Quotations(props) {
  // const {data} = this.props.location;
  console.log("cek", props.areawisata);

  const [data, setData] = useState({
      id:'',
      namaJenisKlien: '',
      namaBobot: '',
  })

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
                />
              </label>
              {/* <a>{props.areawisata.bo}</a> */}

              <label className="label">
                <span className="label-text  text-black">Paket</span>
                    <select 
                      placeholder="Jenis Klien" 
                      defaultvalue="default"
                      className="select  bg-inherit border-2 border-inherit w-2/4 ml-36"
                      onChange={(e) => 
                        setData({
                          ...data,
                          id: e.target.value
                         })
                      }
                    >
                    <option value="default">- Pilih paket -</option>
                        {props.kategori.map((jk, index) => {
                            return (
                              <option 
                                value={jk.id} 
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
                <input
                  type="text"
                  className="input border-2 border-inherit bg-inherit  w-3/4 ml-36"
                />
                 <span className="label-text  text-black ml-10">Bobot</span>
                    <input
                      type="text"
                      className="input border-2 border-inherit  bg-inherit  w-1/4 ml-5"
                    /> 
              </label>

              <label className="label">
                <span className="label-text  text-black">Hari</span>
                <input
                  type="text"
                  className="input border-2 border-inherit bg-inherit  w-3/4 ml-40"
                />
                 <span className="label-text  text-black ml-10">Bobot</span>
                    <input
                      type="text"
                      className="input border-2 border-inherit  bg-inherit  w-1/4 ml-5"
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
                                        setData({
                                            ...data,
                                            id: e.target.value
                                        })
                                    }
                                >
                                    <option value="default">- Pilih Area Wisata -</option>
                                    {props.areawisata.map((jk, index) => {
                                        return (
                                        <option 
                                        value={jk.id} 
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
                                        setData({
                                            ...data,
                                            id: e.target.value
                                        })
                                    }
                                >
                                    <option value="default">- Pilih Area Wisata -</option>
                                    {props.budget.map((jk, index) => {
                                        return (
                                        <option 
                                        value={jk.id} 
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
              onClick={() => setShowModal(true)}>
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
