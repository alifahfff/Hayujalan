import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";

const ModalKlien = ({visible, onClose, data, dataJK}) => {
    if (!visible) return null;
    const [datas, setDatas] = useState(data)
    console.log('modal data', datas)
    // console.log('datas', datas)

    const route = () => {
        Inertia.get('/klien')
    }

    const handleSubmit = () => {
        console.log('id', datas.id)
        if(datas.id){
            // update data
            const dataE = {
                id: datas.id,
                namaKlien: datas.namaKlien, 
                alamatKlien: datas.alamatKlien,
                tlpKlien: datas.tlpKlien,
                namaPicKlien: datas.namaPicKlien,
                jenis_klien_id: datas.jenis_klien_id,
                tlpPicKlien: datas.tlpPicKlien,
                updated_at: new Date(),
            }
            console.log('dataE', dataE)
            Inertia.post('/klien/update', dataE)
        }else{
            // tambah data
            const dataT = {
                namaKlien: datas.namaKlien, 
                alamatKlien: datas.alamatKlien,
                tlpKlien: datas.tlpKlien,
                namaPicKlien: datas.namaPicKlien,
                tlpPicKlien: datas.tlpPicKlien,
                jenis_klien_id: datas.jenis_klien_id,
                created_at: new Date(),
                updated_at: new Date(),
            }
            Inertia.post('/klien', dataT)
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
                        Data Klien
                        </h1>
                        <p className="text-center text-gray-700 mb-5">Tambah Data</p>

                        {/* Data Input */}
                        <div className="flex flex-col">
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Nama Klien</a>
                                <input
                                    type="text"
                                    className="w-3/5 border border-gray-700 p-2 rounded mb-5"
                                    value={datas.namaKlien || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            namaKlien: value.target.value
                                        })}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Jenis Klien</a>
                                <select 
                                    placeholder="Jenis Klien" 
                                    defaultValue="default"
                                    className="w-3/5 border border-gray-700 p-2 rounded mb-5"
                                    onChange={(e) => 
                                        setDatas({
                                            ...datas,
                                            jenis_klien_id: e.target.value
                                        })
                                    }
                                >
                                    <option value="default">-{datas.jenis_klien.namaJenisKlien}-</option>
                                    {dataJK.map((jk, index) => {
                                        return (
                                        <option 
                                        value={jk.id} 
                                        key={jk.id}
                                        >
                                            {jk.namaJenisKlien}
                                        </option>
                                    )})}
                                </select>
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Alamat</a>
                                <input
                                    type="text"
                                    className="w-3/5 border border-gray-700 p-2 rounded mb-5"
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            alamatKlien: value.target.value
                                        })}
                                    value={datas.alamatKlien}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Nomor Telepon</a>
                                <input
                                    type="text"
                                    className="w-3/5 border border-gray-700 p-2 rounded mb-5"
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            tlpKlien: value.target.value
                                        })}
                                    value={datas.tlpKlien}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">PIC Klien</a>
                                <input
                                    type="text"
                                    className="w-3/5 border border-gray-700 p-2 rounded mb-5"
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            namaPicKlien: value.target.value
                                        })}
                                    value={datas.namaPicKlien}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Telepon PIC Klien</a>
                                <input
                                    type="text"
                                    className="w-3/5 border border-gray-700 p-2 rounded mb-5"
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            tlpPicKlien: value.target.value
                                        })}
                                    value={datas.tlpPicKlien}
                                />
                            </div>
                        </div>
                        {/* Button */}
                        <div className="card-actions justify-end">
                            <button onClick={onClose} className="btn bg-[#AF4F4F] text-putih outline-none border-transparent">Batalkan</button>
                            <button 
                                onClick={() => {
                                    handleSubmit()
                                    onClose()
                                    route()
                                }}  
                                className="btn bg-[#3E9E3E] text-putih outline-none border-transparent"
                            >Simpan</button>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalKlien