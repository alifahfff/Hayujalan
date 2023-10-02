import { BsPencilSquare, BsTrash3, BsList, BsThreeDots } from "react-icons/bs";
import { Link } from "@inertiajs/inertia-react"
import { useState } from "react";
import DeleteAreaWisata from "./DeleteAreaWisata";
import ModalArea from "./ModalArea";

const AreaWisata = ({area}) => {
    const roles = area.auth.user.idRoles
    const [showModal, setShowModal] = useState(false);
    const [dataD, setDataD] = useState([])
    
    const [showDelete, setShowDelete] = useState(false);
    const [dataL, setDataL] = useState([])

    const handleOnCloseD = () => setShowDelete(false);
    const handleOnClose = () => setShowModal(false);

    console.log('area', area)
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm text-black">
                    <thead className="border-b bg-abu font-medium dark:border-neutral-500 dark:text-neutral-800">
                        <tr>
                        <th scope="col" className="px-6 py-4">No</th>
                        <th scope="col" className="px-6 py-4">Area Wisata</th>
                        <th scope="col" className="px-6 py-4">Last Update</th>
                        { roles === 3 || roles === 1 ? (
                        <th scope="col" className="px-6 py-4">
                            Aksi
                        </th>
                        ) : roles === 2 || roles === 4 ? (
                            null
                        ) : null}
                        </tr>
                    </thead>
                    {area.area.data && area.area.data.length > 0 ? area.area.data.map((cr, index) => {
                        // console.log('cr', cr)
                        return (
                            <tbody key={index}>
                                <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">{area.area.from + index}</td>
                                <td className="whitespace-nowrap px-6 py-4">{cr.namaArea}</td>
                                <td className="whitespace-nowrap px-6 py-4">{cr.updated_at.substring(0,10)}</td>
                                { roles === 3 || roles === 1 ? (
                                <td className="whitespace-nowrap px-6 py-4 justify-item-center">
                                    <button 
                                        onClick={() => {
                                            setShowModal(true)
                                            setDataL(cr)
                                        }}
                                        className="btn btn-ghost btn-sm mr-2"
                                    ><BsPencilSquare/></button>
                                </td>
                                ) : roles === 2 || roles === 4 ? (
                                    <td></td>
                                ) : null}
                                </tr>
                            </tbody>
                        )
                    }) : <p className="p-5 pl-2">Tidak ada Data</p>}
                    </table>
                </div>
                </div>
            </div>
            <ModalArea
                onClose={() => {
                handleOnClose()
                }} 
                visible={showModal}
                data={dataL}
            />

            <DeleteAreaWisata
                onClose={() => {
                handleOnCloseD()
                }} 
                visible={showDelete}
                data={dataL}
            />
        </div>
    )
}

export default AreaWisata