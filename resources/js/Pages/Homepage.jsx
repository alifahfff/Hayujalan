import React, { useState } from "react";
import { BiLoader, BiCheck, BiX, BiLoaderCircle } from "react-icons/bi";
import Layout from "@/Layouts/Layout";


export default function Homepage(props) {
  return (
    <div className="max-h-screen w-full bg-abu">
      <div className="flex">
        <div className="grow h-14 p-6">
          <div className="flex justify-between ">
            <a className="text-2xl font-bold text-black">Dashboard</a>
          </div>
          <div className="mt-4 bg-white shadow-xl ring-1 ring-gray-900/5">
            <div className="p-4 bg-blue border-b border-gray-200"></div>
            <div className="p-6 bg-white border-b border-gray-200">
              <a className="font-semibold">Status Quotation</a>
              <div className="grid gap-4 sm:grid-cols-3 sm:gap-1 pt-5">
                <div className= "grow stats shadow mr-10 bg-hijau">
                  <div className="stat">
                    <div className="flex justify-between">
                      <div className="grow stat-figure text-4xl w-1/5"><BiCheck color="white"/></div>
                      <div className="grow stat-title mt-2 ml-2 text-white">Quotation Diterima</div>
                    </div>
                    <div className="grow stat-value ml-2 text-white"></div>
                  </div>
                </div>
                <div className= "grow stats shadow mr-10 bg-merah">
                  <div className="stat">
                    <div className="flex justify-between">
                      <div className="grow stat-figure text-4xl w-1/5"><BiX color="white"/></div>
                      <div className="grow stat-title mt-2 ml-2 text-white">Quotation Ditolak</div>
                    </div>
                    <div className="grow stat-value ml-2 text-white"></div>
                  </div>
                </div>
                <div className= "grow stats shadow mr-10 bg-abu2">
                  <div className="stat">
                    <div className="flex justify-between">
                      <div className="grow stat-figure text-4xl w-1/5"><BiLoader color="white"/></div>
                      <div className="grow stat-title mt-2 ml-2 text-white">Menunggu Quotation</div>
                    </div>
                    <div className="grow stat-value ml-2 text-white"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Homepage.layout = page => <Layout children={page}/>