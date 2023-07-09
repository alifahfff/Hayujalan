import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";

const ModalKlien = ({ visible, onClose, data, dataJK }) => {
  if (!visible) return null;
  const [datas, setDatas] = useState(data);
  const [inputErrors, setInputErrors] = useState({});
  console.log("modal data", datas);
  // console.log('datas', datas)

  const route = () => {
    Inertia.get("/klien");
  };

  const handleSubmit = () => {
    console.log("id", datas.id);

    const newInputErrors = {};
    if (!datas.idDataKlien) {
      newInputErrors.idDataKlien = "ID data klien harus dipilih";
    }
    if (!datas.namaKlien) {
      newInputErrors.namaKlien = "Nama Klien harus diisi";
    }
    if (!datas.alamatKlien) {
      newInputErrors.alamatKlien = "Alamat Klien harus diisi";
    }
    if (!datas.tlpKlien) {
      newInputErrors.tlpKlien = "TLP Klien harus diisi";
    }
    if (!datas.namaPicKlien) {
      newInputErrors.namaPicKlien = "Nama PIC Klien harus diisi";
    }
    if (!datas.idJenisKlien) {
      newInputErrors.idJenisKlien = "ID jenis klien harus dipilih";
    }
    if (!datas.tlpPicKlien) {
      newInputErrors.tlpPicKlien = "TLP PIC Klien harus diisi";
    }

    setInputErrors(newInputErrors); // Set pesan error baru

    if (Object.keys(newInputErrors).length > 0) {
      return; // Hentikan proses submit jika ada pesan error
    }

    if (datas.idDataKlien) {
      alert(1);
      // update data
      const dataE = {
        id: datas.idDataKlien,
        namaKlien: datas.namaKlien,
        alamatKlien: datas.alamatKlien,
        tlpKlien: datas.tlpKlien,
        namaPicKlien: datas.namaPicKlien,
        idJenisKlien: datas.idJenisKlien,
        tlpPicKlien: datas.tlpPicKlien,
        tglUpdateKlien: new Date(),
        updated_at: new Date(),
      };
      // console.log('dataE', dataE)
      Inertia.post("/klien/update", dataE);
    } else {
      alert(2);
      // tambah data
      const dataT = {
        namaKlien: datas.namaKlien,
        alamatKlien: datas.alamatKlien,
        tlpKlien: datas.tlpKlien,
        namaPicKlien: datas.namaPicKlien,
        tlpPicKlien: datas.tlpPicKlien,
        idJenisKlien: datas.idJenisKlien,
        tglUpdateKlien: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      };
      Inertia.post("/klien/post", dataT);
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
              Data Klien
            </h1>
            <p className="text-center text-gray-700 mb-5">Tambah Data</p>

            {/* Data Input */}
            <div className="flex flex-col">
              <div className="flex flex-row justify-between">
                <a className="mr-5 mt-2 text-black">Nama Klien</a>
                <input
                  type="text"
                  className="w-3/5 border border-gray-700 p-2 rounded mb-5"
                  value={datas.namaKlien || ""}
                  onChange={(value) =>
                    setDatas({
                      ...datas,
                      namaKlien: value.target.value,
                    })
                  }
                />
                {inputErrors.namaKlien && (
                  <p className="text-red-500 mt-1">{inputErrors.namaKlien}</p>
                )}
              </div>
              <div className="flex flex-row justify-between">
                <a className="mr-5 mt-2 text-black">Jenis Klien</a>
                <select
                  placeholder="Jenis Klien"
                  defaultValue="default"
                  className="w-3/5 border border-gray-700 p-2 rounded mb-5"
                  onChange={(e) =>
                    setDatas({
                      ...datas,
                      idJenisKlien: e.target.value,
                    })
                  }
                >
                  <option value="default">
                    -{datas.jenis_klien.namaJenisKlien}-
                  </option>
                  {dataJK.map((jk, index) => {
                    return (
                      <option value={jk.id} key={jk.id}>
                        {jk.namaJenisKlien}
                      </option>
                    );
                  })}
                </select>
                {inputErrors.idJenisKlien && (
                  <p className="text-red-500 mt-1">
                    {inputErrors.idJenisKlien}
                  </p>
                )}
              </div>
              <div className="flex flex-row justify-between">
                <a className="mr-5 mt-2 text-black">Alamat</a>
                <input
                  type="text"
                  className="w-3/5 border border-gray-700 p-2 rounded mb-5"
                  onChange={(value) =>
                    setDatas({
                      ...datas,
                      alamatKlien: value.target.value,
                    })
                  }
                  value={datas.alamatKlien}
                />
                {inputErrors.alamatKlien && (
                  <p className="text-red-500 mt-1">{inputErrors.alamatKlien}</p>
                )}
              </div>
              <div className="flex flex-row justify-between">
                <a className="mr-5 mt-2 text-black">Nomor Telepon</a>
                <input
                  type="text"
                  className="w-3/5 border border-gray-700 p-2 rounded mb-5"
                  onChange={(value) =>
                    setDatas({
                      ...datas,
                      tlpKlien: value.target.value,
                    })
                  }
                  value={datas.tlpKlien}
                />
                {inputErrors.tlpKlien && (
                  <p className="text-red-500 mt-1">{inputErrors.tlpKlien}</p>
                )}
              </div>
              <div className="flex flex-row justify-between">
                <a className="mr-5 mt-2 text-black">PIC Klien</a>
                <input
                  type="text"
                  className="w-3/5 border border-gray-700 p-2 rounded mb-5"
                  onChange={(value) =>
                    setDatas({
                      ...datas,
                      namaPicKlien: value.target.value,
                    })
                  }
                  value={datas.namaPicKlien}
                />
                {inputErrors.namaPicKlien && (
                  <p className="text-red-500 mt-1">
                    {inputErrors.namaPicKlien}
                  </p>
                )}
              </div>
              <div className="flex flex-row justify-between">
                <a className="mr-5 mt-2 text-black">Telepon PIC Klien</a>
                <input
                  type="text"
                  className="w-3/5 border border-gray-700 p-2 rounded mb-5"
                  onChange={(value) =>
                    setDatas({
                      ...datas,
                      tlpPicKlien: value.target.value,
                    })
                  }
                  value={datas.tlpPicKlien}
                />
                {inputErrors.tlpPicKlien && (
                  <p className="text-red-500 mt-1">{inputErrors.tlpPicKlien}</p>
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
                  route();
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

export default ModalKlien;
