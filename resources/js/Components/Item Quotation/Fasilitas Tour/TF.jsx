import { BsPencilSquare, BsTrash3 } from "react-icons/bs";
import { Link } from "@inertiajs/inertia-react"
import { useState } from "react";

const TF = ({data}) => {
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm text-black">
                    <thead className="border-b bg-abu font-medium dark:border-neutral-500 dark:text-neutral-800">
                        <tr>
                        <th scope="col" className="px-6 py-4">ID</th>
                        <th scope="col" className="px-6 py-4">Fasilitas Tour</th>
                        <th scope="col" className="px-6 py-4">Biaya</th>
                        <th scope="col" className="px-6 py-4">Satuan</th>
                        <th scope="col" className="px-6 py-4">Aksi</th>
                        </tr>
                    </thead>
                    {data.map((dt, index) => {
                        // console.log('cr', cr)
                        return (
                            <tbody key={index}>
                                <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">{dt.id}</td>
                                <td className="whitespace-nowrap px-6 py-4">{dt.fasilitas}</td>
                                <td className="whitespace-nowrap px-6 py-4">{dt.biaya}</td>
                                <td className="whitespace-nowrap px-6 py-4">{dt.satuan}</td>
                                <td className="whitespace-nowrap px-6 py-4 justify-item-center">
                                    <button className="btn btn-ghost btn-sm mr-2"><Link href={route('crew.detail')}><BsPencilSquare/></Link></button>
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

export default TF