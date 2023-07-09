import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";

const ModalDestinasi = ({ visible, onClose, data, dataArea }) => {
  if (!visible) return null;
  const [datas, setDatas] = useState(data);
  console.log("modal data", dataArea);
  const [error, setError] = useState("");
  const [inputErrors, setInputErrors] = useState({});

  const handleSubmit = () => {
    console.log("id", data.id);

    const newInputErrors = {};

    if (!datas.idAreaWisata) {
      newInputErrors.idAreaWisata = "Area Wisata harus dipilih";
    }
    if (!datas.namaDestinasiWisata) {
      newInputErrors.namaDestinasiWisata = "Nama Destinasi Wisata harus diisi";
    }
    if (!datas.kapasitasDestinasiWisata) {
      newInputErrors.kapasitasDestinasiWisata =
        "Kapasitas Destinasi Wisata harus diisi";
    }
    if (!datas.kapasitasParkirBusWisata) {
      newInputErrors.kapasitasParkirBusWisata =
        "Kapasitas Parkir Bus Wisata harus diisi";
    }
    if (!datas.alamatDestinasiWisata) {
      newInputErrors.alamatDestinasiWisata =
        "Alamat Destinasi Wisata harus diisi";
    }
    if (!datas.tlpDestinasiWisata) {
      newInputErrors.tlpDestinasiWisata =
        "Telepon Destinasi Wisata harus diisi";
    }
    if (!datas.picDestinasiWisata) {
      newInputErrors.picDestinasiWisata = "PIC Destinasi Wisata harus diisi";
    }
    if (!datas.hpDestinasiWisata) {
      newInputErrors.hpDestinasiWisata = "HP Destinasi Wisata harus diisi";
    }
    if (!datas.linkGmapDestinasiWisata) {
      newInputErrors.linkGmapDestinasiWisata =
        "Link Gmaps Destinasi Wisata harus diisi";
    }
    if (!datas.tglBerlakuDestinasi) {
      newInputErrors.tglBerlakuDestinasi =
        "Tanggal Berlaku Destinasi Wisata harus diisi";
    }

    setInputErrors(newInputErrors); // Set pesan error baru

    if (Object.keys(newInputErrors).length > 0) {
      return; // Hentikan proses submit jika ada pesan error
    }

    setError(""); // Reset error jika semua validasi berhasil

    if (data.idDestinasiWisata) {
      // update data
      const dataUpdate = {
        id: data.idDestinasiWisata,
        idAreaWisata: datas.idAreaWisata,
        namaDestinasiWisata: datas.namaDestinasiWisata,
        kapasitasDestinasiWisata: datas.kapasitasDestinasiWisata,
        kapasitasParkirBusWisata: datas.kapasitasParkirBusWisata,
        alamatDestinasiWisata: datas.alamatDestinasiWisata,
        tlpDestinasiWisata: datas.tlpDestinasiWisata,
        picDestinasiWisata: datas.picDestinasiWisata,
        hpDestinasiWisata: datas.hpDestinasiWisata,
        linkGmapDestinasiWisata: datas.linkGmapDestinasiWisata,
        tglBerlakuDestinasi: datas.tglBerlakuDestinasi,
        updated_at: new Date(),
      };
      Inertia.post("/destinasiwisata/update", dataUpdate);
    } else {
      // tambah data
      const TambahData = {
        idAreaWisata: datas.idAreaWisata,
        namaDestinasiWisata: datas.namaDestinasiWisata,
        kapasitasDestinasiWisata: datas.kapasitasDestinasiWisata,
        kapasitasParkirBusWisata: datas.kapasitasParkirBusWisata,
        alamatDestinasiWisata: datas.alamatDestinasiWisata,
        tlpDestinasiWisata: datas.tlpDestinasiWisata,
        picDestinasiWisata: datas.picDestinasiWisata,
        hpDestinasiWisata: datas.hpDestinasiWisata,
        linkGmapDestinasiWisata: datas.linkGmapDestinasiWisata,
        tglBerlakuDestinasi: datas.tglBerlakuDestinasi,
        created_at: new Date(),
        updated_at: new Date(),
      };
      Inertia.post("/destinasiwisata", TambahData);
      console.log("TambahData", TambahData);
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
              Data Destinasi Wisata
            </h1>
            <p className="text-center text-gray-700 mb-5">
              {data.id ? "Edit Data" : "Tambah Data"}
            </p>
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
                    <p className="text-red-500 mt-1">
                      {inputErrors.idAreaWisata}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">Nama Destinasi Wisata</a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.namaDestinasiWisata || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        namaDestinasiWisata: value.target.value,
                      })
                    }
                  />
                  {inputErrors.namaDestinasiWisata && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.namaDestinasiWisata}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">
                    Kapasitas Destinasi Wisata
                  </a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.kapasitasDestinasiWisata || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        kapasitasDestinasiWisata: value.target.value,
                      })
                    }
                  />
                  {inputErrors.kapasitasDestinasiWisata && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.kapasitasDestinasiWisata}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">Kapasitas Parkir Bus</a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.kapasitasParkirBusWisata || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        kapasitasParkirBusWisata: value.target.value,
                      })
                    }
                  />
                  {inputErrors.kapasitasParkirBusWisata && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.kapasitasParkirBusWisata}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">
                    Alamat Destinasi Wisata
                  </a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.alamatDestinasiWisata || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        alamatDestinasiWisata: value.target.value,
                      })
                    }
                  />
                  {inputErrors.alamatDestinasiWisata && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.alamatDestinasiWisata}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">No Telpon Destinasi</a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.tlpDestinasiWisata || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        tlpDestinasiWisata: value.target.value,
                      })
                    }
                  />
                  {inputErrors.tlpDestinasiWisata && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.tlpDestinasiWisata}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">PIC Destinasi</a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.picDestinasiWisata || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        picDestinasiWisata: value.target.value,
                      })
                    }
                  />
                  {inputErrors.picDestinasiWisata && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.picDestinasiWisata}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">No HP PIC</a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.hpDestinasiWisata || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        hpDestinasiWisata: value.target.value,
                      })
                    }
                  />
                  {inputErrors.hpDestinasiWisata && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.hpDestinasiWisata}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">Link Gmaps</a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.linkGmapDestinasiWisata || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        linkGmapDestinasiWisata: value.target.value,
                      })
                    }
                  />
                  {inputErrors.linkGmapDestinasiWisata && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.linkGmapDestinasiWisata}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">Tanggal Berlaku</a>
                  <input
                    type="date"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.tglBerlakuDestinasi || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        tglBerlakuDestinasi: value.target.value,
                      })
                    }
                  />
                  {inputErrors.tglBerlakuDestinasi && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.tglBerlakuDestinasi}
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

export default ModalDestinasi;
