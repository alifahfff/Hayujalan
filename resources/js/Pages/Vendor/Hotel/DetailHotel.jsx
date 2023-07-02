import React, { useState } from 'react';
import { BsPlusSquare, BsThreeDots, BsPencilSquare, BsTrash3 } from "react-icons/bs";
import { Link } from "@inertiajs/inertia-react"
import TambahDetailHotel from '@/Components/Vendor/Hotel/TambahDetailHotel';
import Layout from '@/Layouts/Layout';
import DeleteDetail from '@/Components/Vendor/Hotel/DeleteDetail';
import ModalHotel from '@/Components/Vendor/Hotel/ModalHotel';
import number from "@/Components/number";
import { RiNumbersLine } from 'react-icons/ri';


export default function DetailHotel(props) {
    const [data, setData] = useState({
        namaJenisKamar: '',
        kapasitasKamar: '',
        qtyKetersediaanKamar: '',
        hargaSewaWeekdayPerKamar: '',
        hargaSewaWeekendPerKamar: '',
        idPenginapan : props.hotel.idPenginapan,
    })

    const [dataL, setDataL] = useState([])

    const [showModal, setShowModal] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);

    const handleOnClose = () => setShowModal(false);
    const handleOnCloseD = () => setShowDelete(false);
    const handleOnClosed = () => setShowUpdate(false);
    
  console.log('props', props)
  console.log('hotel', props.hotel)
  console.log('area', props.area)
  return (
    <div className='min-h-screen bg-abu'>
    {/* Content */}
        <div className='ml-6'>
            <a>Detail Data</a>
        </div>
        <div className='flex justify-between m-6 mt-2 mb-3'>
            <a className='text-2xl font-bold text-black'>{props.hotel.namaPenginapan}</a>
        </div>
        <div className='relative bg-white shadow-xl m-6 mt-3 md:max-xl:flex ring-1 ring-gray-900/5'>
            <div className='p-4 bg-kuning border-b border-gray-200'></div>
            <div className="row bg-white">
                            <button 
                                onClick={() => {
                                    setShowUpdate(true)
                                    setDataL(props.hotel)
                                }}
                                    className="btn gap-2 btn-outline btn-sm px-6 m-5 bg-white hover:bg-gray-100 text-[#C1C0BF] float-right"
                                    >
                                <BsPencilSquare/>Edit Data 
                            </button>
                        <div className="column pt-12 pb-6 pl-6 text-black text-m bg-abu">
                        <table>
                                    <tr>
                                        <td>Alamat Penginapan </td>
                                        <td>: {props.hotel.alamatPenginapan} </td>
                                    </tr>
                                    <tr>
                                            <td>Kapasitas Parkir Bus </td>
                                            <td>: {props.hotel.kapasitasParkirBusPenginapan}</td>
                                        </tr>
                                    <tr>
                                            <td>No Telpon </td>
                                            <td>: {props.hotel.tlpPenginapan}</td>
                                        </tr>
                                        <tr>
                                            <td>PIC transportasi </td>
                                            <td>: {props.hotel.picPenginapan} </td>
                                        </tr>
                                        <tr>
                                            <td>No PIC </td>
                                            <td>: {props.hotel.hpPicPenginapan}</td>
                                        </tr>
                                        <tr>
                                            <td>Link Gmaps </td>
                                            <td>: {props.hotel.linkGmapsPenginapan}</td>
                                        </tr>
                                        <tr>
                                            <td>Tanggal Berlaku Vendor </td>
                                            <td className='text-merah font-bold'>: {props.hotel.tglBerlakuPenginapan}</td>
                                        </tr>
                                </table>
                        </div>
                <div className="p-6 bg-white border-b border-gray-200">
                <div className='flex justify-between m-6 mt-2 mb-3'>
                    <a className='text-2xl font-bold text-black'></a>
                    <button 
                    onClick={() => {
                        setShowModal(true)
                        setDataL(data)
                    }}
                    className="btn gap-2 btn-outline rounded-full btn-sm px-5 bg-white hover:bg-gray-100 text-[#C1C0BF]"
                    >
                    Tambah Data | 
                    <BsPlusSquare/>
                    </button>
                </div>
                        <div className="column">
                            <table className="min-w-full text-left text-sm text-black">
                                <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:text-neutral-800">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">Jenis Kamar</th>
                                        <th scope="col" className="px-6 py-4">Kapasitas Kamar</th>
                                        <th scope="col" className="px-6 py-4">Ketersediaan Kamar</th>
                                        <th scope="col" className="px-6 py-4">Harga Sewa Weekend</th>
                                        <th scope="col" className="px-6 py-4">Harga Sewa Weekday</th>
                                        <th scope="col" className="px-6 py-4">Aksi</th>
                                    </tr>
                                </thead>
                                {props.detail.map((cr, index) => {
                                    // console.log('cr', cr)
                                    return (
                                        <tbody key={index}>
                                            <tr className="border-b dark:border-neutral-500">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">{cr.namaJenisKamar}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{cr.kapasitasKamar}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{cr.qtyKetersediaanKamar}</td>
                                            <td className="whitespace-nowrap px-6 py-4">Rp. {number(cr.hargaSewaWeekdayPerKamar)}</td>
                                            <td className="whitespace-nowrap px-6 py-4">Rp. {number(cr.hargaSewaWeekendPerKamar)}</td>
                                            <td className="whitespace-nowrap px-6 py-4 justify-item-center">
                                                <button 
                                                    onClick={() => {
                                                        setShowDelete(true)
                                                        setDataL(cr)
                                                    }}
                                                    className="btn btn-ghost btn-sm mr-2"
                                                ><BsTrash3/></button>
                                            </td>
                                            </tr>
                                        </tbody>
                                    )
                                })}
                            </table>
                        </div>
                    </div>
                </div>
        </div>

        <ModalHotel
            onClose={handleOnClosed} 
            visible={showUpdate}
            data={props.hotel}
            dataArea={props.area}
        />

        <TambahDetailHotel 
            onClose={handleOnClose} 
            visible={showModal}
            data={dataL}/>
        
        <DeleteDetail
            onClose={() => {
            handleOnCloseD()
            }} 
            visible={showDelete}
            data={dataL}/>
        
    </div>
  );
}

DetailHotel.layout = page => <Layout children={page}/>