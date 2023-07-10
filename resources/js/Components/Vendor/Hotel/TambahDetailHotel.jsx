import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";

const TambahDetailHotel = ({ visible, onClose, data }) => {
  console.log("data", data);
  if (!visible) return null;

  const [datas, setDatas] = useState(data);
  console.log("modal data", data);
  const [error, setError] = useState("");
  const [inputErrors, setInputErrors] = useState({});

  const handleSubmit = () => {
    console.log("id", data.id);

    const newInputErrors = {};

    if (!datas.namaJenisKamar) {
      newInputErrors.namaJenisKamar = "Nama Jenis Kamar harus dipilih";
    }
    if (!datas.kapasitasKamar) {
      newInputErrors.kapasitasKamar = "Kapasitas Kamar harus diisi";
    }
    if (!datas.qtyKetersediaanKamar) {
      newInputErrors.qtyKetersediaanKamar =
        "Qty Ketersediaan Kamar harus diisi";
    }
    if (!datas.hargaSewaWeekdayPerKamar) {
      newInputErrors.hargaSewaWeekdayPerKamar =
        "Harga Sewa Weekday Per Kamar harus diisi";
    }
    if (!datas.hargaSewaWeekendPerKamar) {
      newInputErrors.hargaSewaWeekendPerKamar =
        "Harga Sewa Weekend Per Kamar harus diisi";
    }
    if (!datas.tglUpdateDetailPenginapan) {
      newInputErrors.tglUpdateDetailPenginapan =
        "Tanggal Updated harus diisi";
    }
    if (!datas.expiredDetailPenginapan) {
      newInputErrors.expiredDetailPenginapan =
        "Tanggal Berlaku harus diisi";
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
        namaJenisKamar: datas.namaJenisKamar,
        kapasitasKamar: datas.kapasitasKamar,
        qtyKetersediaanKamar: datas.qtyKetersediaanKamar,
        hargaSewaWeekdayPerKamar: datas.hargaSewaWeekdayPerKamar,
        hargaSewaWeekendPerKamar: datas.hargaSewaWeekendPerKamar,
        expiredDetailPenginapan: datas.expiredDetailPenginapan,
        tglUpdateDetailPenginapan: datas.tglUpdateDetailPenginapan,
        created_at: new Date(),
        updated_at: new Date(),
      };
      Inertia.post("/hotel/update/detail", dataUpdate);
    } else {
      // tambah data
      const TambahData = {
        idPenginapan: datas.idPenginapan,
        namaJenisKamar: datas.namaJenisKamar,
        kapasitasKamar: datas.kapasitasKamar,
        qtyKetersediaanKamar: datas.qtyKetersediaanKamar,
        hargaSewaWeekdayPerKamar: datas.hargaSewaWeekdayPerKamar,
        hargaSewaWeekendPerKamar: datas.hargaSewaWeekendPerKamar,
        expiredDetailPenginapan: datas.expiredDetailPenginapan,
        tglUpdateDetailPenginapan: datas.tglUpdateDetailPenginapan,
        created_at: new Date(),
        updated_at: new Date(),
      };
      Inertia.post("/hotel/detail", TambahData);
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
                  <a className="mr-5 mt-2 text-black">Nama Jenis Kamar</a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.namaJenisKamar || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        namaJenisKamar: value.target.value,
                      })
                    }
                  />
                  {inputErrors.namaJenisKamar && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.namaJenisKamar}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">Kapasitas Kamar</a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.kapasitasKamar || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        kapasitasKamar: value.target.value,
                      })
                    }
                  />
                  {inputErrors.kapasitasKamar && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.kapasitasKamar}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">Ketersediaan Kamar</a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.qtyKetersediaanKamar || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        qtyKetersediaanKamar: value.target.value,
                      })
                    }
                  />
                  {inputErrors.qtyKetersediaanKamar && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.qtyKetersediaanKamar}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">
                    Harga Sewa Weekday Per Kamar
                  </a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.hargaSewaWeekdayPerKamar || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        hargaSewaWeekdayPerKamar: value.target.value,
                      })
                    }
                  />
                  {inputErrors.hargaSewaWeekdayPerKamar && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.hargaSewaWeekdayPerKamar}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">
                    Harga Sewa Weekend Per Kamar
                  </a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.hargaSewaWeekendPerKamar || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        hargaSewaWeekendPerKamar: value.target.value,
                      })
                    }
                  />
                  {inputErrors.hargaSewaWeekendPerKamar && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.hargaSewaWeekendPerKamar}
                    </p>
                  )}
                </div>
                {error && <p className="text-red-500 mt-1">{error}</p>}
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">Tanggal Berlaku Detail</a>
                  <input
                    type="date"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.expiredDetailPenginapan || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        expiredDetailPenginapan: value.target.value,
                      })
                    }
                  />
                  {inputErrors.expiredDetailPenginapan && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.expiredDetailPenginapan}
                    </p>
                  )}
                </div>
                {error && <p className="text-red-500 mt-1">{error}</p>}
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">Tanggal Update Detail</a>
                  <input
                    type="date"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.tglUpdateDetailPenginapan || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        tglUpdateDetailPenginapan: value.target.value,
                      })
                    }
                  />
                  {inputErrors.tglUpdateDetailPenginapan && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.tglUpdateDetailPenginapan}
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

export default TambahDetailHotel;
