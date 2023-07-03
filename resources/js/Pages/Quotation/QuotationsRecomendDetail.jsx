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
import number from "@/Components/number";
import { usePage } from '@inertiajs/inertia-react';
import MyPDFViewer from "./QuotationPDFView";
import { Link } from "@inertiajs/inertia-react";

export default function QuotationsResult(props) {
  // const { props } = usePage()
  // const {data} = this.props.location;
  const id = props.data.id;
  console.log("Cr", props);
  console.log("id", props.data.id);
  return (
    <div className="min-h-screen bg-abu ">
      {/* Content */}
      <div className="ml-6">
      <div class="text-sm breadcrumbs">
        <ul>
          <li><Link href={route('quotationrecomend')}>
          Quotation Rekomendasi
          </Link></li>
          <li><Link href={route('hasil.qrecomend')}>
          Hasil Rekomendasi
          </Link></li>
          <li>Quotation ID{props.data.quotation.idQuotationTour}</li>
        </ul>
      </div>
      </div>
      <div className="flex justify-between m-6 mt-2 mb-3">
        <a className="text-2xl font-bold text-black">Quotation ID{props.data.quotation.idQuotationTour}</a>
      </div>
      <div className="relative bg-white shadow-xl m-6 mt-3 md:max-xl:flex ring-1 ring-gray-900/5">
        <div className="p-4 bg-kuning border-b border-gray-200"></div>
        <div className="bg-white border-b border-gray-200">
          <div className="flex flex-row">
            <div className="flex flex-col pl-5 pt-6 pb-8">
              {/* <img
                src="/assets/touritenary.jpeg"
                alt=""
                className="max-w-md max-h-md border-2"
              /> */}
              <MyPDFViewer data={props}/>
              <div className="flex justify-center mt-6">
                <button
                  className="btn bg-gray-400 text-white border-0"
                  style={{ maxWidth: "8rem" }}
                >
                  <Link href={route('qmanual.edit')} method="get" data={{id: props.data.idQuotatioRekomendasi}}>
                    Edit Mode
                  </Link>
                </button>
              </div>
            </div>
                <div className="flex flex-col">
                  <div className="flex flex-row">
                    <div className="flex flex-col pl-5 pt-6 pb-8">
                      <a className="text-3xl font-bold text-black mb-6">
                        Quotation ID{props.data.quotation.idQuotationTour}
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
                        <label className="label">
                          <span className="label-text text-black">Area Wisata</span>
                        </label>
                        <label className="label">
                          <span className="label-text text-black">Kategori Wisata</span>
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
                          {props.data.quotation.klien.namaKlien}
                          </span>
                        </label>
                        <label className="label">
                          <span className="label-text text-black">{props.data.quotation.namaProject}</span>
                        </label>
                        <label className="label">
                          <span className="label-text text-black">
                          {props.data.quotation.qty}
                          </span>
                        </label>
                        <label className="label">
                          <p className="label-text text-black">{props.data.quotation.areawisata.namaArea}</p>
                        </label>
                        <label className="label">
                          <span className="label-text text-black">{props.data.quotation.kategori.namaKategoriTour}</span>
                        </label>
                        <label className="label">
                          <span className="label-text text-black">
                          Rp.{number(props.data.q_transaksi.sellingPrice)}/pax
                          </span>
                        </label>
                        <label className="label">
                          <span className="label-text text-black">Rp.{number(props.data.q_transaksi.totalPrice)},-</span>
                        </label>
                      </form>
                    </div>
                  </div>
                  <div
                    className="flex justify-center gap-6 pb-10"
                  >
                    
                    {/* <button className="btn btn-warning text-white px-8">PDF</button> */}
                    <PDFDownloadLink document={<PDFFile data={props}/>} fileName="FORM">
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
          </div>
        </div>
      </div>
    </div>
  );
}

QuotationsResult.layout = (page) => <Layout children={page} />;
