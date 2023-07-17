import { BsPencilSquare, BsTrash3, BsList, BsThreeDots } from "react-icons/bs";
import { Link } from "@inertiajs/inertia-react";

const DataQuo = ({ quotation }) => {
  console.log('quotation', quotation)
  const roles = quotation.auth.user.idRoles
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm text-black">
              <thead className="border-b bg-abu font-medium dark:border-neutral-500 dark:text-neutral-800">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    No
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Nama Project
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Nama
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Area Wisata
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Selling Price
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Status
                  </th>
                  {roles === 2 || roles === 1 || roles === 4 ? (
                  <th scope="col" className="px-6 py-4">
                    Aksi
                  </th>
                  ) : roles === 3 ? (
                    null
                  ) : null}
                </tr>
              </thead>
              {quotation.quotation.data.map((cr, index) => {
                console.log("cr", cr);
                return (
                  <tbody key={index}>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {quotation.quotation.from + index}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {cr.quotation.namaProject}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {cr.quotation.klien.namaKlien}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {cr.quotation.areawisata.namaArea}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {cr.q_transaksi.sellingPrice}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {cr.q_transaksi.statusTransaksi}
                      </td>
                      {roles === 2 || roles === 1 || roles === 3 ? (
                        <td className="whitespace-nowrap px-6 py-4 justify-item-center">
                          <button className="btn btn-ghost btn-sm mr-2">
                            <Link
                              href={route('qhistory.detail', { id: cr.idQuotatioRekomendasi })}
                              method="get"
                              as="button"
                            >
                              <BsPencilSquare />
                            </Link>
                          </button>
                          <Link
                            href={route('delete.quotation')}
                            method="post"
                            as="button"
                            data={{ id: cr.idQuotatioRekomendasi }}
                          >
                            <button className="btn btn-ghost btn-sm">
                              <BsTrash3 />
                            </button>
                          </Link>
                        </td>
                      ) : roles === 4 ? (
                        <td></td>
                      ) : null}
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataQuo;
