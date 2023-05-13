import React, { useState } from 'react';
import { Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';
import NewsLists from '@/Components/Homepage/NewsLists';
import Paginator from '@/Components/Homepage/Paginator';
import Crew from '@/Components/Item Quotation/Crew/Crew';
import Pagination from '@/Components/Pagination';
import { BsPlusSquare, BsSearch } from "react-icons/bs";
import ModalCrew from '@/Components/Item Quotation/Crew/ModalCrew';
import Search from '@/Components/Hak Akses/Search';
import { Inertia } from '@inertiajs/inertia';
import Layout from '@/Layouts/Layout';


export default function ItemCrew(props) {
    console.log('props', props)
    console.log('length', props.crew.data.length)
    const [data, setData] = useState({
        ketCrewOperasional: '', 
        biayaCrewOperasional: '', 
        satuan: '',
    })
    
    const search = (key) => {
      console.log('key', key)
      Inertia.get(
        route(route().current()),
        { term: key },  {
            preserveState: true,
            replace: true,
        }
    );
    }

    const [showModal, setShowModal] = useState(false);
    
    const handleOnClose = () => setShowModal(false);

  return (
    <div className='bg-abu'>
            {/* Content */}
            <div className='ml-6'>
                <a>Crew Operasional</a>
            </div>
            <div className='flex justify-between m-6 mt-2 mb-3'>
                <a className='text-2xl font-bold text-black'>Crew Operasional</a>
                <div className='flex flex-row'>

                    {/* Search bar */}
                    <form>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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

                    {/* Data */}
                    <div className=''>
                        <Crew crew={props.crew}/>
                        <div className='m-2 flex justify-between items-center'>
                         {props.crew.data.length > 0 && (
                            <a className='text-[10px] text-black'>Showing {props.crew.from} - {props.crew.from + props.crew.data.length -1} of {props.crew.total}</a>
                         )} 
                         
                         {props.crew.data.length == 0 && (
                            <a className='text-[10px] text-black'>Showing {props.crew.total} data</a>
                         )}
                        <Pagination meta={props.crew}/>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modals Tambah Data */}
            <ModalCrew 
                onClose={handleOnClose} 
                visible={showModal}
                crew={data}/>
        </div>
  )
}

ItemCrew.layout = page => <Layout children={page}/>
