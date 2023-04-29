import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';
import NewsLists from '@/Components/Homepage/NewsLists';
import Paginator from '@/Components/Homepage/Paginator';
import Status from '@/Components/Dashboard/Status';

export default function Homepage(props) {
  return (
    <div className='min-h-screen bg-abu'>
            <Navbar user={props.auth.user} />
            <div className='ml-6'>
                <a>Dashboard</a>
            </div>
            <div className='ml-6'>
                <a>Dashboard</a>
            </div>
            <div className='py-12'>
                <div className='max-w-7xl mx-auto sm:px-2 lg:px-8'>
                    <div className='p-4 bg-kuning border-b border-gray-200'>
                    </div>
                </div>
                <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
                    <div className='p-6 bg-white border-b border-gray-200'>
                        <div className='m-6'>
                            <a>Status Quotation</a>
                            <div className='flex mt-5'>
                                <Status/>
                                <Status/>
                                <Status/>
                            </div>
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