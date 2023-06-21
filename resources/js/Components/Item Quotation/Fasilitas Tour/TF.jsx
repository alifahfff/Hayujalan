import { BsPencilSquare, BsTrash3 } from "react-icons/bs";
import { Link } from "@inertiajs/inertia-react"
import { useState } from "react";
import ModalFTour from "./ModalFTour";
import number from "@/Components/number";
import ModalDeleteFTr from "./ModalDeleteFTr";

const TF = ({data}) => {
    const [showModal, setShowModal] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [dataL, setDataL] = useState([])
    
    const handleOnClose = () => setShowModal(false);
    const handleOnCloseD = () => setShowDelete(false);

    console.log('data', data.data.length)

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm text-black">
                    <thead className="border-b bg-abu font-medium dark:border-neutral-500 dark:text-neutral-800">
                        <tr>
                        <th scope="col" className="px-6 py-4">No</th>
                        <th scope="col" className="px-6 py-4">Fasilitas Tour</th>
                        <th scope="col" className="px-6 py-4">Biaya</th>
                        <th scope="col" className="px-6 py-4">Satuan</th>
                        {/* <th scope="col" className="px-6 py-4">Tanggal Berlaku</th> */}
                        <th scope="col" className="px-6 py-4">Last Update</th>
                        <th scope="col" className="px-6 py-4">Aksi</th>
                        </tr>
                    </thead>
                    {data.data && data.data.length > 0 ? data.data.map((dt, index) => {
                        // console.log('cr', cr)
                        return (
                            <tbody key={index}>
                                <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">{data.from + index}</td>
                                <td className="whitespace-nowrap px-6 py-4">{dt.ketFasilitas}</td>
                                <td className="whitespace-nowrap px-6 py-4">Rp. {number(dt.biayaFasilitas)},-</td>
                                <td className="whitespace-nowrap px-6 py-4">{dt.satuan}</td>
                                <td className="whitespace-nowrap px-6 py-4 text-hijau font-bold">{dt.updated_at.substring(0,10)}</td>
                                <td className="whitespace-nowrap px-6 py-4 justify-item-center">
                                    <button 
                                        onClick={() => {
                                            setShowModal(true)
                                            setDataL(dt)
                                        }}
                                        className="btn btn-ghost btn-sm mr-2"
                                    ><BsPencilSquare/></button>
                                    <button 
                                        className="btn btn-ghost btn-sm"
                                        onClick={() => {
                                            setShowDelete(true)
                                            setDataL(dt)
                                        }}
                                    >
                                     <BsTrash3/>   
                                    </button>
                                </td>
                                </tr>
                            </tbody>
                        )
                    }) : <p className="p-5 pl-2">Tidak ada Data</p>}
                    </table>
                </div>
                </div>
            </div>

            {/* Modals Tambah Data */}
            <ModalFTour 
                onClose={() => {
                handleOnClose()
                }} 
                visible={showModal}
                data={dataL}
            />

            <ModalDeleteFTr
                onClose={() => {
                handleOnCloseD()
                }} 
                visible={showDelete}
                data={dataL}
            />
        </div>
    )
}

export default TF