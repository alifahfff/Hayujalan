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
    <div className="min-h-screen bg-abu">
      {/* Nabvar */}
      <Navbar user={props.auth.user} />

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
          <div className="flex flex-col p-6">
            <a className="mr-5 mt-2 text-black font-bold mb-4">Quotation</a>
            <div className="flex flex-row">
              <ul className="text-black font-medium space-y-8">
              <input
                  type="text"
                  className="input input-bordered w-1/2 bg-inherit shadow-md"
                />
                <li>Nama Klien</li>
                <li>Paket</li>
                <li>Jumlah Orang</li>
                <li>Hari</li>
                <li>Area Wisata</li>
              </ul>
              <div className=" flex flex-col space-y-2">
                <input
                  type="text"
                  className="input input-bordered w-full bg-inherit shadow-md"
                />
                <select className="select w-full max-w-xs bg-inherit shadow-md">
                  <option disabled selected>
                    Pilih Paket
                  </option>
                  <option>Homer</option>
                  <option>Marge</option>
                  <option>Bart</option>
                  <option>Lisa</option>
                  <option>Maggie</option>
                </select>
                <input
                  type="text"
                  className="input input-bordered max-w-xs bg-inherit shadow-md"
                />
                <input
                  type="text"
                  className="input input-bordered max-w-xs bg-inherit shadow-md"
                />
                <select className="select w-full max-w-xs bg-inherit shadow-md">
                  <option disabled selected>
                    Pilih Area Wisata
                  </option>
                  <option>Homer</option>
                  <option>Marge</option>
                  <option>Bart</option>
                  <option>Lisa</option>
                  <option>Maggie</option>
                </select>
                <button className="btn btn-accent">Button</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Quotations.layout = page => <Layout children={page}/>