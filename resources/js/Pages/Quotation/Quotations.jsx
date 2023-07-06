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
            <form className="max-w-3xl space-y-6 ">
              <label className="label">
                <span className="label-text text-black">Nama Klien</span>
                <input
                  type="text"
                  className="input border-2 border-inherit  bg-inherit  w-2/4 mr-52"
                />
              </label>

              <label className="label">
                <span className="label-text  text-black">Paket</span>
                <select className="select  bg-inherit border-2 border-inherit w-2/4 mr-52">
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
                  className="input border-2 border-inherit bg-inherit  w-2/4 mr-52"
                />
              </label>

              <label className="label">
                <span className="label-text  text-black">Hari</span>
                <input
                  type="text"
                  className="input border-2 border-inherit bg-inherit  w-2/4 mr-52"
                />
              </label>

              <label className="label">
                <span className="label-text  text-black ">Area Wisata</span>
                <select className="select  bg-inherit border-2 border-inherit w-2/4 mr-52">
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
            </form>
            <div>
              <button className="btn bg-green-600 text-white border-0 btn-md w-1/6 h-0 float-right">
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Quotations.layout = (page) => <Layout auth={page.props.auth} errors={page.props.errors}>{page}</Layout>;
