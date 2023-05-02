import { BsPencilSquare, BsTrash3 } from "react-icons/bs";
import { Link } from "@inertiajs/inertia-react"

const RM = ({rm}) => {
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm text-black">
                    <thead className="border-b bg-abu font-medium dark:border-neutral-500 dark:text-neutral-800">
                        <tr>
                        <th scope="col" className="px-6 py-4">Area Wisata</th>
                        <th scope="col" className="px-6 py-4">ID RM</th>
                        <th scope="col" className="px-6 py-4">Nama Rumah Makan</th>
                        <th scope="col" className="px-6 py-4">Kapasitas RM</th>
                        <th scope="col" className="px-6 py-4">Kapasitas Parkir Bus</th>
                        <th scope="col" className="px-6 py-4">Alamat </th>
                        <th scope="col" className="px-6 py-4">No Telepon</th>
                        <th scope="col" className="px-6 py-4">PIC</th>
                        <th scope="col" className="px-6 py-4">No HP PIC</th>
                        <th scope="col" className="px-6 py-4">Aksi</th>
                        </tr>
                    </thead>
                    {rm.map((cr, index) => {
                        // console.log('cr', cr)
                        return (
                            <tbody key={index}>
                                <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">{cr.area}</td>
                                <td className="whitespace-nowrap px-6 py-4">{cr.id}</td>
                                <td className="whitespace-nowrap px-6 py-4">{cr.namaRM}</td>
                                <td className="whitespace-nowrap px-6 py-4">{cr.kapasitasRM}</td>
                                <td className="whitespace-nowrap px-6 py-4">{cr.kapasitasParkir}</td>
                                <td className="whitespace-nowrap px-6 py-4">{cr.alamat}</td>
                                <td className="whitespace-nowrap px-6 py-4">{cr.noTelpRM}</td>
                                <td className="whitespace-nowrap px-6 py-4">{cr.picRM}</td>
                                <td className="whitespace-nowrap px-6 py-4">{cr.noHpPIC}</td>                                
                                <td className="whitespace-nowrap px-6 py-4 justify-item-center">
                                    <button className="btn btn-ghost btn-sm mr-2"><Link href={route('transportasi.detail')} data={{id: cr.id}}><BsPencilSquare/></Link></button>
                                    <button className="btn btn-ghost btn-sm"><BsTrash3/></button>
                                </td>
                                </tr>
                            </tbody>
                        )
                    })}
                    </table>
                </div>
                </div>
            </div>
        </div>
    )
}

export default RM