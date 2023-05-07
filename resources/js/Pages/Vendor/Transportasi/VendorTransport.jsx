import React, { useState } from 'react';
import { Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';
import NewsLists from '@/Components/Homepage/NewsLists';
import Paginator from '@/Components/Homepage/Paginator';
import Transportasi from '@/Components/Vendor/Transportasi/Transportasi';
import Pagination from '@/Components/Pagination';
import { BsPlusSquare } from "react-icons/bs";
import ModalTransport from '@/Components/Vendor/Transportasi/ModalTransport';


export default function VendorTransport (props) {
    const [transportList, settransportList] = useState([
        {
            id:'TR001',
            area:'Bandung',
            jenis:'Bus', 
            statusJenis:'',
            nama:'Primajasa',
            alamat:'jl.Bengawan',
            telponTransport:'084829213',
            picTransport:'alifah',
            noPIC:'0895635018789',
            tahun:'2019',
            kapasitas:'50',
            ketersediaanUnit:'',
            hargaSewaWeekendDalKot:'',
            hargaSewaWeekdayDalKot:'',
            hargaSewaWeekendLukot:'',
            hargaSewaWeekdayLukot:'',
            urlInterior:'',
            urlEksterior:''
        },
        {
            id:'TR001',
            area:'Bandung',
            jenis:'Bus', 
            statusJenis:'',
            nama:'Primajasa',
            alamat:'jl.Bengawan',
            telponTransport:'084829213',
            picTransport:'alifah',
            noPIC:'0895635018789',
            tahun:'2019',
            kapasitas:'50',
            ketersediaanUnit:'',
            hargaSewaWeekendDalKot:'',
            hargaSewaWeekdayDalKot:'',
            hargaSewaWeekendLukot:'',
            hargaSewaWeekdayLukot:'',
            urlInterior:'',
            urlEksterior:''   

        },
    ])

    const [showModal, setShowModal] = useState(false);
    
    const handleOnClose = () => setShowModal(false);
    
  return (
    <div className='min-h-screen bg-abu'>
        {/* Navbar */}
            <Navbar user={props.auth.user} />
        
        {/* Content */}
            <div className='ml-6'>
                <a>Data Transportasi</a>
            </div>
            <div className='flex justify-between m-6 mt-2 mb-3'>
                <a className='text-2xl font-bold text-black'>Data Transportasi</a>
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
                        <Transportasi transportasi={transportList}/>
                        <div className='m-2 flex justify-between items-center'>
                        <a className='text-[10px] text-black'>Showing 1 - 4 of 10</a>
                        <Pagination/>
                        </div>
                    </div>
                </div>
            </div>

            <ModalTransport onClose={handleOnClose} visible={showModal}/>
        </div>
  )
}