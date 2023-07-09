import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";

const ModalHotel = ({ visible, onClose, data, dataArea }) => {
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
    if (!datas.namaPenginapan) {
      newInputErrors.namaPenginapan = "Nama Penginapan harus diisi";
    }
    if (!datas.bintangPenginapan) {
      newInputErrors.bintangPenginapan = "Bintang Penginapan harus diisi";
    }
    if (!datas.alamatPenginapan) {
      newInputErrors.alamatPenginapan = "Alamat Penginapan harus diisi";
    }
    if (!datas.tlpPenginapan) {
      newInputErrors.tlpPenginapan = "Tlp Penginapan harus diisi";
    }
    if (!datas.picPenginapan) {
      newInputErrors.picPenginapan = "Pic Penginapan harus diisi";
    }
    if (!datas.hpPicPenginapan) {
      newInputErrors.hpPicPenginapan = "Hp PIC Penginapan harus diisi";
    }
    if (!datas.linkGmapsPenginapan) {
      newInputErrors.linkGmapsPenginapan = "Link Gmaps Penginapan harus diisi";
    }
    if (!datas.kapasitasParkirBusPenginapan) {
      newInputErrors.kapasitasParkirBusPenginapan =
        "Kapasitas Parkir Bus Penginapan harus diisi";
    }
    if (!datas.tglBerlakuPenginapan) {
      newInputErrors.tglBerlakuPenginapan =
        "Tgl Berlaku Penginapan harus diisi";
    }

    setInputErrors(newInputErrors); // Set pesan error baru

    if (Object.keys(newInputErrors).length > 0) {
      return; // Hentikan proses submit jika ada pesan error
    }

    setError(""); // Reset error jika semua validasi berhasil

    if (data.idPenginapan) {
      // update data
      const dataUpdate = {
        id: data.idPenginapan,
        idAreaWisata: datas.idAreaWisata,
        namaPenginapan: datas.namaPenginapan,
        bintangPenginapan: datas.bintangPenginapan,
        alamatPenginapan: datas.alamatPenginapan,
        tlpPenginapan: datas.tlpPenginapan,
        picPenginapan: datas.picPenginapan,
        hpPicPenginapan: datas.hpPicPenginapan,
        linkGmapsPenginapan: datas.linkGmapsPenginapan,
        kapasitasParkirBusPenginapan: datas.kapasitasParkirBusPenginapan,
        tglBerlakuPenginapan: datas.tglBerlakuPenginapan,
        updated_at: new Date(),
      };
      Inertia.post("/hotel/update", dataUpdate);
    } else {
      // tambah data
      const TambahData = {
        idAreaWisata: datas.idAreaWisata,
        namaPenginapan: datas.namaPenginapan,
        bintangPenginapan: datas.bintangPenginapan,
        alamatPenginapan: datas.alamatPenginapan,
        tlpPenginapan: datas.tlpPenginapan,
        picPenginapan: datas.picPenginapan,
        hpPicPenginapan: datas.hpPicPenginapan,
        linkGmapsPenginapan: datas.linkGmapsPenginapan,
        kapasitasParkirBusPenginapan: datas.kapasitasParkirBusPenginapan,
        tglBerlakuPenginapan: datas.tglBerlakuPenginapan,
        created_at: new Date(),
        updated_at: new Date(),
      };
      Inertia.post("/hotel", TambahData);
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
            <p className="text-center text-gray-700 mb-5">Data Penginapan</p>
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
                  <a className="mr-5 mt-2 text-black">Nama Penginapan</a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.namaPenginapan || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        namaPenginapan: value.target.value,
                      })
                    }
                  />
                  {inputErrors.namaPenginapan && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.namaPenginapan}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">Bintang Penginapan</a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.bintangPenginapan || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        bintangPenginapan: value.target.value,
                      })
                    }
                  />
                  {inputErrors.bintangPenginapan && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.bintangPenginapan}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">Alamat </a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.alamatPenginapan || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        alamatPenginapan: value.target.value,
                      })
                    }
                  />
                  {inputErrors.alamatPenginapan && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.alamatPenginapan}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">No Telpon Penginapan</a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.tlpPenginapan || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        tlpPenginapan: value.target.value,
                      })
                    }
                  />
                  {inputErrors.tlpPenginapan && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.tlpPenginapan}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">PIC Penginapan</a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.picPenginapan || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        picPenginapan: value.target.value,
                      })
                    }
                  />
                  {inputErrors.picPenginapan && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.picPenginapan}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">No HP PIC</a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.hpPicPenginapan || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        hpPicPenginapan: value.target.value,
                      })
                    }
                  />
                  {inputErrors.hpPicPenginapan && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.hpPicPenginapan}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">Kapasitas Parkir Bus</a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.kapasitasParkirBusPenginapan || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        kapasitasParkirBusPenginapan: value.target.value,
                      })
                    }
                  />
                  {inputErrors.kapasitasParkirBusPenginapan && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.kapasitasParkirBusPenginapan}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">Link Gmaps</a>
                  <input
                    type="text"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.linkGmapsPenginapan || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        linkGmapsPenginapan: value.target.value,
                      })
                    }
                  />
                  {inputErrors.linkGmapsPenginapan && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.linkGmapsPenginapan}
                    </p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <a className="mr-5 mt-2 text-black">Tanggal Berlaku</a>
                  <input
                    type="date"
                    className="border border-gray-700 p-2 rounded mb-5"
                    value={datas.tglBerlakuPenginapan || ""}
                    onChange={(value) =>
                      setDatas({
                        ...datas,
                        tglBerlakuPenginapan: value.target.value,
                      })
                    }
                  />
                  {inputErrors.tglBerlakuPenginapan && (
                    <p className="text-red-500 mt-1">
                      {inputErrors.tglBerlakuPenginapan}
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

export default ModalHotel;
