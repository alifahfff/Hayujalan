import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";

const TambahDetailDestinasi = ({visible, onClose, data}) => {
    console.log('data', data)
    if (!visible) return null;

    const [datas, setDatas] = useState(data)
    console.log('modal data', data)

    const handleSubmit = () => {
        console.log('id', data.id)
        if(data.id){
            // update data
            const dataUpdate = {
                id: data.id,
                rangePeserta: datas.rangePeserta, 
                tiketMasukWeekday: datas.tiketMasukWeekday, 
                tiketMasukWeekend: datas.tiketMasukWeekend,
                updated_at: new Date(),
            }
            Inertia.post('/destinasiwisata/update/detail', dataUpdate)
        }else{
            // tambah data
            const TambahData = {
                rangePeserta: datas.rangePeserta, 
                tiketMasukWeekday: datas.tiketMasukWeekday, 
                tiketMasukWeekend: datas.tiketMasukWeekend,
                linkGmaps: datas.linkGmaps,
                created_at: new Date(),
                updated_at: new Date(),
            }
            Inertia.post('/destinasiwisata/detail', TambahData)
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
                        Detail Data
                        </h1>
                        <p className="text-center text-gray-700 mb-5">Tambah Data</p>
                        {/* Data Input */}
                        <div className="flex flex-col">
                            <div className="grid grid-cols-2 gap-3">    
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Range Peserta</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.rangePeserta	 || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            rangePeserta	: value.target.value
                                        })}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Tiket Masuk Weekday</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.tiketMasukWeekday	 || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            tiketMasukWeekday	: value.target.value
                                        })}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Tiket Masuk Weekend</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.tiketMasukWeekend	 || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            tiketMasukWeekend	: value.target.value
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

export default TambahDetailDestinasi