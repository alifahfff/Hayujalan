import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";

const TambahDetailRM = ({ visible, onClose, data }) => {
  console.log("data", data);
  if (!visible) return null;

  const [datas, setDatas] = useState(data);
  console.log("modal data", data);
  const [error, setError] = useState("");
  const [inputErrors, setInputErrors] = useState({});

  const handleSubmit = () => {
    console.log("id", data.id);

    const newInputErrors = {};

    if (!datas.namaMenu) {
      newInputErrors.namaMenu = "Nama Menu harus dipilih";
    }
    if (!datas.detailMenu) {
      newInputErrors.detailMenu = "Detail Menu harus diisi";
    }
    if (!datas.hargaMenu) {
      newInputErrors.hargaMenu = "Harga Menu harus diisi";
    }

    setInputErrors(newInputErrors); // Set pesan error baru

    if (Object.keys(newInputErrors).length > 0) {
      return; // Hentikan proses submit jika ada pesan error
    }

    setError(""); // Reset error jika semua validasi berhasil

    if (data.id) {
      // update data
      const dataUpdate = {
        id: data.id,
        namaMenu: datas.namaMenu,
        detailMenu: datas.detailMenu,
        hargaMenu: datas.hargaMenu,
        updated_at: new Date(),
      };
      Inertia.post("/rumahmakan/update/detail", dataUpdate);
    } else {
      // tambah data
      const TambahData = {
        namaMenu: datas.namaMenu,
        detailMenu: datas.detailMenu,
        hargaMenu: datas.hargaMenu,
        idRM: datas.idRM,
        created_at: new Date(),
        updated_at: new Date(),
      };
      Inertia.post("/rumahmakan/detail", TambahData);
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
              Detail Data
            </h1>
            <p className="text-center text-gray-700 mb-5">Tambah Data</p>
            {/* Data Input */}
            <div className="flex flex-col">
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">Nama Menu</a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.namaMenu || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        namaMenu: value.target.value,
                      })
                    }
                  />
                  {inputErrors.namaMenu && (
                    <p className="text-red-500 mt-1">{inputErrors.namaMenu}</p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">Detail Menu</a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.detailMenu || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        detailMenu: value.target.value,
                      })
                    }
                  />
                  {inputErrors.detailMenu && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.detailMenu}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">Harga Menu</a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.hargaMenu || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        hargaMenu: value.target.value,
                      })
                    }
                  />
                  {inputErrors.hargaMenu && (
                    <p className="text-red-500 mt-1">{inputErrors.hargaMenu}</p>
                  )}
                </div>
                {error && <p className="text-red-500 mt-1">{error}</p>}
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

export default TambahDetailRM;
