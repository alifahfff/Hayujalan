import React, { useState } from 'react';
import { BsPlusSquare } from "react-icons/bs";
import ModalDestinasi from '@/Components/Vendor/Destinasi/ModalDestinasi';
import Layout from '@/Layouts/Layout';
import { Link } from "@inertiajs/inertia-react";

export default function DetailDestinasi(props) {
  console.log('detail', props)
//   console.log('detaildw', props.idAreaWisata.jenisPeserta)
  return (
    <div className='min-h-screen bg-abu'>
    {/* Content */}
        <div className='ml-6'>
            <a>Detail Data</a>
        </div>
        <div className='flex justify-between m-6 mt-2 mb-3'>
            <a className='text-2xl font-bold text-black'>{props.destinasi.namaDestinasiWisata}</a>
            <button 
            onClick={() => setShowModal(true)}
            className="btn gap-2 btn-outline rounded-full btn-sm px-5 bg-white hover:bg-gray-100 text-[#C1C0BF]"
            >
            Tambah Data | 
            <BsPlusSquare/>
            </button>
        </div>
        <div className='relative bg-white shadow-xl m-6 mt-3 md:max-xl:flex ring-1 ring-gray-900/5'>
            <div className='p-4 bg-kuning border-b border-gray-200'></div>
            <div className="flex justify-evenly row bg-white">
                        <div className="column p-6 text-black text-sm">
                        <table>
                                    <tr>
                                        <td>Kapasitas Pengunjung </td>
                                        <td>: {props.destinasi.kapasitasDestinasiWisata} </td>
                                    </tr>
                                    <tr>
                                        <td>Kapasitas Parkir Bus  </td>
                                        <td>: {props.destinasi.kapasitasParkirBus}</td>
                                    </tr>
                                    <tr>
                                        <td>Alamat  </td>
                                        <td>: {props.destinasi.alamatDestinasiWisata}</td>
                                    </tr>
                                    <tr>
                                            <td>No Telpon </td>
                                            <td>: {props.destinasi.tlpDestinasiWisata}</td>
                                        </tr>
                                        <tr>
                                            <td>PIC Destinasi </td>
                                            <td>: {props.destinasi.picDestinasiWisata} </td>
                                        </tr>
                                        <tr>
                                            <td>No PIC </td>
                                            <td>: {props.destinasi.hpDestinasiWisata}</td>
                                        </tr>
                                        <tr>
                                            <td>Link Gmaps </td>
                                            <td>: {props.destinasi.linkGmaps}</td>
                                        </tr>
                                </table>
                        </div>
                <div className="p-6 bg-white border-b border-gray-200">
                        <div className="column">
                            <table className="min-w-full text-left text-sm text-black">
                                <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:text-neutral-800">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">Range Peserta</th>
                                        <th scope="col" className="px-6 py-4">Tiket Masuk Weekday</th>
                                        <th scope="col" className="px-6 py-4">Tiket Masuk Weekend</th>
                                        <th scope="col" className="px-6 py-4">Aksi</th>
                                    </tr>
                                </thead>
                                {props.detail.map((cr, index) => {
                                    // console.log('cr', cr)
                                    return (
                                        <tbody key={index}>
                                            <tr className="border-b dark:border-neutral-500">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">{cr.jenisPeserta}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{cr.rangePeserta}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{cr.tiketMasukWeekday}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{cr.alamatDestinasiWisata}</td>
                                            <td className="whitespace-nowrap px-6 py-4 justify-item-center">
                                                {/* <button className="btn btn-ghost btn-sm mr-2">
                                                    <Link href={route('destinasiwisata.detail')} method="get" data={{id: cr.id}}>
                                                        <BsThreeDots/>
                                                    </Link>
                                                </button> */}
                                                {/* <button 
                                                    onClick={() => {
                                                        setShowModal(true)
                                                        setDataD(cr)
                                                    }}
                                                    className="btn btn-ghost btn-sm mr-2"
                                                ><BsThreeDots/></button> */}
                                            </td>
                                            </tr>
                                        </tbody>
                                    )
                                })}
                            </table>
                        </div>
                    </div>
                </div>

                <div>

                </div>
        </div>

        
    </div>
  );
}

DetailDestinasi.layout = page => <Layout children={page}/>