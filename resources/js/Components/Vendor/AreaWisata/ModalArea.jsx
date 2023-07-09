import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";

const ModalArea = ({visible, onClose, data}) => {
    if (!visible) return null;
    const [datas, setDatas] = useState(data)
    console.log('modal data', data)
    const [error, setError] = useState("");

    const handleSubmit = () => {
        console.log('id', data.id)
        if (!datas.namaArea) {
            setError("Nama Area harus diisi");
            return;
        }
        setError("");
        if(data.id){
            // update data
            const dataUpdate = {
                id: data.id,
                namaArea: datas.namaArea, 
                updated_at: new Date(),
            }
            Inertia.post('/areawisata/update', dataUpdate)
        }else{
            // tambah data
            const TambahData = {
                namaArea: datas.namaArea, 
                created_at: new Date(),
                updated_at: new Date(),
            }
            Inertia.post('/areawisata', TambahData)
        }

        onClose();
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
            <div className='relative bg-white shadow-xl m-6 mt-3 md:max-xl:flex ring-1 ring-gray-900/5 rounded-lg'>
                <div className='p-4 bg-kuning border-b border-gray-200 rounded-t-lg flex flex-row'>
                    <div className="rounded-full h-3 w-3 bg-putih mr-2"></div>
                    <div className="rounded-full h-3 w-3 bg-putih mr-2"></div>
                    <div className="rounded-full h-3 w-3 bg-putih"></div>
                </div>
                <div className='p-4 bg-white border-b border-gray-200 rounded-b-lg'>
                    {/* Content */}
                    <div className=''>
                    <h1 className="font-semibold text-center text-xl text-gray-700">
                        Data Area Wisata
                        </h1>
                        <p className="text-center text-gray-700 mb-5">{data.id ? 'Edit Data' : 'Tambah Data'}</p>
                        {/* Data Input */}
                        <div className="flex flex-col">
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Area Wisata</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.namaArea || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            namaArea: value.target.value
                                        })}
                                />
                            </div>
                            {error && <p className="text-red-500 mt-1">{error}</p>}
                        </div>
                        {/* Button */}
                        <div className="card-actions justify-end">
                            <button onClick={onClose} className="btn bg-[#AF4F4F] text-putih outline-none border-transparent">Batalkan</button>
                            <button 
                                onClick={() => {
                                    handleSubmit()
                                }}
                            className="btn bg-[#3E9E3E] text-putih outline-none border-transparent">Simpan</button>
                        </div> 
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ModalArea





