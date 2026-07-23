import { useState } from "react";
import api from "../services/api";

function CustomerForm({ onCustomerAdded }) {

    const [customer, setCustomer] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const handleChange = (e) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await api.post("/customers", customer);

        setCustomer({
            name: "",
            email: "",
            phone: ""
        });

        onCustomerAdded();
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow-md space-y-4"
        >

            <h2 className="text-2xl font-bold">
                Add Customer
            </h2>

            <input
                type="text"
                name="name"
                placeholder="Customer Name"
                value={customer.name}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
                required
            />

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={customer.email}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
                required
            />

            <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={customer.phone}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
                required
            />

            <button
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
                Add Customer
            </button>

        </form>
    );
}

export default CustomerForm;