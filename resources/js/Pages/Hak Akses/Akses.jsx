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
import Layout from '@/Layouts/Layout';
import ModalAkses from '@/Components/Hak Akses/ModalAkses';

export default function Akses(props) {
    console.log('cek', props)
    const [data, setData] = useState({
        idRoles: '',
        namaUser: '', 
        Email: '', 
        Password: '',
    })

    const [showModal, setShowModal] = useState(false);
    
    const handleOnClose = () => setShowModal(false);

  return (
    <div className='min-h-screen bg-abu'>
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
                     {/* Data */}
                     <div className=''>
                        <TAkses 
                        data={props.Mydata}
                        roles={props.roles}
                        // user={props.user}
                        />
                        <div className='m-2 flex justify-between items-center'>
                        {props.Mydata.data.length > 0 && (
                            <a className='text-[10px] text-black'>Showing {props.Mydata.from} - {props.Mydata.from + props.Mydata.data.length -1} of {props.Mydata.total}</a>
                         )} 
                         
                         {props.Mydata.data.length == 0 && (
                            <a className='text-[10px] text-black'>Showing {props.Mydata.total} data</a>
                         )}
                        <Pagination meta={props.Mydata}/>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modals Tambah Data */}
            <ModalAkses 
            onClose={handleOnClose} 
            visible={showModal}
            data={data}
            roles={props.roles}
            // user={props.user}
            />
        </div>
  )
}

Akses.layout = page => <Layout children={page}/>