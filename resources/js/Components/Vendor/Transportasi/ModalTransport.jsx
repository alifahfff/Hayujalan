const ModalTransport = ({visible, onClose}) => {
    if (!visible) return null;

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
                        Tambah Data
                        </h1>
                        <p className="text-center text-gray-700 mb-5">Data Transportasi</p>
                        {/* Data Input */}
                        <div className="flex flex-col">
                            <div className="grid grid-cols-3 gap-3">
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Area Wisata</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Nama Transportasi</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Alamat Transportasi</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">No Telpon</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">PIC Transportasi</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">No HP PIC</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Nama Kendaraan</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Tahun kendaraan</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Kapasitas</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Ketersediaan Unit</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Harga Weekend Dalam Kota</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Harga Weekday Dalam Kota</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Harga Weekday Luar Kota</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <a className="mr-5 mt-2 text-black">Harga Weekend Luar Kota</a>
                                <input
                                    type="text"
                                    className="border border-gray-700 p-2 rounded mb-5"
                                />
                            </div>
                            </div>
                        </div>
                        {/* Button */}
                        <div className="card-actions justify-end">
                            <button onClick={onClose} className="btn bg-[#AF4F4F] text-putih outline-none border-transparent">Batalkan</button>
                            <button onClick={onClose} className="btn bg-[#3E9E3E] text-putih outline-none border-transparent">Simpan</button>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalTransport