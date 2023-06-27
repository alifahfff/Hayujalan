import React, { useState } from 'react';
import { BsPlusSquare, BsTrash3 ,BsPencilSquare } from "react-icons/bs";
import { Link } from "@inertiajs/inertia-react"
import TambahDetailTransport from '@/Components/Vendor/Transportasi/TambahDetailTransport';
import Layout from '@/Layouts/Layout';
import DeleteDetail from '@/Components/Vendor/Transportasi/DeleteDetail';
import ModalTransport from '@/Components/Vendor/Transportasi/ModalTransport';


export default function DetailTransport(props) {
    const [data, setData] = useState({
        idTransportasi: props.transportasi.idTransportasi,
        idJenisTransportasi:'',
        nama: '', 
        tahun: '', 
        kapasitas: '', 
        qtyKetersediaan: '', 
        hargaSewaWeekendDalamKota: '',
        hargaSewaWeekdayDalamKota: '', 
        hargaSewaWeekendLuarKota: '', 
        hargaSewaWeekdayLuarKota: '',
        urlInterior: '', 
        urlEksterior: '',
    })
    const [dataL, setDataL] = useState([])

    const [showModal, setShowModal] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);
    
    const handleOnClose = () => setShowModal(false);
    const handleOnCloseD = () => setShowDelete(false);
    const handleOnClosed = () => setShowUpdate(false);

  console.log('props', props)
  console.log('transportasi', props.transportasi)
  console.log('area', props.area)
  return (
    <div className='min-h-screen bg-abu'>
    {/* Content */}
        <div className='ml-6'>
            <a>Detail Data</a>
        </div>
        <div className='flex justify-between m-6 mt-2 mb-3'>
            <a className='text-2xl font-bold text-black'>{props.transportasi.namaTransportasi}</a>
        </div>
        <div className='relative bg-white shadow-xl m-6 mt-3 md:max-xl:flex ring-1 ring-gray-900/5'>
            <div className='p-4 bg-kuning border-b border-gray-200'></div>
            <div className="row bg-white">
                                     <button 
                                        onClick={() => {
                                            setShowUpdate(true)
                                            setDataL(props.transportasi)
                                        }}
                                        className="btn gap-2 btn-outline btn-sm px-6 m-5 bg-white hover:bg-gray-100 text-[#C1C0BF] float-right"
                                        >
                                        <BsPencilSquare/>Edit Data 
                                    </button>
                        <div className="column pt-12 pb-6 pl-6 text-black text-m bg-abu">
                        <table>
                                    <tr>
                                        <td>Alamat Transportasi </td>
                                        <td>: {props.transportasi.alamatTransportasi} </td>
                                    </tr>
                                    <tr>
                                            <td>No Telpon </td>
                                            <td>: {props.transportasi.tlpTransportasi}</td>
                                        </tr>
                                        <tr>
                                            <td>PIC transportasi </td>
                                            <td>: {props.transportasi.picTransportasi} </td>
                                        </tr>
                                        <tr>
                                            <td>No PIC </td>
                                            <td>: {props.transportasi.hpPicTransportasi}</td>
                                        </tr>
                                        <tr>
                                            <td>Tanggal Berlaku Vendor </td>
                                            <td className='text-merah font-bold'>: {props.transportasi.tglBerlakuTransportasi}</td>
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
                            className="btn gap-2 btn-outline btn-sm px-5 bg-white hover:bg-gray-100 text-[#C1C0BF]"
                            >
                             <BsPlusSquare/>Tambah Data
                            </button>
                    </div>
                        <div className="column">
                            <table className="min-w-full text-left text-sm text-black">
                                <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:text-neutral-800">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">Jenis Transportasi</th>
                                        <th scope="col" className="px-6 py-4">Nama</th>
                                        <th scope="col" className="px-6 py-4">Tahun</th>
                                        <th scope="col" className="px-6 py-4">Kapasitas</th>
                                        <th scope="col" className="px-6 py-4">Ketersediaan Unit</th>
                                        <th scope="col" className="px-6 py-4">Aksi</th>
                                    </tr>
                                </thead>
                                {props.detail.map((cr, index) => {
                                    return (
                                        <tbody key={index}>
                                            <tr className="border-b dark:border-neutral-500">
                                            <td className="whitespace-nowrap px-6 py-4">{cr.jenis_transportasi.namaJenis}</td>
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">{cr.nama}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{cr.tahun}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{cr.kapasitas}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{cr.qtyKetersediaan}</td>
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

        <ModalTransport
            onClose={handleOnClosed} 
            visible={showUpdate}
            data={props.transportasi}
            dataArea={props.area}
        />

        <TambahDetailTransport 
        onClose={handleOnClose} 
        visible={showModal}
        data={dataL}
        dataJenis={props.jenis}/>
    
        <DeleteDetail 
            onClose={() => {
            handleOnCloseD()
            }} 
            visible={showDelete}
            data={dataL}/>

    </div>
  );
}

DetailTransport.layout = page => <Layout children={page}/>