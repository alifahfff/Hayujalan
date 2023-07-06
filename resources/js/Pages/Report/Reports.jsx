import React, { useState } from 'react';
import { Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';
import NewsLists from '@/Components/Homepage/NewsLists';
import Paginator from '@/Components/Homepage/Paginator';
import Crew from '@/Components/Item Quotation/Crew/Crew';
import Pagination from '@/Components/Pagination';
import { BsPlusSquare, BsSearch } from "react-icons/bs";
import Layout from '@/Layouts/Layout';
import ModalReport from '@/Components/Report/ModalReport';
import TReport from '@/Components/Report/TReport';

export default function Reports(props) {
    console.log('props', props)
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
                </div>
            </div>
            <div className='relative bg-white shadow-xl m-6 mt-3 md:max-xl:flex ring-1 ring-gray-900/5'>
                <div className='p-4 bg-kuning border-b border-gray-200'></div>
                <div className='bg-white border-b border-gray-200'>
                    <div className=''>
                        <TReport data={props.Mydata}/>
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
            <ModalReport
            onClose={handleOnClose} 
            visible={showModal}
            />
        </div>
  )
}

Reports.layout = page => <Layout auth={page.props.auth} errors={page.props.errors}>{page}</Layout>;