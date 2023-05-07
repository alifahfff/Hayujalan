import React, { useState } from 'react';
import { Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';
import Pagination from '@/Components/Pagination';
import { BsPlusSquare } from "react-icons/bs";
import TEvent from '@/Components/Item Quotation/Data Event/TEvent';
import ModalEvent from '@/Components/Item Quotation/Data Event/ModalEvent';

export default function DataEvent(props) {
    const [dataList, setDataList] = useState([
        {
            id:'EV001',
            event:'Industrial Visit',
            biaya:'Rp.150.000',
            status:'/set',
        },
        {
            id:'EV001',
            event:'Industrial Visit',
            biaya:'Rp.150.000',
            status:'/set',
        },
        {
            id:'EV001',
            event:'Industrial Visit',
            biaya:'Rp.150.000',
            status:'/set',
        },
        {
            id:'EV001',
            event:'Industrial Visit',
            biaya:'Rp.150.000',
            status:'/set',
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
                <a>Data Event</a>
            </div>
            <div className='flex justify-between m-6 mt-2 mb-3'>
                <a className='text-2xl font-bold text-black'>Data Event</a>
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
                        <TEvent data={dataList}/>
                        <div className='m-2 flex justify-between items-center'>
                        <a className='text-[10px] text-black'>Showing 1 - 4 of 10</a>
                        <Pagination/>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modals Tambah Data */}
            <ModalEvent onClose={handleOnClose} visible={showModal}/>
        </div>
  )
}