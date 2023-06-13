import { BsPencilSquare, BsTrash3, BsList, BsThreeDots } from "react-icons/bs";
import { Link } from "@inertiajs/inertia-react";

const DataQuo = ({ quotation }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm text-black">
              <thead className="border-b bg-abu font-medium dark:border-neutral-500 dark:text-neutral-800">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Nama
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Area Wisata
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Total
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Aksi
                  </th>
                </tr>
              </thead>
              {quotation.map((cr, index) => {
                console.log("cr", cr);
                return (
                  <tbody key={index}>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {cr.id}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {cr.namaKlien}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {cr.quotation.area_wisata.namaArea}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {cr.sellingPrice}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {cr.status}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 justify-item-center">
                        <button className="btn btn-ghost btn-sm mr-2">
                          <Link
                            href={route('quotation.detail')} method="get" data={{id: cr.id}}
                          >
                            <BsPencilSquare />
                          </Link>
                        </button>
                        <button
                          className="btn btn-ghost btn-sm"
                          // onClick={() => {
                          //     setShowDelete(true)
                          //     setCrewL(cr)
                          // }}
                        >
                          <BsTrash3 />
                        </button>
                      </td>
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
