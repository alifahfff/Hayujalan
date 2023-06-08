import { BsPencilSquare, BsTrash3 } from "react-icons/bs";
import { Link } from "@inertiajs/inertia-react"
import { useState } from "react";
import ModalAkses from "./ModalAkses";
import ModalDeleteAkses from "./ModalDeleteAkses";

const TAkses = ({data, roles, user}) => {
    const [showModal, setShowModal] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [dataL, setDataL] = useState([])
    console.log('dataL', dataL)
    const find = (dt) => {
        console.log('dt', dt)
        if(dt.idRoles == 1){
            alert(1)
            const find2 = user.admin.find((x) => {
                return x.idUser == dt.id
            });
            console.log('find2', find2)
            const data = {
                ...dt,
                user: {
                    ...find2,
                }
            }
            console.log('dataRoles', data)
            setDataL(data)
        }
        if(dt.idRoles == 2){
            alert(2)
            const find2 = user.program.find((x) => {
                return x.idUser == dt.id
            });
            console.log('find2', find2)
            const data = {
                ...dt,
                user: {
                    ...find2,
                }
            }
            console.log('dataRoles', data)
            setDataL(data)
        }
        if(dt.idRoles == 3){
            alert(3)
            const find2 = user.sales.find((x) => {
                return x.idUser == dt.id
            });
            console.log('find2', find2)
            const data = {
                ...dt,
                user: {
                    ...find2,
                }
            }
            console.log('dataRoles', data)
            setDataL(data)
        }
        if(dt.idRoles == 4){
            alert(4)
            const find2 = user.keuangan.find((x) => {
                return x.idUser == dt.id
            });
            console.log('find2', find2)
            const data = {
                ...dt,
                user: {
                    ...find2,
                }
            }
            console.log('dataRoles', data)
            setDataL(data)
        }
    }
    
    const handleOnClose = () => setShowModal(false);
    const handleOnCloseD = () => setShowDelete(false);

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm text-black">
                    <thead className="border-b bg-abu font-medium dark:border-neutral-500 dark:text-neutral-800">
                        <tr>
                        <th scope="col" className="px-6 py-4">No</th>
                        <th scope="col" className="px-6 py-4">Nama</th>
                        <th scope="col" className="px-6 py-4">Email</th>
                        <th scope="col" className="px-6 py-4">Role</th>
                        {/* <th scope="col" className="px-6 py-4">Status</th> */}
                        <th scope="col" className="px-6 py-4">Aksi</th>
                        </tr>
                    </thead>
                    {data.data && data.data.length > 0 ? data.data.map((dt, index) => {
                        // console.log('cr', cr)
                        return (
                            <tbody key={index}>
                                <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">{dt.id}</td>
                                <td className="whitespace-nowrap px-6 py-4">{dt.name}</td>
                                <td className="whitespace-nowrap px-6 py-4">{dt.email}</td>
                                <td className="whitespace-nowrap px-6 py-4">{dt.roles.namaRoles}</td>
                                {/* <td className="whitespace-nowrap px-6 py-4">{dt.status}</td> */}
                                <td className="whitespace-nowrap px-6 py-4 justify-item-center">
                                    <button 
                                        onClick={() => {
                                            setShowModal(true)
                                            find(dt)
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
            <ModalAkses 
                onClose={() => {
                handleOnClose()
                }} 
                visible={showModal}
                data={dataL}
                roles={roles}
                user={user}
            />

            <ModalDeleteAkses
                onClose={() => {
                handleOnCloseD()
                }} 
                visible={showDelete}
                data={dataL}
            />
        </div>
    )
}

export default TAkses