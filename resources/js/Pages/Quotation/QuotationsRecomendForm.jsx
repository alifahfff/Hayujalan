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
        <a>Quotation Recomendation</a>
      </div>
      <div className="flex justify-between m-6 mt-2 mb-3">
        <a className="text-2xl font-bold text-black">Quotation Recomendation</a>
      </div>
      <div className="relative bg-white shadow-xl m-6 mt-3 md:max-xl:flex ring-1 ring-gray-900/5">
        <div className="p-4 bg-kuning border-b border-gray-200"></div>
        <div className="bg-white border-b border-gray-200">
          <div className="flex flex-row px-5 pt-6 pb-6">
            <a className="mr-5 mt-2 text-black font-bold mb-4">
              Recomendation Quotation
            </a>
            <div className="flex" style={{ marginLeft: "60rem" }}>
              <button
                className="btn bg-gray-400 text-white border-0"
                style={{ maxWidth: "8rem" }}
              >
                edit mode
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col px-11 pt-6 pb-6">
              <img
                src="/assets/touritenary.jpeg"
                alt=""
                className="max-w-md max-h-md border-2 mb-4"
              />
              <a className="mr-5 mt-2 text-black font-bold mb-4 text-center">
                Quotation ID001
              </a>
              <div className="flex justify-between">
                <button className="btn btn-warning text-white border-0 px-20">
                  view
                </button>
                <button className="btn bg-green-600 text-white border-0 px-20">
                  edit
                </button>
              </div>
            </div>
            <div className="flex flex-col px-11 pt-6 pb-6">
              <img
                src="/assets/touritenary.jpeg"
                alt=""
                className="max-w-md max-h-md border-2 mb-4"
              />
              <a className="mr-5 mt-2 text-black font-bold mb-4 text-center">
                Quotation ID001
              </a>
              <div className="flex justify-between">
                <button className="btn btn-warning text-white border-0 px-20">
                  view
                </button>
                <button className="btn bg-green-600 text-white border-0 px-20">
                  edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Quotations.layout = (page) => <Layout children={page} />;

<div className="flex flex-row">
  <div className="flex flex-col px-11 pt-6 pb-6"></div>
</div>;
