import Navbar from '@/Components/Navbar'
import Sidebar from '@/Components/Sidebar'
import React from 'react'

const Layout = ({children})=> {
    return(
        <React.Fragment>
                <div className='flex flex-row bg-abu h-screen w-screen overflow-hidden'>
                    <div className=''>
                        <Sidebar/>
                    </div>
                    <div className='grow bg-abu h-screen overflow-auto'>
                        <Navbar/>
                        <div className='grow bg-abu h-screen'>
                        {children}
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default Layout