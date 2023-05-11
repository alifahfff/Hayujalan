import React from "react";
import { Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';
import NewsLists from '@/Components/Homepage/NewsLists';
import Paginator from '@/Components/Homepage/Paginator';
import Crew from '@/Components/Item Quotation/Crew/Crew';
import Pagination from '@/Components/Pagination';
import { BsPlusSquare } from "react-icons/bs";
import ModalCrew from '@/Components/Item Quotation/Crew/ModalCrew';

export default function Quotation(props, crewL) {
    
    // const {data} = this.props.location;
    console.log('CrewL', crewL)
    return (
        <div className='min-h-screen bg-abu'>
            {/* Nabvar */}
            <Navbar user={props.auth.user} />

            {/* Content */}
            <div className='ml-6'>
                <a>Quotation</a>
            </div>
            <div className='relative bg-white shadow-xl m-6 mt-3 md:max-xl:flex ring-1 ring-gray-900/5'>
                <div className='p-4 bg-kuning border-b border-gray-200'></div>
                <div className='bg-white border-b border-gray-200'>
                <div className="flex flex-col">
                    <div className="flex flex-row justify-between">
                        <a className="mr-5 mt-2 text-black">Quotation</a>
                        <a className="mr-5 mt-2 text-black">:</a>
                        <a className="mr-5 mt-2 text-black"></a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}