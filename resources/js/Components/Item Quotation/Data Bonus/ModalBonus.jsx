import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";

const ModalBonus = ({visible, onClose, data}) => {
    if (!visible) return null;
    const [datas, setDatas] = useState(data)
    console.log('modal data', data)
    // console.log('datas', datas)

    const handleSubmit = () => {
        console.log('id', data.idDataBonus)
        if(data.idDataBonus){
            // update data
            const dataE = {
                id: data.idDataBonus,
                ketDataBonus: datas.ketDataBonus, 
                biayaDataBonus: datas.biayaDataBonus, 
                satuanBonus: datas.satuanBonus,
                tglUpdateBonus: new Date(),
                updated_at: new Date(),
            }
            Inertia.post('/bonus/update', dataE)
        }else{
            // tambah data
            const dataT = {
                ketDataBonus: datas.ketDataBonus, 
                biayaDataBonus: datas.biayaDataBonus, 
                satuanBonus: datas.satuanBonus,
                tglUpdateBonus: new Date(),
                created_at: new Date(),
                updated_at: new Date(),
            }
            Inertia.post('/bonus', dataT)
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
                        Data Bonus
                        </h1>
                        <p className="text-center text-gray-700 mb-5">Tambah Data</p>
                        {/* Data Input */}
                        <div className="flex flex-col">
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Bonus</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.ketDataBonus || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            ketDataBonus: value.target.value
                                        })}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Biaya</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            biayaDataBonus: value.target.value
                                        })}
                                    value={datas.biayaDataBonus}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Satuan</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            satuanBonus: value.target.value
                                        })}
                                    value={datas.satuanBonus}
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

export default ModalBonus