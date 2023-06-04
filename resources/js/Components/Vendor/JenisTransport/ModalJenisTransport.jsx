import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";

const ModalJenisTransport = ({visible, onClose, data, dataCrew}) => {
    if (!visible) return null;
    const [datas, setDatas] = useState(data)
    console.log('modal data', dataCrew)

    const handleSubmit = () => {
        console.log('id', data.id)
        if(data.id){
            // update data
            const dataUpdate = {
                id: data.id,
                idCrewOperasional: datas.idCrewOperasional,
                namaJenis: datas.namaJenis, 
                PenggunaanUnit: datas.PenggunaanUnit, 
                MaxKapasitas: datas.MaxKapasitas, 
                updated_at: new Date(),
            }
            Inertia.post('/jenisTransportasi/update', dataUpdate)
        }else{
            // tambah data
            const TambahData = {
                idCrewOperasional: datas.idCrewOperasional,
                namaJenis: datas.namaJenis, 
                PenggunaanUnit: datas.PenggunaanUnit, 
                MaxKapasitas: datas.MaxKapasitas,  
                created_at: new Date(),
                updated_at: new Date(),
            }
            Inertia.post('/jenisTransportasi', TambahData)
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
                        Data Jenis Transportasi
                        </h1>
                        <p className="text-center text-gray-700 mb-5">{data.id ? 'Edit Data' : 'Tambah Data'}</p>
                        {/* Data Input */}
                        <div className="flex flex-col">
                        <div className="grid grid-cols-2 gap-2">
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Crew Operasional</a>
                                <select 
                                    placeholder="Jenis Klien" 
                                    defaultvalue="default"
                                    className="w-3/5 border border-gray-700 p-2 rounded mb-5"
                                    onChange={(e) => 
                                        setDatas({
                                            ...datas,
                                            idCrewOperasional: e.target.value
                                        })
                                    }
                                >
                                    <option value="default">-{datas.ketCrewOperasional}-</option>
                                    {dataCrew.map((aw, index) => {
                                        return (
                                        <option 
                                        value={aw.id} 
                                        key={aw.id}
                                        >
                                            {aw.ketCrewOperasional}
                                        </option>
                                    )})}
                                </select>
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Nama Jenis</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.namaJenis || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            namaJenis: value.target.value
                                        })}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Penggunaan Unit</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.PenggunaanUnit || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            PenggunaanUnit: value.target.value
                                        })}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Maks Kapasitas</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.MaxKapasitas || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            MaxKapasitas: value.target.value
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

export default ModalJenisTransport