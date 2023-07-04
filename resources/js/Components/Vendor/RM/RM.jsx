import { BsThreeDots, BsTrash3} from "react-icons/bs";
import { Link } from "@inertiajs/inertia-react";
import { useState } from "react";
import DeleteRM from "./DeleteRM";


const RM = ({rm}) => {
    const [showModal, setShowModal] = useState(false);
    const [dataD, setDataD] = useState([])
    
    const [showDelete, setShowDelete] = useState(false);
    const [dataL, setDataL] = useState([])

    console.log('rm', rm);

    const handleOnCloseD = () => setShowDelete(false);

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm text-black">
                    <thead className="border-b bg-abu font-medium dark:border-neutral-500 dark:text-neutral-800">
                        <tr>
                        <th scope="col" className="px-6 py-4">ID RM</th>
                        <th scope="col" className="px-6 py-4">Nama Area</th>
                        <th scope="col" className="px-6 py-4">Nama Rumah Makan</th>
                        <th scope="col" className="px-6 py-4">Tanggal Berlaku</th>
                        <th scope="col" className="px-6 py-4">Last Update</th>
                        <th scope="col" className="px-6 py-4">Aksi</th>
                        </tr>
                    </thead>
                    {rm.map((cr, index) => {
                        // console.log('cr', cr)
                        return (
                            <tbody key={index}>
                                <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4">{cr.idRM}</td>
                                <td className="whitespace-nowrap px-6 py-4">{cr.area_wisata_rm.namaArea}</td>
                                <td className="whitespace-nowrap px-6 py-4">{cr.namaRM}</td>
                                <td className="whitespace-nowrap px-6 py-4 text-merah font-bold">{cr.tglBerlakuRm}</td>
                                <td className="whitespace-nowrap px-6 py-4 text-hijau font-bold">{cr.updated_at.substring(0,10)}</td>
                                <td className="whitespace-nowrap px-6 py-4 justify-item-center">
                                    <button className="btn btn-ghost btn-sm mr-2">
                                        <Link href={route('rumahmakan.detail')} data={{id: cr.idRM}}>
                                            <BsThreeDots/>
                                        </Link>
                                    </button>
                                    <button 
                                        className="btn btn-ghost btn-sm"
                                        onClick={() => {
                                            setShowDelete(true)
                                            setDataL(cr)
                                        }}
                                    >
                                     <BsTrash3/>   
                                    </button>
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
            <DeleteRM
                onClose={() => {
                handleOnCloseD()
                }} 
                visible={showDelete}
                data={dataL}
            />
        </div>
    )
}

export default RM