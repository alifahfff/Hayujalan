import React, { useState } from 'react';
import { Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';
import NewsLists from '@/Components/Homepage/NewsLists';
import Paginator from '@/Components/Homepage/Paginator';
import Crew from '@/Components/Item Quotation/Crew/Crew';
import Pagination from '@/Components/Pagination';
import { BsPlusSquare } from "react-icons/bs";
import ModalBonus from '@/Components/Item Quotation/Data Bonus/ModalBonus';
import TAkses from '@/Components/Hak Akses/TAkses';
import Search from '@/Components/Hak Akses/Search';

export default function Akses(props) {
    const [dataList, setDataList] = useState([
        {
            id:'AK001',
            nama:'Nina',
            email:'nina@gmai.com',
            role:'program',
            status:'active',
        },
        {
            id:'AK001',
            nama:'Nina',
            email:'nina@gmai.com',
            role:'program',
            status:'active',
        },
        {
            id:'AK001',
            nama:'Nina',
            email:'nina@gmai.com',
            role:'program',
            status:'active',
        },
        {
            id:'AK001',
            nama:'Nina',
            email:'nina@gmai.com',
            role:'program',
            status:'active',
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
                <a>Hak Akses</a>
            </div>
            <div className='flex justify-between m-6 mt-2 mb-3'>
                <a className='text-2xl font-bold text-black'>Hak Akses</a>
                <div className='flex flex-row'>
                    <button 
                    onClick={() => setShowModal(true)}
                    className="ml-2 btn gap-2 btn-outline px-5 bg-white hover:bg-gray-100 text-[#C1C0BF]"
                    >
                    Tambah Data | 
                    <BsPlusSquare/>
                    </button>
                </div>
            </div>
            <div className='relative bg-white shadow-xl m-6 mt-3 md:max-xl:flex ring-1 ring-gray-900/5'>
                <div className='p-4 bg-kuning border-b border-gray-200'></div>
                <div className='bg-white border-b border-gray-200'>
                    <div className=''>
                        <TAkses data={dataList}/>
                        <div className='m-2 flex justify-between items-center'>
                        <a className='text-[10px] text-black'>Showing 1 - 4 of 10</a>
                        {/* <Pagination/> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modals Tambah Data */}
            <ModalBonus onClose={handleOnClose} visible={showModal}/>
        </div>
  )
}