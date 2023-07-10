import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";

const TambahDetailTransport = ({ visible, onClose, data, dataJenis }) => {
  console.log("data", data);
  if (!visible) return null;
  const [datas, setDatas] = useState(data);
  console.log("jenis", dataJenis);
  const [error, setError] = useState("");
  const [inputErrors, setInputErrors] = useState({});

  const handleSubmit = () => {
    console.log("id", data.id);

    const newInputErrors = {};
    
    if (!datas.idTransportasi) {
      newInputErrors.idTransportasi = "Transportasi harus dipilih";
    }
    if (!datas.idJenisTransportasi) {
      newInputErrors.idJenisTransportasi = "Jenis Transportasi harus diisi";
    }
    if (!datas.nama) {
      newInputErrors.nama = "Nama harus diisi";
    }
    if (!datas.tahun) {
      newInputErrors.tahun = "Tahun harus diisi";
    }
    if (!datas.kapasitas) {
      newInputErrors.kapasitas = "Kapasitas harus diisi";
    }
    if (!datas.qtyKetersediaan) {
      newInputErrors.qtyKetersediaan = "Quantity harus diisi";
    }
    if (!datas.hargaSewaWeekendDalamKota) {
      newInputErrors.hargaSewaWeekendDalamKota =
        "Harga Sewa Weekend Dalam Kota harus diisi";
    }
    if (!datas.hargaSewaWeekdayDalamKota) {
      newInputErrors.hargaSewaWeekdayDalamKota =
        "Harga Sewa Weekday Dalam Kota harus diisi";
    }
    if (!datas.hargaSewaWeekendLuarKota) {
      newInputErrors.hargaSewaWeekendLuarKota =
        "Harga Sewa Weekend Luar Kota harus diisi";
    }
    if (!datas.hargaSewaWeekdayLuarKota) {
      newInputErrors.hargaSewaWeekdayLuarKota =
        "Harga Sewa Weekday Luar Kota harus diisi";
    }
    if (!datas.urlInterior) {
      newInputErrors.urlInterior = "Url Interior harus diisi";
    }
    if (!datas.urlEksterior) {
      newInputErrors.urlEksterior = "Url Exterior harus diisi";
    }
    if (!datas.tglUpdateDetailTransportasi) {
      newInputErrors.tglUpdateDetailTransportasi = "Tanggal Update harus diisi";
    }
    if (!datas.expiredDetailTransportasi) {
      newInputErrors.expiredDetailTransportasi = "Tanggal Berlaku harus diisi";
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
        idTransportasi: datas.idTransportasi,
        idJenisTransportasi: datas.idJenisTransportasi,
        nama: datas.nama,
        tahun: datas.tahun,
        kapasitas: datas.kapasitas,
        qtyKetersediaan: datas.qtyKetersediaan,
        hargaSewaWeekendDalamKota: datas.hargaSewaWeekendDalamKota,
        hargaSewaWeekdayDalamKota: datas.hargaSewaWeekdayDalamKota,
        hargaSewaWeekendLuarKota: datas.hargaSewaWeekendLuarKota,
        hargaSewaWeekdayLuarKota: datas.hargaSewaWeekdayLuarKota,
        urlInterior: datas.urlInterior,
        urlEksterior: datas.urlEksterior,
        tglUpdateDetailTransportasi: datas.tglUpdateDetailTransportasi,
        expiredDetailTransportasi: datas.expiredDetailTransportasi,
        created_at: new Date(),
        updated_at: new Date(),
      };
      Inertia.post("/transportasi/update/detail", dataUpdate);
    } else {
      // tambah data
      const TambahData = {
        idTransportasi: datas.idTransportasi,
        idJenisTransportasi: datas.idJenisTransportasi,
        nama: datas.nama,
        tahun: datas.tahun,
        kapasitas: datas.kapasitas,
        qtyKetersediaan: datas.qtyKetersediaan,
        hargaSewaWeekendDalamKota: datas.hargaSewaWeekendDalamKota,
        hargaSewaWeekdayDalamKota: datas.hargaSewaWeekdayDalamKota,
        hargaSewaWeekendLuarKota: datas.hargaSewaWeekendLuarKota,
        hargaSewaWeekdayLuarKota: datas.hargaSewaWeekdayLuarKota,
        urlInterior: datas.urlInterior,
        urlEksterior: datas.urlEksterior,
        tglUpdateDetailTransportasi: datas.tglUpdateDetailTransportasi,
        expiredDetailTransportasi: datas.expiredDetailTransportasi,
        created_at: new Date(),
        updated_at: new Date(),
      };
      Inertia.post("/transportasi/detail", TambahData);
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
              <div className="grid grid-cols-3 gap-3">
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">Jenis Transportasi</a>
                  <select
                    placeholder="Jenis Klien"
                    defaultvalue="default"
                    className=" border border-gray-700 p-2 rounded mb-5"
                    style={{ width: "12.7rem" }}
                    onChange={(e) =>
                      setDatas({
                        ...datas,
                        idJenisTransportasi: e.target.value,
                      })
                    }
                  >
                    <option value="default">-{datas.namaJenis}-</option>
                    {dataJenis.map((aw, index) => {
                      return (
                        <option
                          value={aw.idJenisTransportasi}
                          key={aw.idJenisTransportasi}
                        >
                          {aw.namaJenis}
                        </option>
                      );
                    })}
                  </select>
                  {inputErrors.idJenisTransportasi && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.idJenisTransportasi}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">Nama</a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.nama || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        nama: value.target.value,
                      })
                    }
                  />
                   {inputErrors.nama && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.nama}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">Tahun</a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.tahun || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        tahun: value.target.value,
                      })
                    }
                  />
                   {inputErrors.tahun && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.tahun}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">Kapasitas</a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.kapasitas || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        kapasitas: value.target.value,
                      })
                    }
                  />
                   {inputErrors.kapasitas && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.kapasitas}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">Ketersediaan Unit</a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.qtyKetersediaan || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        qtyKetersediaan: value.target.value,
                      })
                    }
                  />
                   {inputErrors.qtyKetersediaan && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.qtyKetersediaan}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">
                    Harga Sewa Weekend Dalam Kota
                  </a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.hargaSewaWeekendDalamKota || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        hargaSewaWeekendDalamKota: value.target.value,
                      })
                    }
                  />
                   {inputErrors.hargaSewaWeekendDalamKota && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.hargaSewaWeekendDalamKota}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">
                    Harga Sewa Weekday Dalam Kota
                  </a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.hargaSewaWeekdayDalamKota || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        hargaSewaWeekdayDalamKota: value.target.value,
                      })
                    }
                  />
                   {inputErrors.hargaSewaWeekdayDalamKota && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.hargaSewaWeekdayDalamKota}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">
                    Harga Sewa Weekend Luar Kota
                  </a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.hargaSewaWeekendLuarKota || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        hargaSewaWeekendLuarKota: value.target.value,
                      })
                    }
                  />
                   {inputErrors.hargaSewaWeekendLuarKota && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.hargaSewaWeekendLuarKota}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">
                    Harga Sewa Weekday Luar Kota
                  </a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.hargaSewaWeekdayLuarKota || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        hargaSewaWeekdayLuarKota: value.target.value,
                      })
                    }
                  />
                   {inputErrors.hargaSewaWeekdayLuarKota && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.hargaSewaWeekdayLuarKota}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">Interior</a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.urlInterior || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        urlInterior: value.target.value,
                      })
                    }
                  />
                   {inputErrors.urlInterior && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.urlInterior}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">Eksterior</a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.urlEksterior || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        urlEksterior: value.target.value,
                      })
                    }
                  />
                   {inputErrors.urlEksterior && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.urlEksterior}
                    </p>
                  )}
                </div>
                {error && <p className="text-red-500 mt-1">{error}</p>}
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">Tanggal Berlaku Detail</a>
                  <input
                    type="date"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.expiredDetailTransportasi || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        expiredDetailTransportasi: value.target.value,
                      })
                    }
                  />
                  {inputErrors.expiredDetailTransportasi && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.expiredDetailTransportasi}
                    </p>
                  )}
                </div>
                {error && <p className="text-red-500 mt-1">{error}</p>}
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">Tanggal Update Detail</a>
                  <input
                    type="date"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.tglUpdateDetailTransportasi || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        tglUpdateDetailTransportasi: value.target.value,
                      })
                    }
                  />
                  {inputErrors.tglUpdateDetailTransportasi && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.tglUpdateDetailTransportasi}
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

export default TambahDetailTransport;
