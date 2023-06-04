import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";

const ModalRM = ({visible, onClose, data}) => {
    if (!visible) return null;
    const [datas, setDatas] = useState(data)
    console.log('modal data', data)

    const handleSubmit = () => {
        console.log('id', data.id)
        if(data.id){
            // update data
            const dataUpdate = {
                id: data.id,
                namaRM: datas.namaRM, 
                kapasitasRM: datas.kapasitasRM, 
                kapasitasParkirBus: datas.kapasitasParkirBus, 
                alamatRM: datas.alamatRM, 
                tlpRM: datas.tlpRM,
                picRM: datas.picRM, 
                hpPicRM: datas.hpPicRM,
                linkGmaps: datas.linkGmaps,
                updated_at: new Date(),
            }
            Inertia.post('/rumahmakan/update', dataUpdate)
        }else{
            // tambah data
            const TambahData = {
                namaRM: datas.namaRM, 
                kapasitasRM: datas.kapasitasRM, 
                kapasitasParkirBus: datas.kapasitasParkirBus, 
                alamatRM: datas.alamatRM, 
                tlpRM: datas.tlpRM,
                picRM: datas.picRM, 
                hpPicRM: datas.hpPicRM,
                linkGmaps: datas.linkGmaps,
                created_at: new Date(),
                updated_at: new Date(),
            }
            Inertia.post('/rumahmakan', TambahData)
        }
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
                        Tambah Data
                        </h1>
                        <p className="text-center text-gray-700 mb-5">Data Rumah Makan</p>
                        {/* Data Input */}
                        <div className="flex flex-col">
                            <div className="grid grid-cols-2 gap-3">
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Area Wisata</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Nama Rumah Makan</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.namaRM	 || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            namaRM	: value.target.value
                                        })}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Kapasitas Rumah Makan</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.kapasitasRM	 || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            kapasitasRM	: value.target.value
                                        })}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Kapasitas Parkir Bus</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.kapasitasParkirBus	 || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            kapasitasParkirBus	: value.target.value
                                        })}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Alamat </a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.alamatRM	 || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            alamatRM	: value.target.value
                                        })}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">No Telpon Rumah Makan</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.tlpRM	 || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            tlpRM	: value.target.value
                                        })}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">PIC Rumah Makan</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.picRM	 || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            picRM	: value.target.value
                                        })}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">No HP PIC</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.hpPicRM	 || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            hpPicRM	: value.target.value
                                        })}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Link Gmaps</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.linkGmaps	 || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            linkGmaps	: value.target.value
                                        })}
                                />
                            </div>
                            </div>
                        </div>
                        {/* Button */}
                        <div className="card-actions justify-end">
                            <button onClick={onClose} className="btn bg-[#AF4F4F] text-putih outline-none border-transparent">Batalkan</button>
                            <button 
                                onClick={ () => {
                                    handleSubmit()
                                    onClose()
                                }}  
                                
                                className="btn bg-[#3E9E3E] text-putih outline-none border-transparent">Simpan</button>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalRM