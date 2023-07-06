import React from "react";
import ModalCrew from "@/Components/Item Quotation/Crew/ModalCrew";
import Layout from "@/Layouts/Layout";
import number from "@/Components/number";
import { BsPencilSquare, BsTrash3 } from "react-icons/bs";
import { Link } from "@inertiajs/inertia-react";

export default function QuotationsRecomendResult(props, crewL) {
  // const {data} = this.props.location;
  console.log("props", props);
  return (
    <div className="min-h-screen bg-abu ">
      {/* Content */}
      <div className="ml-6">
      <div class="text-sm breadcrumbs">
        <ul>
          <li><Link href={route('quotationrecomend')}>
          Quotation Rekomendasi
          </Link></li>
          <li>Hasil Rekomendasi</li>
        </ul>
      </div>
      </div>
      <div className="flex justify-between m-6 mt-2 mb-3">
        <a className="text-2xl font-bold text-black">Hasil Rekomendasi</a>
      </div>
      <div className="relative bg-white shadow-xl m-6 mt-3 md:max-xl:flex ring-1 ring-gray-900/5">
        <div className="p-4 bg-kuning border-b border-gray-200"></div>
        <div className="bg-white border-b border-gray-200">
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm text-black">
                    <thead className="border-b bg-abu font-medium dark:border-neutral-500 dark:text-neutral-800">
                        <tr>
                        <th scope="col" className="px-6 py-4">Ranking</th>
                        <th scope="col" className="px-6 py-4">Nama Paket</th>
                        <th scope="col" className="px-6 py-4">Area Wisata</th>
                        <th scope="col" className="px-6 py-4">Kategori Wisata</th>
                        <th scope="col" className="px-6 py-4">Durasi Project</th>
                        <th scope="col" className="px-6 py-4">Jumlah Orang</th>
                        <th scope="col" className="px-6 py-4">Selling Price</th>
                        <th scope="col" className="px-6 py-4">Similarity</th>
                        <th scope="col" className="px-6 py-4">Aksi</th>
                        </tr>
                    </thead>
                    {props.data.map((dt, index) => {
                        // console.log('cr', cr)
                        return (
                            <tbody key={index}>
                                <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                                <td className="whitespace-nowrap px-6 py-4">{dt.namaProject}</td>
                                <td className="whitespace-nowrap px-6 py-4">{dt.namaArea}</td>
                                <td className="whitespace-nowrap px-6 py-4">{dt.namaKategoriTour}</td>
                                <td className="whitespace-nowrap px-6 py-4">{dt.durasiProject}</td>
                                <td className="whitespace-nowrap px-6 py-4">{dt.qty}</td>
                                <td className="whitespace-nowrap px-6 py-4">Rp. {number(dt.sellingPrice)},-</td>
                                <td className="whitespace-nowrap px-6 py-4 text-hijau">{dt.similarity}</td>
                                <td className="whitespace-nowrap px-6 py-4 justify-item-center">
                                  <Link href={route('detail.qrecomend', { id: dt.idQuotatioRekomendasi })} method="get">
                                    <button className="btn btn-ghost btn-sm mr-2">
                                      <BsPencilSquare/>
                                    </button>
                                  </Link>
                                </td>
                                </tr>
                            </tbody>
                        )
                    })}
                    </table>
                </div>
                </div>
            </div>

            {/* Modals Tambah Data
            <ModalFTour 
                onClose={() => {
                handleOnClose()
                }} 
                visible={showModal}
                data={dataL}
            />

            <ModalDeleteFTr
                onClose={() => {
                handleOnCloseD()
                }} 
                visible={showDelete}
                data={dataL}
            /> */}
        </div>
        </div>
      </div>
    </div>
  );
}

QuotationsRecomendResult.layout = (page) => <Layout auth={page.props.auth} errors={page.props.errors}>{page}</Layout>;
