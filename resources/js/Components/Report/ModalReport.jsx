import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";
import number from "@/Components/number";
import moment from 'moment';

const ModalReport = ({visible, onClose, data}) => {
    if (!visible) return null;
    const [datas, setDatas] = useState(data)
    console.log('modal data', datas)
    // console.log('datas', datas)

    const handleSubmit = () => {
        console.log('id', data.id)
        if(data.id){
            // update data
            const dataE = {
                id: data.id,
                nilaiKlien: datas.nilaiKlien, 
                statusBerjalan: datas.statusBerjalan, 
                feedback: datas.feedback,
                updated_at: new Date(),
            }
            console.log('dataE', dataE)
            Inertia.post('/report/update', dataE)
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
            <div className='relative scroll-auto bg-white shadow-xl m-6 mt-3 md:max-xl:flex ring-1 ring-gray-900/5 rounded-lg'>
                <div className='p-4 bg-kuning border-b border-gray-200 rounded-t-lg flex flex-row'>
                    <div className="rounded-full h-3 w-3 bg-putih mr-2"></div>
                    <div className="rounded-full h-3 w-3 bg-putih mr-2"></div>
                    <div className="rounded-full h-3 w-3 bg-putih"></div>
                </div>
                <div className='p-4 bg-white border-b border-gray-200 rounded-b-lg'>
                    {/* Content */}
                    <div className=''>
                    <h1 className="font-semibold text-center text-xl text-gray-700">
                        Laporan Quotation
                        </h1>
                        <p className="text-center text-gray-700 mb-5">Detail Data</p>
                        {/* Data Input */}
                        <div class="grid gap-4 ssm:grid-cols-4 sm:gap-4 pb-5">
                            <div class="">
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nama Klien</label>
                                <input 
                                disabled readOnly
                                type="text" 
                                name="name" 
                                id="name" 
                                class="bg-abu border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-abu dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                                value={data.qtransaksi.quotation.klien.namaKlien}/>
                            </div>
                            <div class="w-full">
                                <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nama Project</label>
                                <input 
                                disabled readOnly
                                type="text" 
                                name="brand" 
                                id="brand" 
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-abu dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                                value={data.qtransaksi.quotation.namaProject}/>
                            </div>
                            <div class="w-full">
                                <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Harga per-Pax</label>
                                <input 
                                disabled readOnly
                                type="text" 
                                name="price" 
                                id="price" 
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-abu dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                                value={number(data.qtransaksi.sellingPrice)}/>
                            </div>
                            <div class="w-full">
                                <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Total Harga</label>
                                <input 
                                disabled readOnly
                                type="text" 
                                name="price" 
                                id="price" 
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-abu dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                                value={number(data.qtransaksi.totalPrice)}/>
                            </div>
                            <div>
                                <label for="item-weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Status Quotation</label>
                                <input 
                                disabled readOnly
                                type="text" 
                                name="item-weight" 
                                id="item-weight" 
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-abu dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                                value={data.qtransaksi.status}/>
                            </div> 
                            <div class="w-full">
                                <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Tanggal Dibuat</label>
                                <input 
                                disabled readOnly
                                type="text" 
                                name="price" 
                                id="price" 
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-abu dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                                value={moment(data.timestamp).format('YYYY-MM-DD')}
                                />
                            </div>
                            <div class="w-full">
                                <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Tanggal Dibuat</label>
                                <select 
                                id="category" 
                                class="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-abu dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                onChange={(e) => 
                                    setDatas({
                                        ...datas,
                                        statusBerjalan: e.target.value
                                    })
                                }
                                >
                                    <option selected="">-{data.statusBerjalan}-</option>
                                    <option value="Berjalan">Berjalan</option>
                                    <option value="Berhenti">Berhenti</option>
                                </select>
                            </div>
                            <div class="w-full">
                                <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Penilaian Klien</label>
                                <select 
                                id="category" 
                                class="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-abu dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                onChange={(e) => 
                                    setDatas({
                                        ...datas,
                                        nilaiKlien: e.target.value
                                    })
                                }
                                >
                                    <option selected="">-{data.nilaiKlien}-</option>
                                    <option value="Bagus">Bagus</option>
                                    <option value="Biasa">Biasa</option>
                                    <option value="Buruk">Buruk</option>
                                </select>
                            </div>
                            <div class="sm:col-span-4">
                                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Feedback</label>
                                <textarea 
                                id="description" 
                                rows="4" 
                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-abu dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                                value={datas.feedback}
                                onChange={(e) => 
                                    setDatas({
                                        ...datas,
                                        feedback: e.target.value
                                    })
                                }
                                ></textarea>
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

export default ModalReport