import React, { useState } from 'react';
import { BsPlusSquare, BsSearch } from "react-icons/bs";
import { Inertia } from "@inertiajs/inertia";
import Layout from '@/Layouts/Layout';
import DataQuo from '@/Components/Quotations/DataQuo';


export default function QuotationHistory(props) {
    // console.log('props', props)
    // console.log('length', props.crew.data.length)
    // const [data, setData] = useState({
    //     ketCrewOperasional: '', 
    //     biayaCrewOperasional: '', 
    //     satuan: '',
    // })
    
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

    // const [showModal, setShowModal] = useState(false);
    
    const handleOnClose = () => setShowModal(false);

  return (
    <div className='bg-abu'>
            {/* Content */}
            <div className='ml-6'>
                <a>Quotation</a>
            </div>
            <div className='flex justify-between m-6 mt-2 mb-3'>
                <a className='text-2xl font-bold text-black'>Quotation</a>
                <div className='flex flex-row'>

                    {/* Search bar */}
                    <form>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                {/* <BsSearch/> */}
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
                    <DataQuo quotation={props.quotation}/>
                        <div className='m-2 flex justify-between items-center'>
                        <a className='text-[10px] text-black'>Showing 1 - 4 of 10</a>                    </div>
                    </div>
                </div>
            </div>

            {/* Modals Tambah Data */}
            {/* <ModalCrew 
                onClose={handleOnClose} 
                visible={showModal}
                crew={data}/> */}
        </div>
  )
}


QuotationHistory.layout = (page) => <Layout children={page} />;
