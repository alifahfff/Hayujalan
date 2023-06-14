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
import PDFFile from "./QuotationsPDF";
import { PDFDownloadLink } from "@react-pdf/renderer";

export default function Quotations(props) {
  // const {data} = this.props.location;
  console.log("Cr", props);
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
          <div className="flex flex-row">
            <div className="flex flex-col px-11 pt-6 pb-8">
              <img
                src="/assets/touritenary.jpeg"
                alt=""
                className="max-w-md max-h-md border-2"
              />
              <div className="flex justify-center mt-6">
                <button
                  className="btn bg-gray-400 text-white border-0"
                  style={{ maxWidth: "8rem" }}
                >
                  edit mode
                </button>
              </div>
            </div>
            {props.data.map((dt, index) => {
              return (
                <div className="flex flex-col">
                  <div className="flex flex-row">
                    <div className="flex flex-col px-11 pt-6 pb-8">
                      <a className="text-3xl font-bold text-black mb-6">
                        Quotation ID{dt.id}
                      </a>
                      <form className="space-y-3 font-medium text-left">
                        <label className="label">
                          <span className="label-text text-black mr-12">
                            Nama Klien
                          </span>
                        </label>
                        <label className="label">
                          <span className="label-text text-black">Paket</span>
                        </label>
                        <label className="label">
                          <span className="label-text text-black">
                            Jumlah Orang
                          </span>
                        </label>
                        {/* <label className="label">
                          <span className="label-text text-black">Area Wisata</span>
                        </label> */}
                        <label className="label">
                          <span className="label-text text-black">Hari</span>
                        </label>
                        <label className="label">
                          <span className="label-text text-black">Total</span>
                        </label>
                        <label className="label">
                          <span className="label-text text-black">
                            Total Keseluruhan
                          </span>
                        </label>
                      </form>
                    </div>

                    <div className="flex flex-col pt-24 pb-8">
                      <form className="space-y-3 font-medium text-left">
                        <label className="label">
                          <span className="label-text text-black mr-12">
                            -
                          </span>
                        </label>
                        <label className="label">
                          <span className="label-text text-black">{dt.quotation.klien.namaKlien}</span>
                        </label>
                        <label className="label">
                          <span className="label-text text-black">
                          {dt.namaQtransaksi}
                          </span>
                        </label>
                        <label className="label">
                          <p className="label-text text-black">{dt.quotation.qty}</p>
                        </label>
                        <label className="label">
                          <span className="label-text text-black">Yogyakarta</span>
                        </label>
                        <label className="label">
                          <span className="label-text text-black">
                          Rp.{dt.sellingPrice}/pax
                          </span>
                        </label>
                        <label className="label">
                          <span className="label-text text-black">{dt.totalPrice}</span>
                        </label>
                      </form>
                    </div>
                  </div>
                  <div
                    className="flex justify-center gap-6"
                    style={{ marginTop: "14rem" }}
                  >
                    
                    <button className="btn btn-warning text-white px-8">PDF</button>
                    <PDFDownloadLink document={<PDFFile />} fileName="FORM">
                    {({ loading }) =>
                      loading ? (
                        <button></button>
                      ) : (
                        <button className="btn btn-secondary">PDF</button>
                      )
                    }
                  </PDFDownloadLink>

                    <button className="btn btn-success text-white px-6">Excel</button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

Quotations.layout = (page) => <Layout children={page} />;
