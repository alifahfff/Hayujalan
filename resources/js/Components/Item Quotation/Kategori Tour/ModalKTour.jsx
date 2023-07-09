import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";

const ModalKTour = ({ visible, onClose, data }) => {
  if (!visible) return null;
  const [datas, setDatas] = useState(data);
  const [inputErrors, setInputErrors] = useState({});
  console.log("modal data", data);
  // console.log('datas', datas)

  const handleSubmit = () => {
    console.log("id", data.id);
    const newInputErrors = {};
    if (!datas.namaKategoriTour) {
      newInputErrors.namaKategoriTour = "Nama Kategori Tour harus diisi";
    }
    if (!datas.presentaseKeuntungan) {
      newInputErrors.presentaseKeuntungan = "Presentase Keuntungan harus diisi";
    }

    setInputErrors(newInputErrors); // Set pesan error baru

    if (Object.keys(newInputErrors).length > 0) {
      return; // Hentikan proses submit jika ada pesan error
    }

    if (data.idKategoriTour) {
      // update data
      const dataE = {
        id: data.idKategoriTour,
        namaKategoriTour: datas.namaKategoriTour,
        presentaseKeuntungan: datas.presentaseKeuntungan,
        idBobot: datas.idBobot,
        updated_at: new Date(),
      };
      Inertia.post("/kategoriTour/update", dataE);
    } else {
      // tambah data
      const dataT = {
        namaKategoriTour: datas.namaKategoriTour,
        presentaseKeuntungan: datas.presentaseKeuntungan,
        created_at: new Date(),
        updated_at: new Date(),
      };
      Inertia.post("/kategoriTour", dataT);
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
              Kategori Tour
            </h1>
            <p className="text-center text-gray-700 mb-5">Tambah Data</p>
            {/* Data Input */}
            <div className="flex flex-col">
              <div className="flex flex-row justify-between">
                <a className="mr-5 mt-2 text-black">Kategori Tour</a>
                <input
                  type="text"
                  className="border border-gray-700 p-2 rounded mb-5"
                  value={datas.namaKategoriTour || ""}
                  onChange={(value) =>
                    setDatas({
                      ...datas,
                      namaKategoriTour: value.target.value,
                    })
                  }
                />
                {inputErrors.namaKategoriTour && (
                  <p className="text-red-500 mt-1">
                    {inputErrors.namaKategoriTour}
                  </p>
                )}
              </div>
              <div className="flex flex-row justify-between">
                <a className="mr-5 mt-2 text-black">Persentase Keuntungan</a>
                <input
                  type="text"
                  className="border border-gray-700 p-2 rounded mb-5"
                  onChange={(value) =>
                    setDatas({
                      ...datas,
                      presentaseKeuntungan: value.target.value,
                    })
                  }
                  value={datas.presentaseKeuntungan}
                />
                {inputErrors.presentaseKeuntungan && (
                  <p className="text-red-500 mt-1">
                    {inputErrors.presentaseKeuntungan}
                  </p>
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

export default ModalKTour;
