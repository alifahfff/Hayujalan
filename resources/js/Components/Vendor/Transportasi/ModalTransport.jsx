import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";

const ModalTransport = ({ visible, onClose, data, dataArea }) => {
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
    if (!datas.namaTransportasi) {
      newInputErrors.namaTransportasi = "Nama Transportasi harus diisi";
    }
    if (!datas.alamatTransportasi) {
      newInputErrors.alamatTransportasi = "Alamat Transportasi harus diisi";
    }
    if (!datas.kapasitasParkirBusWisata) {
      newInputErrors.kapasitasParkirBusWisata =
        "Kapasitas Parkir Bus harus diisi";
    }
    if (!datas.tlpTransportasi) {
      newInputErrors.tlpTransportasi = "Telepon Transportasi harus diisi";
    }
    if (!datas.picTransportasi) {
      newInputErrors.picTransportasi = "PIC Transportasi harus diisi";
    }
    if (!datas.hpPicTransportasi) {
      newInputErrors.hpPicTransportasi = "HP PIC Transportasi harus diisi";
    }
    if (!datas.tglBerlakuTransportasi) {
      newInputErrors.tglBerlakuTransportasi =
        "Tanggal Berlaku Transportasi harus diisi";
    }

    setInputErrors(newInputErrors); // Set pesan error baru

    if (Object.keys(newInputErrors).length > 0) {
      return; // Hentikan proses submit jika ada pesan error
    }

    setError(""); // Reset error jika semua validasi berhasil

    if (data.idTransportasi) {
      // update data
      const dataUpdate = {
        id: data.idTransportasi,
        idAreaWisata: datas.idAreaWisata,
        namaTransportasi: datas.namaTransportasi,
        alamatTransportasi: datas.alamatTransportasi,
        tlpTransportasi: datas.tlpTransportasi,
        picTransportasi: datas.picTransportasi,
        hpPicTransportasi: datas.hpPicTransportasi,
        tglBerlakuTransportasi: datas.tglBerlakuTransportasi,
        updated_at: new Date(),
      };
      Inertia.post("/transportasi/update", dataUpdate);
    } else {
      // tambah data
      const TambahData = {
        idAreaWisata: datas.idAreaWisata,
        namaTransportasi: datas.namaTransportasi,
        alamatTransportasi: datas.alamatTransportasi,
        tlpTransportasi: datas.tlpTransportasi,
        picTransportasi: datas.picTransportasi,
        hpPicTransportasi: datas.hpPicTransportasi,
        tglBerlakuTransportasi: datas.tglBerlakuTransportasi,
        created_at: new Date(),
        updated_at: new Date(),
      };
      Inertia.post("/transportasi", TambahData);
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
              Data Transportasi
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
                  <a className="mr-5 mt-2 text-black">Nama Transportasi</a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.namaTransportasi || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        namaTransportasi: value.target.value,
                      })
                    }
                  />
                  {inputErrors.namaTransportasi && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.namaTransportasi}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">Alamat Transportasi</a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.alamatTransportasi || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        alamatTransportasi: value.target.value,
                      })
                    }
                  />
                  {inputErrors.alamatTransportasi && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.alamatTransportasi}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">No Telpon</a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.tlpTransportasi || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        tlpTransportasi: value.target.value,
                      })
                    }
                  />
                  {inputErrors.tlpTransportasi && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.tlpTransportasi}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">PIC Transportasi</a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.picTransportasi || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        picTransportasi: value.target.value,
                      })
                    }
                  />
                  {inputErrors.picTransportasi && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.picTransportasi}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">No HP PIC</a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.hpPicTransportasi || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        hpPicTransportasi: value.target.value,
                      })
                    }
                  />
                  {inputErrors.hpPicTransportasi && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.hpPicTransportasi}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">Tanggal Berlaku</a>
                  <input
                    type="date"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.tglBerlakuTransportasi || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        tglBerlakuTransportasi: value.target.value,
                      })
                    }
                  />
                  {inputErrors.tglBerlakuTransportasi && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.tglBerlakuTransportasi}
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

export default ModalTransport;
