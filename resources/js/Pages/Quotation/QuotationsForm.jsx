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

export default function Quotations(props, crewL) {
  // const {data} = this.props.location;
  console.log("CrewL", crewL);
  return (
    <div className="min-h-screen bg-abu ">
      {/* Content */}
      <div className="ml-6">
        <a>Quotation Manual</a>
      </div>
      <div className="flex justify-between m-6 mt-2 mb-3">
        <a className="text-2xl font-bold text-black">Quotation Manual</a>
      </div>
      <div className="relative bg-white shadow-xl m-6 mt-3 md:max-xl:flex ring-1 ring-gray-900/5">
        <div className="p-4 bg-kuning border-b border-gray-200"></div>
        <div className="bg-white border-b border-gray-200">
          <div className="flex flex-col px-11 pt-6 pb-8 ">
            <a className="mr-5 mt-2 text-black font-bold mb-4">Quotation</a>
            <form className=" space-y-6 font-semibold">
              <label className="label">
                <span className="label-text text-black">Nama Klien</span>
                <input
                  type="text"
                  className="input border-2 border-inherit  bg-inherit"
                  style={{ width: "40%", marginRight: "30rem" }}
                />
              </label>

              <label className="label">
                <span className="label-text  text-black">Paket</span>
                <select
                  className="select  bg-inherit border-2 border-inherit"
                  style={{ width: "40%", marginRight: "30rem" }}
                >
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

              <label className="label">
                <span className="label-text  text-black">Jumlah Orang</span>
                <input
                  type="text"
                  className="input border-2 border-inherit bg-inherit"
                  style={{ width: "40%", marginRight: "30rem" }}
                />
              </label>

              <label className="label">
                <span className="label-text  text-black">Hari</span>
                <input
                  type="text"
                  className="input border-2 border-inherit bg-inherit"
                  style={{ width: "40%", marginRight: "30rem" }}
                />
              </label>

              <label className="label">
                <span className="label-text  text-black ">Area Wisata</span>
                <select
                  className="select  bg-inherit border-2 border-inherit"
                  style={{ width: "40%", marginRight: "30rem" }}
                >
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

              <div className="flex justify-between">
                <div className="flex flex-row">
                  <label className="label">
                    <span
                      className="label-text  text-black"
                      style={{ marginRight: "7.5rem" }}
                    >
                      Destinasi Wisata
                    </span>
                    <select
                      className="select bg-inherit border-2 border-inherit "
                      style={{ width: "100%" }}
                    >
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

                  <label className="label" style={{ marginLeft: "15rem" }}>
                    <span
                      className="label-text  text-black"
                      style={{ marginRight: "5rem" }}
                    >
                      Keterangan
                    </span>
                    <input
                      className="input border-2 border-inherit bg-inherit"
                      style={{ width: "20rem" }}
                    />
                  </label>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <label className="label mr-2">
                    <span className="label-text  text-black mr-2">
                      Harga Satuan
                    </span>
                    <input
                      className="input border-2 border-inherit bg-inherit"
                      style={{ width: "8rem" }}
                    />
                  </label>
                  <label className="label mr-2">
                    <span className="label-text  text-black mr-5">Satuan</span>
                    <input
                      className="input border-2 border-inherit bg-inherit"
                      style={{ width: "8rem" }}
                    />
                  </label>
                  <label className="label mr-2">
                    <span className="label-text  text-black mr-5">Jumlah</span>
                    <input
                      className="input border-2 border-inherit bg-inherit"
                      style={{ width: "8rem" }}
                    />
                  </label>
                  <label className="label mr-2">
                    <span className="label-text  text-black mr-5">Qty</span>
                    <input
                      className="input border-2 border-inherit bg-inherit"
                      style={{ width: "8rem" }}
                    />
                  </label>
                  <label className="label mr-2">
                    <span className="label-text  text-black mr-5">Hari</span>
                    <input
                      className="input border-2 border-inherit bg-inherit"
                      style={{ width: "8rem" }}
                    />
                  </label>
                  <label className="label mr-2">
                    <button className="btn bg-green-600 text-white border-0 btn-md">
                      add
                    </button>
                  </label>
                </div>
              </div>
              <div>
                <button className="btn bg-primary text-white border-0 btn-md">
                  simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

Quotations.layout = (page) => <Layout children={page} />;

<div className="flex justify-center ">
  <label className="label">
    <a className="label-text  text-black ">Tempat Wisata</a>
    <select
      className="select  bg-inherit border-2 border-inherit w-full"
      style={{ marginLeft: "7.8rem" }}
    >
      <option disabled selected>
        Pilih Tempat Wisata
      </option>
      <option>Homer</option>
      <option>Marge</option>
      <option>Bart</option>
      <option>Lisa</option>
      <option>Maggie</option>
    </select>
  </label>
  <label className="label" style={{ marginLeft: "20rem" }}>
    <span className="label-text  text-black ">Tempat Wisata</span>
    <select
      className="select bg-inherit border-2 border-inherit"
      style={{ width: "149%" }}
    >
      <option disabled selected>
        Pilih Tempat Wisata
      </option>
      <option>Homer</option>
      <option>Marge</option>
      <option>Bart</option>
      <option>Lisa</option>
      <option>Maggie</option>
    </select>
  </label>
</div>;
