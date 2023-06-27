import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";

const ModalHotel = ({visible, onClose, data, dataArea}) => {
    if (!visible) return null;
    const [datas, setDatas] = useState(data)
    console.log('modal data', dataArea)

    const handleSubmit = () => {
        console.log('id', data.id)
        if(data.idPenginapan){
            // update data
            const dataUpdate = {
                id: data.idPenginapan,
                namaPenginapan: datas.namaPenginapan,
                bintangPenginapan: datas.bintangPenginapan,
                alamatPenginapan: datas.alamatPenginapan,
                tlpPenginapan: datas.tlpPenginapan,
                picPenginapan: datas.picPenginapan,
                hpPicPenginapan: datas.hpPicPenginapan,
                linkGmapsPenginapan: datas.linkGmapsPenginapan,
                kapasitasParkirBusPenginapan: datas.kapasitasParkirBusPenginapan,
                tglBerlakuPenginapan: datas.tglBerlakuPenginapan,
                updated_at: new Date(),
            }
            Inertia.post('/hotel/update', dataUpdate)
        }else{
            // tambah data
            const TambahData = {
                idAreaWisata: datas.idAreaWisata,
                namaPenginapan: datas.namaPenginapan,
                bintangPenginapan: datas.bintangPenginapan,
                alamatPenginapan: datas.alamatPenginapan,
                tlpPenginapan: datas.tlpPenginapan,
                picPenginapan: datas.picPenginapan,
                hpPicPenginapan: datas.hpPicPenginapan,
                linkGmapsPenginapan: datas.linkGmapsPenginapan,
                kapasitasParkirBusPenginapan: datas.kapasitasParkirBusPenginapan,
                tglBerlakuPenginapan: datas.tglBerlakuPenginapan,
                created_at: new Date(),
                updated_at: new Date(),
            }
            Inertia.post('/hotel', TambahData)
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
                        <p className="text-center text-gray-700 mb-5">Data Penginapan</p>
                        {/* Data Input */}
                        <div className="flex flex-col">
                            <div className="grid grid-cols-2 gap-3">
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Area Wisata</a>
                                <select 
                                    placeholder="Jenis Klien" 
                                    defaultvalue="default"
                                    className="w-3/5 border border-gray-700 p-2 rounded mb-5"
                                    onChange={(e) => 
                                        setDatas({
                                            ...datas,
                                            idAreaWisata: e.target.value
                                        })
                                    }
                                >
                                    <option value="default">-{datas.namaArea}-</option>
                                    {dataArea.map((aw, index) => {
                                        return (
                                        <option 
                                        value={aw.idAreaWisata} 
                                        key={aw.idAreaWisata}
                                        >
                                            {aw.namaArea}
                                        </option>
                                    )})}
                                </select>
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Nama Penginapan</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.namaPenginapan	 || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            namaPenginapan	: value.target.value
                                        })}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Bintang Penginapan</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.bintangPenginapan	 || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            bintangPenginapan	: value.target.value
                                        })}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Alamat </a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.alamatPenginapan	 || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            alamatPenginapan	: value.target.value
                                        })}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">No Telpon Penginapan</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.tlpPenginapan	 || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            tlpPenginapan	: value.target.value
                                        })}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">PIC Penginapan</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.picPenginapan	 || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            picPenginapan	: value.target.value
                                        })}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">No HP PIC</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.hpPicPenginapan	 || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            hpPicPenginapan	: value.target.value
                                        })}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Kapasitas Parkir Bus</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.kapasitasParkirBusPenginapan	 || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            kapasitasParkirBusPenginapan	: value.target.value
                                        })}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Link Gmaps</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.linkGmapsPenginapan	 || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            linkGmapsPenginapan	: value.target.value
                                        })}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Tanggal Berlaku</a>
                                <input
                                    type="date"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                    value={datas.tglBerlakuPenginapan	 || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            tglBerlakuPenginapan	: value.target.value
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

export default ModalHotel