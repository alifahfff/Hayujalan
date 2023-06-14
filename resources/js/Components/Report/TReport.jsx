import { BsPencilSquare, BsTrash3 } from "react-icons/bs";
import { Link } from "@inertiajs/inertia-react"
import { useState } from "react";
import number from "@/Components/number";
import moment from 'moment';
import ModalReport from "./ModalReport";

const TReport = ({data}) => {
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
                        <th scope="col" className="px-6 py-4">Nama Klien</th>
                        <th scope="col" className="px-6 py-4">Quotation</th>
                        <th scope="col" className="px-6 py-4">Total</th>
                        <th scope="col" className="px-6 py-4">Status Quotation</th>
                        <th scope="col" className="px-6 py-4">Status Berjalan</th>
                        <th scope="col" className="px-6 py-4">Tanggal Dibuat</th>
                        <th scope="col" className="px-6 py-4">Aksi</th>
                        </tr>
                    </thead>
                    {data.data && data.data.length > 0 ? data.data.map((dt, index) => {
                        // console.log('cr', cr)
                        return (
                            <tbody key={index}>
                                <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">{data.from + index}</td>
                                <td className="whitespace-nowrap px-6 py-4">{dt.qtransaksi.quotation.klien.namaKlien}</td>
                                <td className="whitespace-nowrap px-6 py-4">{dt.qtransaksi.quotation.namaProject}</td>
                                <td className="whitespace-nowrap px-6 py-4">Rp. {number(dt.qtransaksi.totalPrice)},-</td>
                                <td className="whitespace-nowrap px-6 py-4">{dt.qtransaksi.status}</td>
                                <td className="whitespace-nowrap px-6 py-4">{dt.statusBerjalan}</td>
                                <td className="whitespace-nowrap px-6 py-4">{moment(dt.timestamp).format('YYYY-MM-DD')}</td>
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

                {/* Modals Tambah Data */}
            <ModalReport 
                onClose={() => {
                handleOnClose()
                }} 
                visible={showModal}
                data={dataL}
            />
            </div>
        </div>
    )
}

export default TReport