import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";

const ModalDeleteFTr = ({visible, onClose, data}) => {
    if (!visible) return null;
    console.log('delete', data)

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
                    <h1 className="font-semibold text-center text-xl text-gray-700 pb-3">Apakah anda yakin ingin menghapus data ini ?</h1>
                        {/* Button */}
                        <div className="card-actions justify-end">
                            <button onClick={onClose} className="btn bg-[#AF4F4F] text-putih outline-none border-transparent">Tidak</button>
                            <button  
                                className="btn bg-[#3E9E3E] text-putih outline-none border-transparent"
                                onClick={onClose}
                            ><Link href={route('delete.fasilitasTour')} method="post" data={{ id: data.idFasilitasTour }} as="button">
                            IYA
                            </Link></button>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalDeleteFTr