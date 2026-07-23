import api from "../services/api";

function CustomerTable({ customers, refreshCustomers }) {

    const deleteCustomer = async (id) => {

        await api.delete(`/customers/${id}`);

        refreshCustomers();

    };

    return (

        <table className="w-full bg-white rounded-xl shadow-lg">

            <thead>

                <tr className="bg-gray-100">

                    <th className="p-4">ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>

                </tr>

            </thead>

            <tbody>

                {customers.map(customer => (

                    <tr
                        key={customer.id}
                        className="text-center border-t"
                    >

                        <td className="p-4">{customer.id}</td>

                        <td>{customer.name}</td>

                        <td>{customer.email}</td>

                        <td>{customer.phone}</td>

                        <td>

                            <button
                                onClick={() => deleteCustomer(customer.id)}
                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                            >
                                Delete
                            </button>

                        </td>

                    </tr>

                ))}

            </tbody>

        </table>

    );
}

export default CustomerTable;