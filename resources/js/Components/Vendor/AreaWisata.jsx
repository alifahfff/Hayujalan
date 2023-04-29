const AreaWisata = () => {
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm font-dark">
                    <thead className="border-b bg-abu font-medium dark:border-neutral-500 dark:bg-neutral-600">
                        <tr>
                        <th scope="col" className="px-6 py-4">No</th>
                        <th scope="col" className="px-6 py-4">ID Area Wisata</th>
                        <th scope="col" className="px-6 py-4">Area Wisata</th>
                        <th scope="col" className="px-6 py-4">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                        <td className="whitespace-nowrap px-6 py-4">AW001</td>
                        <td className="whitespace-nowrap px-6 py-4">Bandung</td>
                        <td className="whitespace-nowrap px-6 py-4">Y</td>
                        </tr>
                        <tr className="border-b bg-abu dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                        <td className="whitespace-nowrap px-6 py-4">AW002</td>
                        <td className="whitespace-nowrap px-6 py-4">Jakarta</td>
                        <td className="whitespace-nowrap px-6 py-4">Y</td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                        <td className="whitespace-nowrap px-6 py-4">AW003</td>
                        <td className="whitespace-nowrap px-6 py-4">Bogor</td>
                        <td className="whitespace-nowrap px-6 py-4">Y</td>
                        </tr>
                        <tr className="border-b bg-abu dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">4</td>
                        <td className="whitespace-nowrap px-6 py-4">AW004</td>
                        <td className="whitespace-nowrap px-6 py-4">Bekasi</td>
                        <td className="whitespace-nowrap px-6 py-4">Y</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AreaWisata