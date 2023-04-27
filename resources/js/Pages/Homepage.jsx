import Status from '@/Components/Homepage/Status';
import Navbar from '@/Components/Navbar';
import React from 'react';


export default function Homepage(props) {
    return (
        <div className='min-h-screen bg-slate-50'>
            <Navbar/>
            <div className='ml-6'>
                <a>Dashboard</a>
            </div>
            <div className='flex justify-around'>
                <Status/>
                <Status/>
                <Status/>
            </div>
        </div>
    )
}