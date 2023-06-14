import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";

const ModalAkses = ({visible, onClose, data, roles}) => {
    if (!visible) return null;
    const [datas, setDatas] = useState(data)
    console.log('modal data', data)
    console.log('roles', roles)
    console.log('datas', datas)

    const handleSubmit = () => {
        console.log('id', data.id)
        if(datas.idRoles == 1){
            alert(1)
            if(data.id){
                // update data
                const dataE = {
                    id: datas.id,
                    idAdmin: datas.user.idAdmin,
                    name: datas.name, 
                    email: datas.email, 
                    idRoles: datas.idRoles,
                    password: datas.password,
                    telepon: datas.user.telepon,
                    status: datas.user.status,
                    updated_at: new Date(),
                }
                console.log('dataE', dataE)
                Inertia.post('/akses/update/admin', dataE)
            }else{
                // tambah data
                const dataT = {
                    name: datas.name, 
                    email: datas.email, 
                    idRoles: datas.idRoles,
                    password: datas.password,
                    telepon: datas.user.telepon,
                    status: datas.user.status,
                    created_at: new Date(),
                    updated_at: new Date(),
                }
                console.log('dataT', dataT)
                Inertia.post('/akses/admin', dataT)
            }
        }
        if(datas.idRoles == 2){
            alert(4)
            if(data.id){
                // update data
                const dataE = {
                    id: datas.id,
                    idProgram: datas.user.idProgram,
                    name: datas.name, 
                    email: datas.email, 
                    idRoles: datas.idRoles,
                    password: datas.password,
                    telepon: datas.user.telepon,
                    status: datas.user.status,
                    updated_at: new Date(),
                }
                console.log('dataE', dataE)
                Inertia.post('/akses/update/program', dataE)
            }else{
                // tambah data
                const dataT = {
                    name: datas.name, 
                    email: datas.email, 
                    idRoles: datas.idRoles,
                    password: datas.password,
                    telepon: datas.user.telepon,
                    status: datas.user.status,
                    created_at: new Date(),
                    updated_at: new Date(),
                }
                console.log('dataT', dataT)
                Inertia.post('/akses/program', dataT)
            }
        }
        if(datas.idRoles == 3){
            alert(5)
            if(data.id){
                // update data
                const dataE = {
                    id: datas.id,
                    idSales: datas.user.idSales,
                    name: datas.name, 
                    email: datas.email, 
                    idRoles: datas.idRoles,
                    password: datas.password,
                    telepon: datas.user.telepon,
                    status: datas.user.status,
                    updated_at: new Date(),
                }
                console.log('dataE', dataE)
                Inertia.post('/akses/update/sales', dataE)
            }else{
                // tambah data
                const dataT = {
                    name: datas.name, 
                    email: datas.email, 
                    idRoles: datas.idRoles,
                    password: datas.password,
                    telepon: datas.user.telepon,
                    status: datas.user.status,
                    created_at: new Date(),
                    updated_at: new Date(),
                }
                console.log('dataT', dataT)
                Inertia.post('/akses/sales', dataT)
            }
        }
        if(datas.idRoles == 4){
            alert(6)
            if(data.id){
                // update data
                const dataE = {
                    id: datas.id,
                    idKeuangan: datas.user.idKeuangan,
                    name: datas.name, 
                    email: datas.email, 
                    idRoles: datas.idRoles,
                    password: datas.password,
                    telepon: datas.user.telepon,
                    status: datas.user.status,
                    updated_at: new Date(),
                }
                console.log('dataE', dataE)
                Inertia.post('/akses/update/keuangan', dataE)
            }else{
                // tambah data
                const dataT = {
                    name: datas.name, 
                    email: datas.email, 
                    idRoles: datas.idRoles,
                    password: datas.password,
                    telepon: datas.user.telepon,
                    status: datas.user.status,
                    created_at: new Date(),
                    updated_at: new Date(),
                }
                console.log('dataT', dataT)
                Inertia.post('/akses/keuangan', dataT)
            }
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
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Nama</a>
                                <input
                                    type="text"
                                    className="w-3/5 border border-gray-700 p-2 rounded mb-5"
                                    value={datas.name || ''}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            name: value.target.value
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
                                            email: value.target.value
                                        })}
                                    value={datas.email}
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
                                            password: value.target.value
                                        })}
                                    value={datas.password}
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
                                    <option value="default">-{datas.roles.namaRoles}-</option>
                                    {roles.map((rl, index) => {
                                    return (
                                        <option 
                                        value={rl.id} 
                                        key={rl.id}
                                        >
                                        {rl.namaRoles}
                                        </option>
                                    )})}
                                </select>
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Telepon</a>
                                <input
                                    type="text"
                                    className="w-3/5 border border-gray-700 p-2 rounded mb-5"
                                    value={datas.user.telepon}
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,  
                                            user : {
                                                ...datas.user,
                                                telepon: value.target.value   
                                            }
                                        })}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Status</a>
                                {/* <input
                                    type="text"
                                    className="w-3/5 border border-gray-700 p-2 rounded mb-5"
                                    onChange={(value) => 
                                        setDatas({
                                            ...datas,
                                            status: value.target.value
                                        })}
                                    value={datas.user.status}
                                /> */}
                                <select 
                                    placeholder="Roles" 
                                    defaultValue="default"
                                    className="w-3/5 border border-gray-700 p-2 rounded mb-5"
                                    value={datas.user.status}
                                    onChange={(e) => 
                                        setDatas({
                                            ...datas,
                                            user : {
                                                ...datas.user,
                                                status: e.target.value
                                            }
                                        })
                                    }
                                >
                                    <option value="default">-{datas.user.status}-</option>
                                    <option value="Active">Active</option>
                                    <option value="Deactive">Deactive</option>
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