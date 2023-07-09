import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";

const ModalJenisTransport = ({ visible, onClose, data, dataCrew }) => {
  if (!visible) return null;
  const [datas, setDatas] = useState(data);
  const [error, setError] = useState("");
  const [inputErrors, setInputErrors] = useState({});
  console.log("modal data", dataCrew);

  const handleSubmit = () => {
    console.log("id", data.id);

    const newInputErrors = {};

    if (!datas.namaJenis) {
      newInputErrors.namaJenis = "Transportasi harus dipilih";
    }
    if (!datas.penggunaanUnit) {
      newInputErrors.penggunaanUnit = "Jenis Transportasi harus diisi";
    }
    if (!datas.maxKapasitas) {
      newInputErrors.maxKapasitas = "Nama harus diisi";
    }
    setInputErrors(newInputErrors); // Set pesan error baru

    if (Object.keys(newInputErrors).length > 0) {
      return; // Hentikan proses submit jika ada pesan error
    }

    setError(""); // Reset error jika semua validasi berhasil

    if (data.idJenisTransportasi) {
      // update data
      const dataUpdate = {
        id: data.idJenisTransportasi,
        namaJenis: datas.namaJenis,
        penggunaanUnit: datas.PenggunaanUnit,
        maxKapasitas: datas.MaxKapasitas,
        updated_at: new Date(),
      };
      Inertia.post("/jenisTransportasi/update", dataUpdate);
    } else {
      // tambah data
      const TambahData = {
        namaJenis: datas.namaJenis,
        PenggunaanUnit: datas.PenggunaanUnit,
        MaxKapasitas: datas.MaxKapasitas,
        created_at: new Date(),
        updated_at: new Date(),
      };
      Inertia.post("/jenisTransportasi", TambahData);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="relative bg-white shadow-xl m-6 mt-3 md:max-xl:flex ring-1 ring-gray-900/5 rounded-lg">
        <div className="p-4 bg-kuning border-b border-gray-200 rounded-t-lg flex flex-row">
          <div class="rounded-full h-3 w-3 bg-putih mr-2"></div>
          <div class="rounded-full h-3 w-3 bg-putih mr-2"></div>
          <div class="rounded-full h-3 w-3 bg-putih"></div>
        </div>
        <div className="p-4 bg-white border-b border-gray-200 rounded-b-lg">
          {/* Content */}
          <div className="">
            <h1 className="font-semibold text-center text-xl text-gray-700">
              Data Jenis Transportasi
            </h1>
            <p className="text-center text-gray-700 mb-5">
              {data.id ? "Edit Data" : "Tambah Data"}
            </p>
            {/* Data Input */}
            <div className="flex flex-col">
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">Nama Jenis</a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.namaJenis || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        namaJenis: value.target.value,
                      })
                    }
                  />
                  {inputErrors.namaJenis && (
                    <p className="text-red-500 mt-1">{inputErrors.namaJenis}</p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">Penggunaan Unit</a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.penggunaanUnit || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        penggunaanUnit: value.target.value,
                      })
                    }
                  />
                  {inputErrors.penggunaanUnit && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.penggunaanUnit}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">Maks Kapasitas</a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.maxKapasitas || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        maxKapasitas: value.target.value,
                      })
                    }
                  />
                  {inputErrors.maxKapasitas && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.maxKapasitas}
                    </p>
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

export default ModalJenisTransport;
