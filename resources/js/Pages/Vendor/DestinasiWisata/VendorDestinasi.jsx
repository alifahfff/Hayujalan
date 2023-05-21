import React, { useState } from 'react';
import { Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';
import NewsLists from '@/Components/Homepage/NewsLists';
import Paginator from '@/Components/Homepage/Paginator';
import DestinasiWisata from '@/Components/Vendor/Destinasi/DestinasiWisata';
import Pagination from '@/Components/Pagination';
import { BsPlusSquare } from "react-icons/bs";
import ModalDestinasi from '@/Components/Vendor/Destinasi/ModalDestinasi';
import Layout from '@/Layouts/Layout';


export default function VendorArea (props) {
    console.log('data', props)
    // const [destinasiList, setdestinasiList] = useState([
    //     {
    //         id:'AW001',
    //         area:'Bandung',    
    //         nama: 'Floating Market',
    //         alamat: 'Jl.Lembang',
    //         kapasitas: '500',
    //         kapasitasParkir: '3',
    //         noTelpDestinasi:'0897261713',
    //         picDestinasi: 'Yoga',
    //         noHpPIC: '0897655272',
    //         rangePeserta: '',
    //         tiketMasukWeekday: '',
    //         tiketMasukWeekend: '',
    //     },
    //     {
    //         id:'AW002',
    //         area:'Jakarta',    
    //         nama: 'Dufan',
    //         alamat: 'Jl.Ancol',
    //         kapasitas: '500',
    //         kapasitasParkir: '5',
    //         noTelpDestinasi:'0897261713',
    //         picDestinasi: 'Nova',
    //         noHpPIC: '0897655272',
    //         rangePeserta: '',
    //         tiketMasukWeekday: '',
    //         tiketMasukWeekend: '',   

    //     },
    // ])

    const [showModal, setShowModal] = useState(false);
    
    const handleOnClose = () => setShowModal(false);
    
  return (
    <div className='min-h-screen bg-abu'>
        {/* Content */}
            <div className='ml-6'>
                <a>Data Destinasi Wisata</a>
            </div>
            <div className='flex justify-between m-6 mt-2 mb-3'>
                <a className='text-2xl font-bold text-black'>Data Destinasi Wisata</a>
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
                        {/* <DestinasiWisata destinasi={destinasiList}/> */}
                        <div className='m-2 flex justify-between items-center'>
                        <a className='text-[10px] text-black'>Showing 1 - 4 of 10</a>
                        {/* <Pagination/> */}
                        </div>
                    </div>
                </div>
            </div>

            <ModalDestinasi onClose={handleOnClose} visible={showModal}/>
        </div>
  )
}

VendorDestinasi.layout = page => <Layout children={page}/>