import React, { useState } from 'react';
import { BsPlusSquare } from "react-icons/bs";
import TambahDetailTransport from '@/Components/Vendor/Transportasi/TambahDetailTransport';
import Layout from '@/Layouts/Layout';


export default function DetailTransport(props) {
    const [showModal, setShowModal] = useState(false);
    
    const handleOnClose = () => setShowModal(false);

  console.log('props', props)
  return (
    <div className='min-h-screen bg-abu'>
    {/* Content */}
        <div className='ml-6'>
            <a>Detail Data</a>
        </div>
        <div className='flex justify-between m-6 mt-2 mb-3'>
            <a className='text-2xl font-bold text-black'>{props.transportasi.namaTransportasi}</a>
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
                            </table>
                        </div>
                    </div>
                </div>
        </div>

        <TambahDetailTransport onClose={handleOnClose} visible={showModal}/>

    </div>
  );
}

DetailTransport.layout = page => <Layout children={page}/>