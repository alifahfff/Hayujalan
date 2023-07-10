import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";

const ModalFTour = ({ visible, onClose, data }) => {
  if (!visible) return null;
  const [datas, setDatas] = useState(data);
  const [inputErrors, setInputErrors] = useState({});
  const [error, setError] = useState("");
  console.log("modal data", data);
  // console.log('datas', datas)

  const handleSubmit = () => {
    console.log("id", data.id);

    const newInputErrors = {};

    if (!datas.ketFasilitasTour) {
      newInputErrors.ketFasilitasTour = "Ket Fasilitas Tour harus dipilih";
    }
    if (!datas.biayaFasilitas) {
      newInputErrors.biayaFasilitas = "Biaya Fasilitas Tour harus diisi";
    }
    if (!datas.satuanFasilitas) {
      newInputErrors.satuanFasilitas = "Satuan Fasilitas harus diisi";
    }

    setInputErrors(newInputErrors); // Set pesan error baru

    if (Object.keys(newInputErrors).length > 0) {
      return; // Hentikan proses submit jika ada pesan error
    }

    setError(""); // Reset error jika semua validasi berhasil

    if (data.idFasilitasTour) {
      // update data
      const dataE = {
        id: data.idFasilitasTour,
        ketFasilitasTour: datas.ketFasilitasTour,
        biayaFasilitas: datas.biayaFasilitas,
        satuanFasilitas: datas.satuanFasilitas,
        tglUpdatedFasilitas: datas.tglBerlakuItem,
        updated_at: new Date(),
      };
      Inertia.post("/fasilitasTour/update", dataE);
    } else {
      // tambah data
      const dataT = {
        ketFasilitasTour: datas.ketFasilitasTour,
        biayaFasilitas: datas.biayaFasilitas,
        satuanFasilitas: datas.satuanFasilitas,
        tglBerlakuItem: datas.tglBerlakuItem,
        created_at: new Date(),
        updated_at: new Date(),
      };
      Inertia.post("/fasilitasTour", dataT);
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
              Fasilitas Tour
            </h1>
            <p className="text-center text-gray-700 mb-5">
              {data.id ? "Edit Data" : "Tambah Data"}
            </p>

            {/* Data Input */}
            <div className="flex flex-col">
              <div className="flex flex-row justify-between">
                <a className="mr-5 mt-2 text-black">Fasilitas Tour</a>
                <input
                  type="text"
                  className="border border-gray-700 p-2 rounded mb-5"
                  value={datas.ketFasilitasTour || ""}
                  onChange={(value) =>
                    setDatas({
                      ...datas,
                      ketFasilitasTour: value.target.value,
                    })
                  }
                />
                {inputErrors.ketFasilitasTour && (
                  <p className="text-red-500 mt-1">
                    {inputErrors.ketFasilitasTour}
                  </p>
                )}
              </div>
              <div className="flex flex-row justify-between">
                <a className="mr-5 mt-2 text-black">Biaya</a>
                <input
                  type="text"
                  className="border border-gray-700 p-2 rounded mb-5"
                  onChange={(value) =>
                    setDatas({
                      ...datas,
                      biayaFasilitas: value.target.value,
                    })
                  }
                  value={datas.biayaFasilitas}
                />
                {inputErrors.biayaFasilitas && (
                  <p className="text-red-500 mt-1">
                    {inputErrors.biayaFasilitas}
                  </p>
                )}
              </div>
              <div className="flex flex-row justify-between">
                <a className="mr-5 mt-2 text-black">Satuan</a>
                <input
                  type="text"
                  className="border border-gray-700 p-2 rounded mb-5"
                  onChange={(value) =>
                    setDatas({
                      ...datas,
                      satuanFasilitas: value.target.value,
                    })
                  }
                  value={datas.satuanFasilitas}
                />
                {inputErrors.satuanFasilitas && (
                  <p className="text-red-500 mt-1">
                    {inputErrors.satuanFasilitas}
                  </p>
                )}
              </div>
              {error && <p className="text-red-500 mt-1">{error}</p>}
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

export default ModalFTour;
