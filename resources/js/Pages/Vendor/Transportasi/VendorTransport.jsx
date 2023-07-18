import React, { useState } from 'react';
import { Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';
import NewsLists from '@/Components/Homepage/NewsLists';
import Paginator from '@/Components/Homepage/Paginator';
import Transportasi from '@/Components/Vendor/Transportasi/Transportasi';
import Pagination from '@/Components/Pagination';
import { BsPlusSquare } from "react-icons/bs";
import ModalTransport from '@/Components/Vendor/Transportasi/ModalTransport';
import Layout from '@/Layouts/Layout';


export default function VendorTransport (props) {
    const [roles, setRoles] = useState(props.auth.user.idRoles);
    const [data, setData] = useState({
        idAreaWisata:'',
        namaTransportasi: '', 
        alamatTransportasi: '', 
        tlpTransportasi: '', 
        picTransportasi: '', 
        hpPicTransportasi: '',
        tglBerlakuTransportasi: '',
    })

    const [showModal, setShowModal] = useState(false);
    
    const handleOnClose = () => setShowModal(false);
    
  return (
    <div className='min-h-screen bg-abu'>
        {/* Content */}
            <div className='ml-6 text-sm'>
                <a>Data Transportasi</a>
            </div>
            <div className='flex justify-between m-6 mt-2 mb-3'>
                <a className='text-2xl font-bold text-black'>Data Transportasi</a>
                { roles === 1 || roles === 3 ? ( 
                        //<h1>admin</h1>
                        <button 
                            onClick={() => setShowModal(true)}
                            className="btn gap-2 btn-outline rounded-full btn-sm px-5 bg-white hover:bg-gray-100 text-[#C1C0BF]"
                            >
                            Tambah Data | 
                            <BsPlusSquare/>
                        </button>
                    ) : roles === 2  || roles === 4 ? (
                        <div></div>
                    ) : <div></div>
                }
            </div>
            <div className='relative bg-white shadow-xl m-6 mt-3 md:max-xl:flex ring-1 ring-gray-900/5'>
                <div className='p-4 bg-kuning border-b border-gray-200'></div>
                <div className='bg-white border-b border-gray-200'>
                    <div className=''>
                        <Transportasi transportasi={props}/>
                        <div className='m-2 flex justify-between items-center'>
                        {props.transportasi.data.length > 0 && (
                            <a className='text-[10px] text-black'>Showing {props.transportasi.from} - {props.transportasi.from + props.transportasi.data.length -1} of {props.transportasi.total}</a>
                         )}

                        {props.transportasi.data.length == 0 && (
                            <a className='text-[10px] text-black'>Showing {props.transportasi.total} data</a>
                         )}

                        <Pagination meta={props.transportasi}/>
                        </div>
                    </div>
                </div>
            </div>

            <ModalTransport 
            onClose={handleOnClose} 
            visible={showModal}
            data={data}
            dataArea={props.area}/>
        </div>
  )
}

VendorTransport.layout = page => <Layout auth={page.props.auth} errors={page.props.errors}>{page}</Layout>;