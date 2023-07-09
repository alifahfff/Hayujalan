import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";

const ModalRM = ({ visible, onClose, data, dataArea }) => {
  if (!visible) return null;
  const [datas, setDatas] = useState(data);
  console.log("modal data", data);
  const [error, setError] = useState("");
  const [inputErrors, setInputErrors] = useState({});

  const handleSubmit = () => {
    console.log("id", data.id);

    const newInputErrors = {};

    if (!datas.idAreaWisata) {
      newInputErrors.idAreaWisata = "Area Wisata harus dipilih";
    }
    if (!datas.namaRM) {
      newInputErrors.namaRM = "Nama Rumah Makan harus diisi";
    }
    if (!datas.kapasitasRM) {
      newInputErrors.kapasitasRM = "Kapasitas Rumah Makan harus diisi";
    }
    if (!datas.kapasitasParkirBusRM) {
      newInputErrors.kapasitasParkirBusRM =
        "Kapasitas Parkir Bus RM harus diisi";
    }
    if (!datas.AlamatRM) {
      newInputErrors.AlamatRM = "Alamat Rumah Makan harus diisi";
    }
    if (!datas.tlpRM) {
      newInputErrors.tlpRM = "Tlp Rumah Makan harus diisi";
    }
    if (!datas.picRM) {
      newInputErrors.picRM = "PIC Rumah Makan harus diisi";
    }
    if (!datas.hpPicRM) {
      newInputErrors.hpPicRM = "HP PIC Rumah Makan harus diisi";
    }
    if (!datas.linkGmapsRM) {
      newInputErrors.linkGmapsRM = "Link Gmaps Rumah Makan harus diisi";
    }
    if (!datas.tglBerlakuRm) {
      newInputErrors.tglBerlakuRm = "Tanggal Berlaku RM harus diisi";
    }

    setInputErrors(newInputErrors); // Set pesan error baru

    if (Object.keys(newInputErrors).length > 0) {
      return; // Hentikan proses submit jika ada pesan error
    }

    setError(""); // Reset error jika semua validasi berhasil

    if (data.idRM) {
      // update data
      const dataUpdate = {
        id: data.idRM,
        idAreaWisata: datas.idAreaWisata,
        namaRM: datas.namaRM,
        kapasitasRM: datas.kapasitasRM,
        kapasitasParkirBusRM: datas.kapasitasParkirBusRM,
        AlamatRM: datas.AlamatRM,
        tlpRM: datas.tlpRM,
        picRM: datas.picRM,
        hpPicRM: datas.hpPicRM,
        linkGmapsRM: datas.linkGmapsRM,
        tglBerlakuRm: datas.tglBerlakuRm,
        updated_at: new Date(),
      };
      Inertia.post("/rumahmakan/update", dataUpdate);
    } else {
      // tambah data
      const TambahData = {
        idAreaWisata: datas.idAreaWisata,
        namaRM: datas.namaRM,
        kapasitasRM: datas.kapasitasRM,
        kapasitasParkirBusRM: datas.kapasitasParkirBusRM,
        AlamatRM: datas.AlamatRM,
        tlpRM: datas.tlpRM,
        picRM: datas.picRM,
        hpPicRM: datas.hpPicRM,
        linkGmapsRM: datas.linkGmapsRM,
        tglBerlakuRm: datas.tglBerlakuRm,
        created_at: new Date(),
        updated_at: new Date(),
      };
      Inertia.post("/rumahmakan", TambahData);
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
              Tambah Data
            </h1>
            <p className="text-center text-gray-700 mb-5">Data Rumah Makan</p>
            {/* Data Input */}
            <div className="flex flex-col">
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">Area Wisata</a>
                  <select
                    placeholder="Jenis Klien"
                    defaultvalue="default"
                    className="w-3/5 border border-gray-700 p-2 rounded mb-5"
                    onChange={(e) =>
                      setDatas({
                        ...datas,
                        idAreaWisata: e.target.value,
                      })
                    }
                  >
                    <option value="default">-{datas.namaArea}-</option>
                    {dataArea.map((aw, index) => {
                      return (
                        <option value={aw.idAreaWisata} key={aw.idAreaWisata}>
                          {aw.namaArea}
                        </option>
                      );
                    })}
                  </select>
                  {inputErrors.idAreaWisata && (
                    <p className="text-red-500 mt-1">{inputErrors.idAreaWisata}</p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">Nama Rumah Makan</a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.namaRM || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        namaRM: value.target.value,
                      })
                    }
                  />
                  {inputErrors.namaRM && (
                    <p className="text-red-500 mt-1">{inputErrors.namaRM}</p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">Kapasitas Rumah Makan</a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.kapasitasRM || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        kapasitasRM: value.target.value,
                      })
                    }
                  />
                  {inputErrors.kapasitasRM && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.kapasitasRM}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">Kapasitas Parkir Bus</a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.kapasitasParkirBusRM || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        kapasitasParkirBusRM: value.target.value,
                      })
                    }
                  />
                  {inputErrors.kapasitasParkirBusRM && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.kapasitasParkirBusRM}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">Alamat </a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.AlamatRM || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        AlamatRM: value.target.value,
                      })
                    }
                  />
                  {inputErrors.AlamatRM && (
                    <p className="text-red-500 mt-1">{inputErrors.AlamatRM}</p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">No Telpon Rumah Makan</a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.tlpRM || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        tlpRM: value.target.value,
                      })
                    }
                  />
                  {inputErrors.tlpRM && (
                    <p className="text-red-500 mt-1">{inputErrors.tlpRM}</p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">PIC Rumah Makan</a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.picRM || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        picRM: value.target.value,
                      })
                    }
                  />
                  {inputErrors.picRM && (
                    <p className="text-red-500 mt-1">{inputErrors.picRM}</p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">No HP PIC</a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.hpPicRM || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        hpPicRM: value.target.value,
                      })
                    }
                  />
                  {inputErrors.hpPicRM && (
                    <p className="text-red-500 mt-1">{inputErrors.hpPicRM}</p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">Link Gmaps</a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.linkGmapsRM || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        linkGmapsRM: value.target.value,
                      })
                    }
                  />
                  {inputErrors.linkGmapsRM && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.linkGmapsRM}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">Tanggal Berlaku</a>
                  <input
                    type="date"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.tglBerlakuRm || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        tglBerlakuRm: value.target.value,
                      })
                    }
                  />
                  {inputErrors.tglBerlakuRm && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.tglBerlakuRm}
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

export default ModalRM;
