import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";

const ModalAkses = ({visible, onClose, data, roles}) => {
    if (!visible) return null;
    const [datas, setDatas] = useState(data)
    console.log('modal data', data)
    console.log('roles', roles)
    console.log('datas', datas)

    const handleSubmit = () => {
        console.log('id', data.idUser)
            if(data.idUser){
                // update data
                const dataE = {
                    id: data.idUser,
                    namaUser: datas.namaUser, 
                    Email: datas.Email, 
                    Password: datas.Password,
                    updated_at: new Date(),
                }
                console.log('dataE', dataE)
                Inertia.post('/akses/update/user', dataE)
            }else{
                // tambah data
                const dataT = {
                    idRoles: datas.idRoles,
                    namaUser: datas.namaUser, 
                    Email: datas.Email, 
                    Password: datas.Password,
                    created_at: new Date(),
                    updated_at: new Date(),
                }
                console.log('dataT', dataT)
                Inertia.post('/akses/user', dataT)
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
                        Tambah Hak Akses
                        </h1>
                        <p className="text-center text-gray-700 mb-5">Tambah Data</p>
                        {/* Data Input */}
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Nama</a>
                                <input
                                    type="text"
                                    className="w-3/5 border border-gray-700 p-2 rounded mb-5"
                                    value={datas.namaUser || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            namaUser: value.target.value
                                        })}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Email</a>
                                <input
                                    type="text"
                                    className="w-3/5 border border-gray-700 p-2 rounded mb-5"
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            Email: value.target.value
                                        })}
                                    value={datas.Email}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Password</a>
                                <input
                                    type="text"
                                    className="w-3/5 border border-gray-700 p-2 rounded mb-5"
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            Password: value.target.value
                                        })}
                                    //value={datas.Password}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Roles</a>
                                <select 
                                    placeholder="Roles" 
                                    defaultValue="default"
                                    className="w-3/5 border border-gray-700 p-2 rounded mb-5"
                                    onChange={(e) => 
                                        setDatas({
                                            ...datas,
                                            idRoles: e.target.value
                                        })
                                    }
                                >
                                    <option value="default">-{datas.namaRoles}-</option>
                                    {roles.map((rl, index) => {
                                    return (
                                        <option 
                                        value={rl.idRoles} 
                                        key={rl.idRoles}
                                        >
                                        {rl.namaRoles}
                                        </option>
                                    )})}
                                </select>
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

export default ModalAkses