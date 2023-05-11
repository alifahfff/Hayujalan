import React, { useState } from "react";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import NewsLists from "@/Components/Homepage/NewsLists";
import Paginator from "@/Components/Homepage/Paginator";
import Status from "@/Components/Dashboard/Status";
import { BsX, BsCheck, BsPlusSquare } from "react-icons/bs";
import { BiLoader, BiCheck, BiX, BiLoaderCircle } from "react-icons/bi";
import Sidebar from "@/Components/Sidebar";

export default function Homepage(props) {
  const [statusList, setStatusList] = useState([
    {
      color: "green",
      icon: <BiCheck />,
      name: "Penawaran yang diterima",
      total: "10",
    },
    {
      color: "red",
      icon: <BiX />,
      name: "Penawaran yang ditolak",
      total: "2",
    },
    {
      color: "grey",
      icon: <BiLoader />,
      name: "Menunggu",
      total: "3",
    },
  ]);

  return (
    <>
      <div className="max-h-screen bg-white">
        <div>
          <Navbar />
          <div className="flex">
            <Sidebar />
            <div className="p-6">
              <div className="flex justify-between ">
                <a className="text-2xl font-bold text-black">Dashboard</a>
              </div>
              <div className="flex justify-end">
                <div className="mt-6">
                  <button
                    onClick={() => setShowModal(true)}
                    className="btn gap-2 btn-outline rounded-full btn-sm px-5 bg-white hover:bg-gray-100 text-[#C1C0BF]"
                  >
                    Tambah Data | <BsPlusSquare />
                  </button>
                </div>
              </div>
              <div className="mt-4 bg-white shadow-xl ring-1 ring-gray-900/5">
                <div className="p-4 bg-blue border-b border-gray-200"></div>
                <div className="p-6 bg-white border-b border-gray-200">
                  <a>Status Quotation</a>
                  <div className="flex flex-row">
                    {statusList.map((st, index) => {
                      return <Status key={index} status={st} />;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          
    </>
  );
}
