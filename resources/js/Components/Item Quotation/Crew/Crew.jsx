import { BsPencilSquare, BsTrash3 } from "react-icons/bs";
import { Link } from "@inertiajs/inertia-react"
import { useState } from "react";
import ModalCrew from "./ModalCrew";
import ModalDeleteCrew from "./ModalDeleteCrew";
import number from "@/Components/number";


const Crew = ({crew}) => {

    const [showModal, setShowModal] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [crewL, setCrewL] = useState([])
    
    const handleOnClose = () => setShowModal(false);
    const handleOnCloseD = () => setShowDelete(false);

    console.log('crew Length', crew.data.length)

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm text-black">
                    <thead className="border-b bg-abu font-medium dark:border-neutral-500 dark:text-neutral-800">
                        <tr>
                        <th scope="col" className="px-6 py-4">No</th>
                        <th scope="col" className="px-6 py-4">Crew Operasional</th>
                        <th scope="col" className="px-6 py-4">Biaya</th>
                        <th scope="col" className="px-6 py-4">Satuan</th>
                        {/* <th scope="col" className="px-6 py-4">Tanggal Berlaku</th> */}
                        <th scope="col" className="px-6 py-4">Last Update</th>
                        <th scope="col" className="px-6 py-4">Aksi</th>
                        </tr>
                    </thead>
                    {crew.data && crew.data.length > 0 ? crew.data.map((cr, index) => {
                        // console.log('cr', cr)
                        return (
                            <tbody key={index}>
                                <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">{crew.from + index}</td>
                                <td className="whitespace-nowrap px-6 py-4">{cr.ketCrewOperasional}</td>
                                <td className="whitespace-nowrap px-6 py-4">Rp. {number(cr.biayaCrewOperasional)},-</td>
                                <td className="whitespace-nowrap px-6 py-4">{cr.satuan}</td>
                                <td className="whitespace-nowrap px-6 py-4 text-hijau font-bold">{cr.updated_at.substring(0,10)}</td>
                                <td className="whitespace-nowrap px-6 py-4 justify-item-center">
                                    <button 
                                        onClick={() => {
                                            setShowModal(true)
                                            setCrewL(cr)
                                        }}
                                        className="btn btn-ghost btn-sm mr-2"
                                    ><BsPencilSquare/></button>
                                    <button 
                                        className="btn btn-ghost btn-sm"
                                        onClick={() => {
                                            setShowDelete(true)
                                            setCrewL(cr)
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
            <ModalCrew 
                onClose={() => {
                handleOnClose()
                }} 
                visible={showModal}
                crew={crewL}
            />

            <ModalDeleteCrew
                onClose={() => {
                handleOnCloseD()
                }} 
                visible={showDelete}
                data={crewL}
            />
        </div>
    )
}

export default Crew