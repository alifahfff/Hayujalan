import React, { useState } from 'react';
import { Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';
import NewsLists from '@/Components/Homepage/NewsLists';
import Paginator from '@/Components/Homepage/Paginator';
import JenisTransportasi from '@/Components/Vendor/JenisTransport/JenisTransportasi';
import Pagination from '@/Components/Pagination';
import { BsPlusSquare } from "react-icons/bs";
import ModalJenisTransport from '@/Components/Vendor/JenisTransport/ModalJenisTransport';
import Layout from '@/Layouts/Layout';


export default function VendorJenisTransport (props) {
    const [data, setData] = useState({
        idCrewOperasional:'',
        namaJenis: '', 
        PenggunaanUnit: '', 
        MaxKapasitas: '',
    })

    const [showModal, setShowModal] = useState(false);
    
    const handleOnClose = () => setShowModal(false);

    console.log('props', props)
    
  return (
    <div className='min-h-screen bg-abu'>
        {/* Content */}
            <div className='ml-6'>
                <a>Data Jenis Transportasi</a>
            </div>
            <div className='flex justify-between m-6 mt-2 mb-3'>
                <a className='text-2xl font-bold text-black'>Data Jenis Transportasi</a>
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
                <div className='bg-white border-b border-gray-200'>
                    <div className=''>
                        <JenisTransportasi jenis={props.jenis} 
                        dataCrew={props.crew}/>
                        <div className='m-2 flex justify-between items-center'>
                        <a className='text-[10px] text-black'>Showing 1 - 4 of 10</a>
                        {/* <Pagination/> */}
                        </div>
                    </div>
                </div>
            </div>

            <ModalJenisTransport 
                onClose={handleOnClose} 
                visible={showModal}
                data={data}
                dataCrew={props.crew}/>
        </div>
  )
}

VendorJenisTransport.layout = page => <Layout children={page}/>