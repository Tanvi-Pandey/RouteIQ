import { useState } from "react";
import api from "../services/api";

function ProductForm({ onProductAdded }) {

    const [product, setProduct] = useState({
        name: "",
        category: "",
        quantity: "",
        price: ""
    });

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await api.post("/products", product);

        setProduct({
            name: "",
            category: "",
            quantity: "",
            price: ""
        });

        onProductAdded();
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow-md space-y-4"
        >
            <h2 className="text-2xl font-bold">
                Add Product
            </h2>

            <input
                className="w-full border p-3 rounded-lg"
                name="name"
                placeholder="Product Name"
                value={product.name}
                onChange={handleChange}
                required
            />

            <input
                className="w-full border p-3 rounded-lg"
                name="category"
                placeholder="Category"
                value={product.category}
                onChange={handleChange}
                required
            />

            <input
                className="w-full border p-3 rounded-lg"
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={product.quantity}
                onChange={handleChange}
                required
            />

            <input
                className="w-full border p-3 rounded-lg"
                type="number"
                step="0.01"
                name="price"
                placeholder="Price"
                value={product.price}
                onChange={handleChange}
                required
            />

            <button
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
                Add Product
            </button>
        </form>
    );
}

export default ProductForm;