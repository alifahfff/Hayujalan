import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";

const TambahDetailTransport = ({visible, onClose, data, dataJenis}) => {
    console.log('data', data)
    if (!visible) return null;
    const [datas, setDatas] = useState(data)
    console.log('jenis', dataJenis)

    const handleSubmit = () => {
        console.log('id', data.id)
        if(data.id){
            // update data
            const dataUpdate = {
                id: data.id,
                idTransportasi: datas.idTransportasi,
                idJenisTransportasi: datas.idJenisTransportasi,
                nama: datas.nama, 
                tahun: datas.tahun, 
                kapasitas: datas.kapasitas, 
                qtyKetersediaanUnit: datas.qtyKetersediaanUnit, 
                hargaSewaWeekendDalamKota: datas.hargaSewaWeekendDalamKota,
                hargaSewaWeekdayDalamKota: datas.hargaSewaWeekdayDalamKota, 
                hargaSewaWeekendLuarKota: datas.hargaSewaWeekendLuarKota, 
                hargaSewaWeekdayLuarKota: datas.hargaSewaWeekdayLuarKota,
                urlInterior: datas.urlInterior, 
                urlEksterior: datas.urlEksterior,
                updated_at: new Date(),
            }
            Inertia.post('/transportasi/update/detail', dataUpdate)
        }else{
            // tambah data
            const TambahData = {
                idTransportasi: datas.idTransportasi,
                idJenisTransportasi: datas.idJenisTransportasi,
                nama: datas.nama, 
                tahun: datas.tahun, 
                kapasitas: datas.kapasitas, 
                qtyKetersediaanUnit: datas.qtyKetersediaanUnit, 
                hargaSewaWeekendDalamKota: datas.hargaSewaWeekendDalamKota,
                hargaSewaWeekdayDalamKota: datas.hargaSewaWeekdayDalamKota, 
                hargaSewaWeekendLuarKota: datas.hargaSewaWeekendLuarKota, 
                hargaSewaWeekdayLuarKota: datas.hargaSewaWeekdayLuarKota,
                urlInterior: datas.urlInterior, 
                urlEksterior: datas.urlEksterior,
                created_at: new Date(),
                updated_at: new Date(),
            }
            Inertia.post('/transportasi/detail', TambahData)
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
                        Detail Data
                        </h1>
                        <p className="text-center text-gray-700 mb-5">Tambah Data</p>
                        {/* Data Input */}
                        <div className="flex flex-col">
                            <div className="grid grid-cols-2 gap-3"> 
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Jenis Transportasi</a>
                                <select 
                                    placeholder="Jenis Klien" 
                                    defaultvalue="default"
                                    className=" border border-gray-700 p-2 rounded mb-5" style={{width:"12.7rem"}}
                                    onChange={(e) => 
                                        setDatas({
                                            ...datas,
                                            idJenisTransportasi: e.target.value
                                        })
                                    }
                                >
                                    <option value="default">-{datas.namaJenis}-</option>
                                    {dataJenis.map((aw, index) => {
                                        return (
                                        <option 
                                        value={aw.id} 
                                        key={aw.id}
                                        >
                                            {aw.namaJenis}
                                        </option>
                                    )})}
                                </select>
                            </div>   
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Nama</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.nama	 || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            nama	: value.target.value
                                        })}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Tahun</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.tahun	 || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            tahun	: value.target.value
                                        })}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Kapasitas</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.kapasitas	 || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            kapasitas	: value.target.value
                                        })}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Ketersediaan Unit</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.qtyKetersediaanUnit	 || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            qtyKetersediaanUnit	: value.target.value
                                        })}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Harga Sewa Weekend Dalam Kota</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.hargaSewaWeekendDalamKota	 || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            hargaSewaWeekendDalamKota	: value.target.value
                                        })}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Harga Sewa Weekday Dalam Kota</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.hargaSewaWeekdayDalamKota	 || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            hargaSewaWeekdayDalamKota	: value.target.value
                                        })}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Harga Sewa Weekend Luar Kota</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.hargaSewaWeekendLuarKota	 || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            hargaSewaWeekendLuarKota	: value.target.value
                                        })}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Harga Sewa Weekday Luar Kota</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.hargaSewaWeekdayLuarKota	 || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            hargaSewaWeekdayLuarKota	: value.target.value
                                        })}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Interior</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.urlInterior	 || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            urlInterior	: value.target.value
                                        })}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Eksterior</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.urlEksterior	 || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            urlEksterior	: value.target.value
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

export default TambahDetailTransport