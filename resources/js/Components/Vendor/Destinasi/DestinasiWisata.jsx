import {  BsThreeDots } from "react-icons/bs";
import { Link } from "@inertiajs/inertia-react";
import ModalDetail from "./TambahDetailDestinasi";
import { useState } from "react";



const DestinasiWisata = ({destinasi}) => {
    const [showModal, setShowModal] = useState(false);
    const [dataD, setDataD] = useState([])


    const handleOnClose = () => setShowModal(false);

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm text-black">
                    <thead className="border-b bg-abu font-medium dark:border-neutral-500 dark:text-neutral-800">
                        <tr>
                        <th scope="col" className="px-6 py-4">Area Wisata</th>
                        <th scope="col" className="px-6 py-4">ID Destinasi</th>
                        <th scope="col" className="px-6 py-4">Nama Destinasi</th>
                        <th scope="col" className="px-6 py-4">Alamat</th>
                        <th scope="col" className="px-6 py-4">Aksi</th>
                        </tr>
                    </thead>
                    {destinasi.map((cr, index) => {
                        // console.log('cr', cr)
                        return (
                            <tbody key={index}>
                                <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">{cr.idAreaWisata}</td>
                                <td className="whitespace-nowrap px-6 py-4">{cr.id}</td>
                                <td className="whitespace-nowrap px-6 py-4">{cr.namaDestinasiWisata}</td>
                                <td className="whitespace-nowrap px-6 py-4">{cr.alamatDestinasiWisata}</td>
                                <td className="whitespace-nowrap px-6 py-4 justify-item-center">
                                    <button className="btn btn-ghost btn-sm mr-2">
                                        <Link href={route('destinasiwisata.detail')} method="get" data={{id: cr.id}}>
                                            <BsThreeDots/>
                                        </Link>
                                    </button>
                                    {/* <button 
                                        onClick={() => {
                                            setShowModal(true)
                                            setDataD(cr)
                                        }}
                                        className="btn btn-ghost btn-sm mr-2"
                                    ><BsThreeDots/></button> */}
                                </td>
                                </tr>
                            </tbody>
                        )
                    })}
                    </table>
                </div>
                </div>
            </div>

            {/* Modals Tambah Data */}
            {/* <ModalDetail 
                onClose={() => {
                handleOnClose()
                }} 
                visible={showModal}
                data={dataD}
            /> */}
        </div>
    )
}

export default DestinasiWisata