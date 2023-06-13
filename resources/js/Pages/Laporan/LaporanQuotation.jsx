import React, { useState } from 'react';
import { BsPlusSquare } from "react-icons/bs";
import Layout from '@/Layouts/Layout';
import ModalReport from '@/Components/Report/ModalReport';

export default function LaporanQuotation (props) {
    console.log('props', props)
    const [data, setData] = useState({
        ketFasilitas: '', 
        biayaFasilitas: '', 
        satuan: '',
        jenis_klien: [{
            namaJenisKlien: '',
        }],
        jenis_klien_id: '',
    })
    
    const search = (key) => {
      console.log('key', key)
      Inertia.get(
        route(route().current()),
        { key },  {
            preserveState: true,
            replace: true,
        }
    );
    }

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
                
                {/* Search bar */}
                <form>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <BsSearch/>
                        </div>
                        <input 
                        type="search" 
                        className="input input-bordered bg-white pl-10"
                        placeholder="Search..."
                        onChange={(e) => search(e.target.value)} 
                        /> 
                    </div> 
                </form>
                
                {/* Tambah Data */}
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
                    {/* <TReport data={dataList}/> */}
                    <div className='m-2 flex justify-between items-center'>
                    <a className='text-[10px] text-black'>Showing 1 - 4 of 10</a>
                    {/* <Pagination/> */}
                    </div>
                </div>
            </div>
        </div>

        {/* Modals Tambah Data */}
        <ModalReport
        onClose={handleOnClose} 
        visible={showModal}
        />
    </div>
    )
}