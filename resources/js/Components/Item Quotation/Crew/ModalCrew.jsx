import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";

const ModalCrew = ({ visible, onClose, crew }) => {
if (!visible) return null;
const [datas, setDatas] = useState(crew);
const [inputErrors, setInputErrors] = useState({});
// console.log('modal crew', crew)
// console.log('datas', datas)

const handleSubmit = () => {
    console.log("id", crew.idCrewOperasional);

    const newInputErrors = {};

    if (!datas.ketCrewOperasional) {
    newInputErrors.ketCrewOperasional = "Ket Crew Operasional harus dipilih";
    }
    if (!datas.biayaCrewOperasional) {
    newInputErrors.biayaCrewOperasional =
        "Biaya Crew Operasional harus diisi";
    }
    if (!datas.satuanCrew) {
    newInputErrors.satuanCrew = "Satuan Crew harus diisi";
    }

    setInputErrors(newInputErrors); // Set pesan error baru

    if (Object.keys(newInputErrors).length > 0) {
    return; // Hentikan proses submit jika ada pesan error
    }


    if (crew.idCrewOperasional) {
    // update data
    const dataE = {
        id: crew.idCrewOperasional,
        ketCrewOperasional: datas.ketCrewOperasional,
        biayaCrewOperasional: datas.biayaCrewOperasional,
        satuanCrew: datas.satuanCrew,
        tglUpdateCrew: datas.tglUpdateCrew,
        updated_at: new Date(),
    };
    Inertia.post("/crew/update", dataE);
    } else {
    // tambah data
    const data = {
        ketCrewOperasional: datas.ketCrewOperasional,
        biayaCrewOperasional: datas.biayaCrewOperasional,
        satuanCrew: datas.satuanCrew,
        tglUpdateCrew: datas.tglUpdateCrew,
        created_at: new Date(),
        updated_at: new Date(),
    };
    Inertia.post("/crew", data);
    }
    onClose();
};

return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
    <div className="relative bg-white shadow-xl m-6 mt-3 md:max-xl:flex ring-1 ring-gray-900/5 rounded-lg">
        <div className="p-4 bg-kuning border-b border-gray-200 rounded-t-lg flex flex-row">
        <div className="rounded-full h-3 w-3 bg-putih mr-2"></div>
        <div className="rounded-full h-3 w-3 bg-putih mr-2"></div>
        <div className="rounded-full h-3 w-3 bg-putih"></div>
        </div>
        <div className="p-4 bg-white border-b border-gray-200 rounded-b-lg">
        {/* Content */}
        <div className="">
            <h1 className="font-semibold text-center text-xl text-gray-700">
            Crew Operasional
            </h1>
            <p className="text-center text-gray-700 mb-5">
            {crew.id ? "Edit Data" : "Tambah Data"}
            </p>

        {/* Data Input */}
        <div className="flex flex-col">
            <div className="form-group">
                <label className="mr-5 mt-2 text-black">Crew Operasional</label>
                <input
                type="text"
                className="border border-gray-700 p-2 rounded mb-2"
                value={datas.ketCrewOperasional || ""}
                onChange={(value) =>
                    setDatas({
                    ...datas,
                    ketCrewOperasional: value.target.value,
                    })
                }
                />
                {inputErrors.ketCrewOperasional && (
                <p className="text-red-500 mt-1">
                    {inputErrors.ketCrewOperasional}
                </p>
                )}
            </div>
            <div className="form-group">
                <label className="mr-5 mt-2 text-black">Biaya</label>
                <input
                type="text"
                className="border border-gray-700 p-2 rounded mb-2"
                value={datas.biayaCrewOperasional || ""}
                onChange={(value) =>
                    setDatas({
                    ...datas,
                    biayaCrewOperasional: value.target.value,
                    })
                }
                />
                {inputErrors.biayaCrewOperasional && (
                <p className="text-red-500 mt-1">
                    {inputErrors.biayaCrewOperasional}
                </p>
                )}
            </div>
            <div className="form-group">
                <label className="mr-5 mt-2 text-black">Satuan</label>
                <input
                type="text"
                className="border border-gray-700 p-2 rounded mb-2"
                value={datas.satuanCrew || ""}
                onChange={(value) =>
                    setDatas({
                    ...datas,
                    satuanCrew: value.target.value,
                    })
                }
                />
                {inputErrors.satuanCrew && (
                <p className="text-red-500 mt-1">{inputErrors.satuanCrew}</p>
                )}
            </div>
            </div>

            {/* Button */}
            <div className="card-actions justify-end">
            <button
                onClick={onClose}
                className="btn bg-[#AF4F4F] text-putih outline-none border-transparent"
            >
                Batalkan
            </button>
            <button
                onClick={() => {
                handleSubmit();
                }}
                className="btn bg-[#3E9E3E] text-putih outline-none border-transparent"
            >
                Simpan
            </button>
            </div>
        </div>
        </div>
    </div>
    </div>
);
};

export default ModalCrew;