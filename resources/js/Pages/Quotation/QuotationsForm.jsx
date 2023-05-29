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
import { AiFillPlusSquare } from "react-icons/ai";
import { useState } from "react";
export default function Quotations(props, crewL) {
  // const {data} = this.props.location;
  console.log("CrewL", crewL);

  const [formFileds, setFormFields] = useState([
    {
      destinasi: "",
      keterangan: "",
      hargasatuan: "",
      satuan: "",
      jumlah: "",
      qty: "",
      hari: "",
    },
  ]);

  const handleFormChange = (event, index) => {
    let data = [...formFileds];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const submit = () => {
    e.preventDefault();
    console.log;
  };

  const addFields = () => {
    let object = {
      destinasi: "",
      keterangan: "",
      hargasatuan: "",
      satuan: "",
      jumlah: "",
      qty: "",
      hari: "",
    };
    setFormFields([...formFileds, object]);
  };

  const removeFields = (index) => {
    let data = [...formFileds];
    data.splice(index, 1);
    setFormFields(data);
  };

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
            <a className="mr-5 mt-2 text-black font-bold mb-4">Quotation</a>
            <div className="divide-y">
              <div className="flex flex-col">
                <label className="label mb-5">
                  <span className="label-text text-black">Nama Klien</span>
                  <input
                    type="text"
                    className="input border-2 border-inherit  bg-inherit"
                  />
                </label>

                <label className="label mb-5">
                  <span className="label-text  text-black">Paket</span>
                  <select className="select  bg-inherit border-2 border-inherit px-20">
                    <option disabled selected>
                      Pilih Paket
                    </option>
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                  </select>
                </label>

                <label className="label mb-5">
                  <span className="label-text  text-black">Jumlah Orang</span>
                  <input
                    type="text"
                    className="input border-2 border-inherit bg-inherit"
                  />
                </label>

                <label className="label mb-5">
                  <span className="label-text  text-black">Hari</span>
                  <input
                    type="text"
                    className="input border-2 border-inherit bg-inherit"
                  />
                </label>

                <label className="label mb-5">
                  <span className="label-text  text-black ">Area Wisata</span>
                  <select className="select  bg-inherit border-2 border-inherit px-20">
                    <option disabled selected>
                      Pilih Paket
                    </option>
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                  </select>
                </label>
              </div>
            </div>

            {formFileds.map((form, index) => {
              return (
                <>
                  <div className="flex justify-between mb-5">
                    <label>
                      <span
                        className="label-text  text-black mr-5"
                        name="destinasi"
                      >
                        Destinasi Wisata
                      </span>
                      <select className="select bg-inherit border-2 border-inherit w-full">
                        <option disabled selected>
                          Pilih Paket
                        </option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                      </select>
                    </label>

                    <label>
                      <p
                        className="label-text  text-black text-right   mr-5"
                        name="keterangan"
                      >
                        Keterangan
                      </p>
                      <input
                        className="input border-2 border-inherit bg-inherit w-full"
                        type="text"
                      />
                    </label>
                  </div>

                  <div className="flex flex-row">
                    <label>
                      <p className="label-text text-black text-center">
                        Harga Satuan
                      </p>
                      <input
                        type="text"
                        className="input border-2 border-inherit bg-inherit mr-3 "
                        style={{ width: "8rem" }}
                      />
                    </label>
                    <label>
                      <p className="label-text text-black text-center">Baru</p>
                      <input
                        type="text"
                        className="input border-2 border-inherit bg-inherit mr-3"
                        style={{ width: "8rem" }}
                      />
                    </label>
                    <label>
                      <p className="label-text text-black text-center">
                        Jumlah
                      </p>
                      <input
                        type="text"
                        className="input border-2 border-inherit bg-inherit mr-3"
                        style={{ width: "8rem" }}
                      />
                    </label>
                    <label>
                      <p className="label-text text-black text-center">Qty</p>
                      <input
                        type="text"
                        className="input border-2 border-inherit bg-inherit mr-3"
                        style={{ width: "8rem" }}
                      />
                    </label>
                    <label>
                      <p className="label-text text-black text-center">Hari</p>
                      <input
                        type="text"
                        className="input border-2 border-inherit bg-inherit mr-3"
                        style={{ width: "8rem" }}
                      />
                    </label>

                    <label className="label space-x-1 mt-3">
                      <button
                        className="btn btn-warning  text-white border-0 btn-md"
                        onClick={removeFields}
                      >
                        remove
                      </button>
                      <button
                        className="btn bg-green-600 text-white border-0 btn-md"
                        onClick={addFields}
                      >
                        add
                      </button>
                    </label>
                  </div>
                </>
              );
            })}
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

Quotations.layout = (page) => <Layout children={page} />;
