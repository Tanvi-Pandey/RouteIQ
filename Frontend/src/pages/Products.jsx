import { useEffect, useState } from "react";
import api from "../services/api";

import ProductForm from "../components/ProductForm";
import ProductTable from "../components/ProductTable";

function Products() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadProducts = async () => {

        try {

            const response = await api.get("/products");

            setProducts(response.data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        loadProducts();

    }, []);

    if (loading) {

        return (

            <div className="flex justify-center items-center h-screen">

                <h1 className="text-2xl font-semibold">
                    Loading products...
                </h1>

            </div>

        );

    }

    return (

        <div className="min-h-screen bg-gray-100 p-10">

            <ProductForm
                onProductAdded={loadProducts}
            />

            <div className="mt-8">

                <ProductTable
                    products={products}
                    refreshProducts={loadProducts}
                />

            </div>

        </div>

    );

}

export default Products;