import React, { useState } from 'react';
import { BsPlusSquare, BsThreeDots, BsPencilSquare, BsTrash3 } from "react-icons/bs";
import { Link } from "@inertiajs/inertia-react"
import ModalDetail from '@/Components/Vendor/Destinasi/TambahDetailDestinasi';
import Layout from '@/Layouts/Layout';
import DeleteDestinasi from '@/Components/Vendor/Destinasi/DeleteDestinasi';
import DeleteDetail from '@/Components/Vendor/Destinasi/DeleteDetail';
import ModalDestinasi from '@/Components/Vendor/Destinasi/ModalDestinasi';
import number from "@/Components/number";


export default function DetailDestinasi(props) {
    const [roles, setRoles] = useState(props.auth.user.idRoles)
    const [data, setData] = useState({
        rangePeserta: '',
        tiketMasukWeekday: '',
        tiketMasukWeekend: '',
        idDestinasiWisata : props.destinasi.idDestinasiWisata,
    })
    
    
    const [dataL, setDataL] = useState([])
    const [dataD, setDataD] = useState([])

    const [showModal, setShowModal] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);

    const handleOnClose = () => setShowModal(false);
    const handleOnCloseD = () => setShowDelete(false);
    const handleOnClosed = () => setShowUpdate(false);

    
  console.log('modal', props)
  console.log('destinasi', props.destinasi)
  console.log('area', props.area)
  return (
    <div className='min-h-screen bg-abu'>
    {/* Content */}
        <div className='ml-6'>
        <div class="text-sm breadcrumbs">
            <ul>
                <li><Link href={route('destinasiwisata')}>
                Data Destinasi Wisata
                </Link></li>
                <li>Detail Data</li>
            </ul>
        </div>
        </div>
        <div className='flex justify-between m-6 mt-2 mb-3'>
            <a className='text-2xl font-bold text-black'>{props.destinasi.namaDestinasiWisata}</a>
        </div>
        <div className='relative bg-white shadow-xl m-6 mt-3 md:max-xl:flex ring-1 ring-gray-900/5'>
            <div className='p-4 bg-kuning border-b border-gray-200'></div>
                <div className="row bg-white">
                    { roles === 1 || roles === 3 ? ( 
                                //<h1>admin</h1>
                                <button 
                                    onClick={() => {
                                    setShowUpdate(true)
                                        setDataL(props.destinasi)
                                    }}
                                    className="btn gap-2 btn-outline btn-sm px-6 m-5 bg-white hover:bg-gray-100 text-[#C1C0BF] float-right"
                                >
                                    <BsPencilSquare/>Edit Data 
                                </button>
                            ) : roles === 2  || roles === 4 ? (
                                <div></div>
                            ) : <div></div>
                    }
                                <div className="column pt-12 pb-6 pl-6 text-black text-m bg-abu">
                                <table>
                                        <tr>
                                            <td>Kapasitas Pengunjung </td>
                                            <td>: {props.destinasi.kapasitasDestinasiWisata} </td>
                                        </tr>
                                        <tr>
                                            <td>Kapasitas Parkir Bus  </td>
                                            <td>: {props.destinasi.kapasitasParkirBusWisata}</td>
                                        </tr>
                                        <tr>
                                            <td>Alamat  </td>
                                            <td>: {props.destinasi.alamatDestinasiWisata}</td>
                                        </tr>
                                        <tr>
                                                <td>No Telpon </td>
                                                <td>: {props.destinasi.tlpDestinasiWisata}</td>
                                            </tr>
                                            <tr>
                                                <td>PIC Destinasi </td>
                                                <td>: {props.destinasi.picDestinasiWisata} </td>
                                            </tr>
                                            <tr>
                                                <td>No PIC </td>
                                                <td>: {props.destinasi.hpDestinasiWisata}</td>
                                            </tr>
                                            <tr>
                                                <td>Link Gmaps </td>
                                                <td>: {props.destinasi.linkGmapDestinasiWisata}</td>
                                            </tr>
                                            <tr>
                                                <td>Tanggal Berlaku Vendor </td>
                                                <td className='text-merah font-bold'>: {props.destinasi.tglBerlakuDestinasi}</td>
                                            </tr>
                                    </table>
                        </div>
                <div className="p-6 bg-white border-b border-gray-200">
                    <div className='flex justify-between m-6 mt-2 mb-3'>
                        <a className='text-2xl font-bold text-black'></a>
                            { roles === 1 || roles === 3 ? ( 
                                    //<h1>admin</h1>
                                    <button 
                                        onClick={() => {
                                            setShowModal(true),
                                            setDataL(data)
                                        }}
                                        className="btn gap-2 btn-outline btn-sm px-5 bg-white hover:bg-gray-100 text-[#C1C0BF]"
                                        >
                                        <BsPlusSquare/>Tambah Data
                                    </button>
                                ) : roles === 2  || roles === 4 ? (
                                    <div></div>
                                ) : <div></div>
                            }
                    </div>
                        <div className="column">
                            <table className="min-w-full text-left text-sm text-black">
                                <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:text-neutral-800">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">No</th>
                                        <th scope="col" className="px-6 py-4">Range Peserta</th>
                                        <th scope="col" className="px-6 py-4">Tiket Masuk Weekday</th>
                                        <th scope="col" className="px-6 py-4">Tiket Masuk Weekend</th>
                                            { roles === 1 || roles === 3 ? ( 
                                                    //<h1>admin</h1>
                                                    <th scope="col" className="px-6 py-4">Aksi</th>
                                                ) : roles === 2  || roles === 4 ? (
                                                    <div></div>
                                                ) : <div></div>
                                            }
                                    </tr>
                                </thead>
                                {props.detail.map((cr, index) => {
                                    // console.log('cr', cr)
                                    return (
                                        <tbody key={index}>
                                            <tr className="border-b dark:border-neutral-500">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">{cr.rangePeserta}</td>
                                            <td className="whitespace-nowrap px-6 py-4">Rp. {number(cr.tiketMasukWeekday)}</td>
                                            <td className="whitespace-nowrap px-6 py-4">Rp. {number(cr.tiketMasukWeekend)}</td>
                                            { roles === 1 || roles === 3 ? ( 
                                                    //<h1>admin</h1>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        <button 
                                                            onClick={() => {
                                                                setShowDelete(true)
                                                                setDataL(cr)
                                                            }}
                                                            className="btn btn-ghost btn-sm mr-2"
                                                        ><BsTrash3/></button>
                                                    </td>
                                                ) : roles === 2  || roles === 4 ? (
                                                    <div></div>
                                                ) : <div></div>
                                            }
                                            </tr>
                                        </tbody>
                                    )
                                })}
                            </table>
                        </div>
                    </div>
                </div>

                <div>

                </div>
        </div>

        <ModalDestinasi
            onClose={handleOnClosed} 
            visible={showUpdate}
            data={props.destinasi}
            dataArea={props.area}
        />

        <ModalDetail 
            onClose={handleOnClose} 
            visible={showModal}
            data={dataL}
        />

        <DeleteDetail
                onClose={() => {
                handleOnCloseD()
                }} 
                visible={showDelete}
                data={dataL}
            />
        
    </div>
  );
}

DetailDestinasi.layout = page => <Layout auth={page.props.auth} errors={page.props.errors}>{page}</Layout>;