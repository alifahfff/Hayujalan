const Crew = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table w-full" data-theme="bumblebee">
                <thead>
                <tr className="bg-blue">
                    <th>ID</th>
                    <th>Crew Operasional</th>
                    <th>Biaya</th>
                    <th>Status</th>
                    <th>Aksi</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>CO001</th>
                    <td>Driver 1</td>
                    <td>Rp.150.000</td>
                    <td>/day/bus</td>
                    <td>y</td>
                </tr>
                <tr className="active">
                    <th>CO001</th>
                    <td>Driver 1</td>
                    <td>Rp.150.000</td>
                    <td>/day/bus</td>
                    <td>y</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Crew