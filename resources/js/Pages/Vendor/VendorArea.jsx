import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';
import NewsLists from '@/Components/Homepage/NewsLists';
import Paginator from '@/Components/Homepage/Paginator';
import AreaWisata from '@/Components/Vendor/AreaWisata';
import Pagination from '@/Components/Pagination';


export default function VendorArea (props) {
  return (
    <div className='min-h-screen bg-abu'>
            <Navbar user={props.auth.user} />
            <div className='ml-6'>
                <a>Data Area Wisata</a>
            </div>
            <div className='flex justify-between m-6 mt-2'>
                <a className='text-2xl font-bold text-black'>Data Area Wisata</a>
                <button className="px-6 rounded-full btn-sm normal-case bg-white hover:bg-gray-100 text-[#C1C0BF]">Tambah Data | </button>
            </div>
            <div className='relative bg-white shadow-xl m-6 mt-3 md:max-xl:flex ring-1 ring-gray-900/5 sm:rounded-lg'>
                <div className='p-4 bg-kuning border-b border-gray-200 sm:rounded-t-lg'></div>
                <div className='bg-white border-b border-gray-200 sm:rounded-b-lg'>
                    <div className=''>
                        <AreaWisata/>
                        <div className='m-4 flex justify-end items-center'>
                        <Pagination/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}