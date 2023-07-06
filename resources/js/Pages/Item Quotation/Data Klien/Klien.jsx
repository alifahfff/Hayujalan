import React, { useState } from 'react';
import { Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';
import NewsLists from '@/Components/Homepage/NewsLists';
import Paginator from '@/Components/Homepage/Paginator';
import Crew from '@/Components/Item Quotation/Crew/Crew';
import Pagination from '@/Components/Pagination';
import { BsPlusSquare, BsSearch } from "react-icons/bs";
import ModalCrew from '@/Components/Item Quotation/Crew/ModalCrew';
import TKlien from '@/Components/Item Quotation/Data Klien/TKlien';
import ModalKlien from '@/Components/Item Quotation/Data Klien/ModalKlien';
import Layout from '@/Layouts/Layout';
import { Inertia } from '@inertiajs/inertia';

export default function Klien(props) {
    // console.log('props', props)
    // console.log('data', props.Mydata.data)
    const [datas, setDatas] = useState({
        dataK: props.Mydata.data,
        dataJK: props.jenisKlien
    })
    const [data, setData] = useState({
        ketFasilitas: '', 
        biayaFasilitas: '', 
        satuan: '',
        jenis_klien: [{
            namaJenisKlien: '',
        }],
        idJenisKlien: '',
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

    console.log('datas', datas)

    const [showModal, setShowModal] = useState(false);
    
    const handleOnClose = () => setShowModal(false);

  return (
    <div className='min-h-screen bg-abu'>
            {/* Content */}
            <div className='ml-6'>
                <a>Data Klien</a>
            </div>
            <div className='flex justify-between m-6 mt-2 mb-3'>
                <a className='text-2xl font-bold text-black'>Data Klien</a>
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
                        <TKlien data={props}/>
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
            <ModalKlien 
            onClose={handleOnClose} 
            visible={showModal}
            data={data}
            dataJK={props.jenisKlien}
            />
        </div>
  )
}

Klien.layout = page => <Layout auth={page.props.auth} errors={page.props.errors}>{page}</Layout>;