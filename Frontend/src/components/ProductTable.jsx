import api from "../services/api";

function ProductTable({ products, refreshProducts }) {

    const deleteProduct = async (id) => {
        await api.delete(`/products/${id}`);
        refreshProducts();
    };

    return (
        <table className="w-full bg-white rounded-xl shadow-lg">

            <thead>

                <tr className="bg-gray-100">

                    <th className="p-4">ID</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Action</th>

                </tr>

            </thead>

            <tbody>

                {products.map(product => (

                    <tr key={product.id} className="border-t text-center">

                        <td className="p-4">{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td>{product.quantity}</td>
                        <td>₹{product.price}</td>

                        <td>

                            <button
                                onClick={() => deleteProduct(product.id)}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
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

export default ProductTable;