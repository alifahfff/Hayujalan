import Status from '@/Components/Homepage/Status';
import Crew from '@/Components/Item Quotation/Crew';
import Navbar from '@/Components/Navbar';
import React from 'react';

export default function Homepage(props) {
    return (
        <div className='min-h-screen bg-abu'>
            <Navbar/>
            <div className='ml-6'>
                <a>Fasilitas Tour</a>
            </div>
            <div className='ml-6'>
                <a>Fasilitas Tour</a>
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
    )
}

