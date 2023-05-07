import React, { useState } from 'react';
import { Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';
import NewsLists from '@/Components/Homepage/NewsLists';
import Paginator from '@/Components/Homepage/Paginator';
import Pagination from '@/Components/Pagination';
import { BsPlusSquare } from "react-icons/bs";
import TKtour from '@/Components/Item Quotation/Kategori Tour/TKtour';
import ModalKTour from '@/Components/Item Quotation/Kategori Tour/ModalKTour';


export default function KategoriTour(props) {
    const [dataList, setDataList] = useState([
        {
            id:'KT001',
            kategori:'Industrial Visit',
            persentase:'7%',
        },
        {
            id:'KT002',
            kategori:'Industrial Visit-polban',
            persentase:'7%',
        },
        {
            id:'KT003',
            kategori:'Family Gathering',
            persentase:'10%',
        },
        {
            id:'KT004',
            kategori:'Company Gathering',
            persentase:'12%',
        },
    ])

    const [showModal, setShowModal] = useState(false);
    
    const handleOnClose = () => setShowModal(false);

  return (
    <div className='min-h-screen bg-abu'>
            {/* Nabvar */}
            <Navbar user={props.auth.user} />

            {/* Content */}
            <div className='ml-6'>
                <a>Kategori Tour</a>
            </div>
            <div className='flex justify-between m-6 mt-2 mb-3'>
                <a className='text-2xl font-bold text-black'>Kategori Tour</a>
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
                        <TKtour data={dataList}/>
                        <div className='m-2 flex justify-between items-center'>
                        <a className='text-[10px] text-black'>Showing 1 - 4 of 10</a>
                        <Pagination/>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modals Tambah Data */}
            <ModalKTour onClose={handleOnClose} visible={showModal}/>
        </div>
  )
}