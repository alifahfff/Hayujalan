import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";

const ModalDestinasi = ({visible, onClose, data}) => {
    if (!visible) return null;
    const [datas, setDatas] = useState(data)
    console.log('modal data', data)


    const handleSubmit = () => {
        console.log('id', data.id)
        if(data.id){
            // update data
            const dataUpdate = {
                id: data.id,
                namaDestinasiWisata: datas.namaDestinasiWisata, 
                kapasitasDestinasiWisata: datas.kapasitasDestinasiWisata, 
                kapasitasParkirBus: datas.kapasitasParkirBus, 
                alamatDestinasiWisata: datas.alamatDestinasiWisata, 
                tlpDestinasiWisata: datas.tlpDestinasiWisata, 
                picDestinasiWisata: datas.picDestinasiWisata, 
                hpDestinasiWisata: datas.hpDestinasiWisata, 
                linkGmaps: datas.linkGmaps, 
                updated_at: new Date(),
            }
            Inertia.post('/destinasiwisata/update', dataUpdate)
        }else{
            // tambah data
            const TambahData = {
                namaDestinasiWisata: datas.namaDestinasiWisata, 
                kapasitasDestinasiWisata: datas.kapasitasDestinasiWisata, 
                kapasitasParkirBus: datas.kapasitasParkirBus, 
                alamatDestinasiWisata: datas.alamatDestinasiWisata, 
                tlpDestinasiWisata: datas.tlpDestinasiWisata, 
                picDestinasiWisata: datas.picDestinasiWisata, 
                hpDestinasiWisata: datas.hpDestinasiWisata, 
                linkGmaps: datas.linkGmaps,
                created_at: new Date(),
                updated_at: new Date(),
            }
            Inertia.post('/destinasiwisata', TambahData)
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
            <div className='relative bg-white shadow-xl m-6 mt-3 md:max-xl:flex ring-1 ring-gray-900/5 rounded-lg'>
                <div className='p-4 bg-kuning border-b border-gray-200 rounded-t-lg flex flex-row'>
                    <div class="rounded-full h-3 w-3 bg-putih mr-2"></div>
                    <div class="rounded-full h-3 w-3 bg-putih mr-2"></div>
                    <div class="rounded-full h-3 w-3 bg-putih"></div>
                </div>
                <div className='p-4 bg-white border-b border-gray-200 rounded-b-lg'>
                    {/* Content */}
                    <div className=''>
                    <h1 className="font-semibold text-center text-xl text-gray-700">
                        Data Destinasi Wisata
                        </h1>
                        <p className="text-center text-gray-700 mb-5">{data.id ? 'Edit Data' : 'Tambah Data'}</p>
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
                                <a className="mr-5 mt-2 text-black">Nama Destinasi Wisata</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.namaDestinasiWisata	 || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            namaDestinasiWisata	: value.target.value
                                        })}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Kapasitas Destinasi Wisata</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.kapasitasDestinasiWisata	 || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            kapasitasDestinasiWisata	: value.target.value
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
                                <a className="mr-5 mt-2 text-black">Alamat Destinasi Wisata</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.alamatDestinasiWisata	 || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            alamatDestinasiWisata	: value.target.value
                                        })}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">No Telpon Destinasi</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.tlpDestinasiWisata	 || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            tlpDestinasiWisata	: value.target.value
                                        })}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">PIC Destinasi</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.picDestinasiWisata	 || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            picDestinasiWisata	: value.target.value
                                        })}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">No HP PIC</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.hpDestinasiWisata	 || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            hpDestinasiWisata	: value.target.value
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
                            onClick={() => {
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

export default ModalDestinasi