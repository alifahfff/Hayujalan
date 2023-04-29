const Crew = () => {
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm font-dark">
                    <thead className="border-b bg-abu font-medium dark:border-neutral-500 dark:bg-neutral-600">
                        <tr>
                        <th scope="col" className="px-6 py-4">ID</th>
                        <th scope="col" className="px-6 py-4">Crew Operasional</th>
                        <th scope="col" className="px-6 py-4">Biaya</th>
                        <th scope="col" className="px-6 py-4">Status</th>
                        <th scope="col" className="px-6 py-4">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">CO001</td>
                        <td className="whitespace-nowrap px-6 py-4">Driver 1</td>
                        <td className="whitespace-nowrap px-6 py-4">Rp.150.000</td>
                        <td className="whitespace-nowrap px-6 py-4">/day/bus</td>
                        <td className="whitespace-nowrap px-6 py-4"></td>
                        </tr>
                        <tr className="border-b bg-abu dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">CO001</td>
                        <td className="whitespace-nowrap px-6 py-4">Driver 1</td>
                        <td className="whitespace-nowrap px-6 py-4">Rp.150.000</td>
                        <td className="whitespace-nowrap px-6 py-4">/day/bus</td>
                        <td className="whitespace-nowrap px-6 py-4"></td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">CO001</td>
                        <td className="whitespace-nowrap px-6 py-4">Driver 1</td>
                        <td className="whitespace-nowrap px-6 py-4">Rp.150.000</td>
                        <td className="whitespace-nowrap px-6 py-4">/day/bus</td>
                        <td className="whitespace-nowrap px-6 py-4"></td>
                        </tr>
                        <tr className="border-b bg-abu dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">CO001</td>
                        <td className="whitespace-nowrap px-6 py-4">Driver 1</td>
                        <td className="whitespace-nowrap px-6 py-4">Rp.150.000</td>
                        <td className="whitespace-nowrap px-6 py-4">/day/bus</td>
                        <td className="whitespace-nowrap px-6 py-4"></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Crew