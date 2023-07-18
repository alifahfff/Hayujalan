import { BsThreeDots, BsTrash3 } from "react-icons/bs";
import { Link } from "@inertiajs/inertia-react"
import { useState } from "react";
import DeleteTransport from "./DeleteTransport";

const Transportasi = ({transportasi}) => {
    const roles = transportasi.auth.user.idRoles
    const [showModal, setShowModal] = useState(false);
    const [dataD, setDataD] = useState([])
    
    const [showDelete, setShowDelete] = useState(false);
    const [dataL, setDataL] = useState([])

    console.log('transportasi', transportasi);

    const handleOnCloseD = () => setShowDelete(false);
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm text-black">
                    <thead className="border-b bg-abu font-medium dark:border-neutral-500 dark:text-neutral-800">
                        <tr>
                        <th scope="col" className="px-6 py-4">ID Transportasi</th>
                        <th scope="col" className="px-6 py-4">Nama Area</th>
                        <th scope="col" className="px-6 py-4">Nama Transportasi</th>
                        <th scope="col" className="px-6 py-4">Tanggal Berlaku</th>
                        <th scope="col" className="px-6 py-4">Last Update</th>
                        <th scope="col" className="px-6 py-4">Aksi</th>
                        </tr>
                    </thead>
                    {transportasi.transportasi.map((cr, index) => {
                        // console.log('cr', cr)
                        return (
                            <tbody key={index}>
                                <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4">{cr.idTransportasi}</td>
                                <td className="whitespace-nowrap px-6 py-4">{cr.a_wtransportasi.namaArea}</td>
                                <td className="whitespace-nowrap px-6 py-4">{cr.namaTransportasi}</td>
                                <td className="whitespace-nowrap px-6 py-4 text-merah font-bold">{cr.tglBerlakuTransportasi}</td>
                                <td className="whitespace-nowrap px-6 py-4 text-hijau font-bold">{cr.updated_at.substring(0,10)}</td>                                
                                <td className="whitespace-nowrap px-6 py-4 justify-item-center">
                                    <button className="btn btn-ghost btn-sm mr-2">
                                        <Link href={route('transportasi.detail')} method="get" data={{id: cr.idTransportasi}}>
                                            <BsThreeDots/>
                                        </Link>
                                    </button>
                                    { roles === 3 || roles === 1 ? (
                                    <button 
                                        className="btn btn-ghost btn-sm"
                                        onClick={() => {
                                            setShowDelete(true)
                                            setDataL(cr)
                                        }}
                                    >
                                     <BsTrash3/>   
                                    </button>
                                    ) : roles === 2 || roles === 4 ? (
                                        <td></td>
                                    ) : null}
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
            <DeleteTransport
                onClose={() => {
                handleOnCloseD()
                }} 
                visible={showDelete}
                data={dataL}
            />
        </div>
    )
}

export default Transportasi