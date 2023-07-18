import { BsThreeDots, BsTrash3, BsPencilSquare } from "react-icons/bs";
import { Link } from "@inertiajs/inertia-react"
import { useState } from "react";
import ModalJenisTransport from "./ModalJenisTransport";
// import DeleteTransport from "./DeleteTransport";

const JenisTransportasi = ({jenis, dataCrew}) => {
    const roles = dataCrew.auth.user.idRoles
    const [showModal, setShowModal] = useState(false);
    const [dataD, setDataD] = useState([])
    
    const [showDelete, setShowDelete] = useState(false);
    const [dataL, setDataL] = useState([])

    const handleOnCloseD = () => setShowDelete(false);
    const handleOnClose = () => setShowModal(false);
    console.log('jenis', jenis)
    console.log('crew', dataCrew)
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm text-black">
                    <thead className="border-b bg-abu font-medium dark:border-neutral-500 dark:text-neutral-800">
                        <tr>
                        <th scope="col" className="px-6 py-4">ID</th>
                        <th scope="col" className="px-6 py-4">Jenis Transportasi</th>
                        <th scope="col" className="px-6 py-4">Penggunaan Unit</th>
                        <th scope="col" className="px-6 py-4">Kapasitas Maksimal</th>
                        <th scope="col" className="px-6 py-4">Last Update</th>
                        { roles === 3 || roles === 1 ? (
                        <th scope="col" className="px-6 py-4">Aksi</th>
                        ) : roles === 2 || roles === 4 ? (
                            <td></td>
                        ) : null}
                        </tr>
                    </thead>
                    {dataCrew.jenis.map((cr, index) => {
                        // console.log('cr', cr)
                        return (
                            <tbody key={index}>
                                <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4">{cr.idJenisTransportasi}</td>
                                <td className="whitespace-nowrap px-6 py-4">{cr.namaJenis}</td>
                                <td className="whitespace-nowrap px-6 py-4">{cr.penggunaanUnit}</td>
                                <td className="whitespace-nowrap px-6 py-4">{cr.maxKapasitas}</td>                              
                                <td className="whitespace-nowrap px-6 py-4 text-hijau font-bold">{cr.updated_at.substring(0,10)}</td>                              
                                <td className="whitespace-nowrap px-6 py-4 justify-item-center">
                                    { roles === 3 || roles === 1 ? (
                                    <button 
                                        onClick={() => {
                                            setShowModal(true)
                                            setDataL(cr)
                                        }}
                                        className="btn btn-ghost btn-sm mr-2"
                                    ><BsPencilSquare/></button>
                                    ) : roles === 2 || roles === 4 ? (
                                        <td></td>
                                    ) : null}
                                    {/* <button 
                                        className="btn btn-ghost btn-sm"
                                        onClick={() => {
                                            setShowDelete(true)
                                            setDataL(cr)
                                        }}
                                    >
                                     <BsTrash3/>   
                                    </button> */}
                                    {/* <button className="btn btn-ghost btn-sm mr-2"><Link href={route('transportasi.detail')} data={{id: cr.id}}><BsThreeDots/></Link></button> */}
                                </td>
                                </tr>
                            </tbody>
                        )
                    })}
                    </table>
                </div>
                </div>
            </div>

            <ModalJenisTransport
                onClose={() => {
                handleOnClose()
                }} 
                visible={showModal}
                data={dataL}
                dataCrew={dataCrew}
            />
        </div>
    )
}

export default JenisTransportasi