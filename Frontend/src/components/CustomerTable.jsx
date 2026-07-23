function CustomerTable({ customers }) {

    return (

        <table className="w-full bg-white rounded-xl shadow-md">

            <thead>

                <tr className="bg-gray-100">

                    <th className="p-4">ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>

                </tr>

            </thead>

            <tbody>

                {customers.map(customer => (

                    <tr
                        key={customer.id}
                        className="text-center border-t"
                    >

                        <td className="p-4">
                            {customer.id}
                        </td>

                        <td>{customer.name}</td>

                        <td>{customer.email}</td>

                        <td>{customer.phone}</td>

                    </tr>

                ))}

            </tbody>

        </table>

    );
}

export default CustomerTable;