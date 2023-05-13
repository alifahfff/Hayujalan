import React, { useState } from 'react';
import { Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';
import NewsLists from '@/Components/Homepage/NewsLists';
import Paginator from '@/Components/Homepage/Paginator';
import Crew from '@/Components/Item Quotation/Crew/Crew';
import Pagination from '@/Components/Pagination';
import { BsPlusSquare } from "react-icons/bs";
import ModalBonus from '@/Components/Item Quotation/Data Bonus/ModalBonus';
import TReport from '@/Components/Report/TReport';
import Search from '@/Components/Hak Akses/Search';
import Layout from '@/Layouts/Layout';

export default function Report(props) {
    const [dataList, setDataList] = useState([
        {
            id:'Q001',
            klien: 'Nina',
            quotation:'Perjalanan ke Jogja',
            total:'Rp.799.000',
            pic: 'Nini',
            status:'Diterima',
            date:'12 Maret 2023'
        },
        {
            id:'Q001',
            klien: 'Nina',
            quotation:'Perjalanan ke Jogja',
            total:'Rp.799.000',
            pic: 'Nini',
            status:'Diterima',
            date:'12 Maret 2023'
        },
        {
            id:'Q001',
            klien: 'Nina',
            quotation:'Perjalanan ke Jogja',
            total:'Rp.799.000',
            pic: 'Nini',
            status:'Diterima',
            date:'12 Maret 2023'
        },
        {
            id:'Q001',
            klien: 'Nina',
            quotation:'Perjalanan ke Jogja',
            total:'Rp.799.000',
            pic: 'Nini',
            status:'Diterima',
            date:'12 Maret 2023'
        },
    ])

    const [showModal, setShowModal] = useState(false);
    
    const handleOnClose = () => setShowModal(false);

  return (
    <div className='min-h-screen bg-abu'>
            {/* Content */}
            <div className='ml-6'>
                <a>Laporan Quotation</a>
            </div>
            <div className='flex justify-between m-6 mt-2 mb-3'>
                <a className='text-2xl font-bold text-black'>Laporan Quotation</a>
                <div className='flex flex-row'>
                    <Search/>
                    <button 
                    onClick={() => setShowModal(true)}
                    className="btn ml-2 gap-2 btn-outline px-5 bg-white hover:bg-gray-100 text-[#C1C0BF]"
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
                        <TReport data={dataList}/>
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

Report.layout = page => <Layout children={page}/>