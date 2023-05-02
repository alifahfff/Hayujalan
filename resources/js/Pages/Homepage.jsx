import React, { useState } from 'react';
import { Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';
import NewsLists from '@/Components/Homepage/NewsLists';
import Paginator from '@/Components/Homepage/Paginator';
import Status from '@/Components/Dashboard/Status';
import { BsX, BsCheck, BsPlusSquare} from "react-icons/bs";
import { BiLoader, BiCheck, BiX, BiLoaderCircle } from "react-icons/bi";

export default function Homepage(props) {
    const [statusList, setStatusList] = useState([
        {
            color:'#99E198',
            icon: <BiCheck/>,
            name:'Penawaran yang diterima',
            total:'10'
        },
        {
            color:'#FF8080',
            icon: <BiX/>,
            name:'Penawaran yang ditolak',
            total:'2'
        },
        {
            color:'#C7C5C5',
            icon: <BiLoader/>,
            name:'Menunggu',
            total:'3'
        }

    ])

    return (
    <div className='min-h-screen bg-abu'>
            <Navbar user={props.auth.user} />

            <div className='ml-6'>
                <a>Dashboard</a>
            </div>
            <div className='flex justify-between m-6 mt-2 mb-3'>
                <a className='text-2xl font-bold text-black'>Dashboard</a>
                <button 
                onClick={() => setShowModal(true)}
                className="btn gap-2 btn-outline rounded-full btn-sm px-5 bg-white hover:bg-gray-100 text-[#C1C0BF]"
                >
                Tambah Data | <BsPlusSquare/>
                </button>
            </div>

                <div className='relative bg-white shadow-xl m-6 mt-3 md:max-xl:flex ring-1 ring-gray-900/5'>
                    <div className='p-4 bg-kuning border-b border-gray-200'></div>
                        <div className='p-6 bg-white border-b border-gray-200'>
                            <div className='m-6'>
                                <a>Status Quotation</a>
                                <div className='flex mt-5'>
                                {statusList.map((st, index) => {
                                        return (
                                            <Status 
                                            key={index}
                                            status={st}
                                            />
                                        )
                                    })

                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                {/* <div className='ml-6'>
                    <a>Dashboard</a>
                </div>
                <div className='flex'>
                    <Status/>
                    <Status/>
                    <Status/>
                </div> */}
            </div>
    // <div className='min-h-screen bg-slate-50'>
    //   <Head title={props.title} />
    //   <Navbar user={props.auth.user} />
    //   <div className='flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4'>
    //     <NewsLists news={props.news.data} />
    //   </div>
    //   <div className='flex justify-center items-center'>
    //     <Paginator meta={props.news.meta} />
    //   </div>
    // </div>
  )
}