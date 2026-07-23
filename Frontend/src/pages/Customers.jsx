import { useEffect, useState } from "react";
import api from "../services/api";

import CustomerForm from "../components/CustomerForm";
import CustomerTable from "../components/CustomerTable";

function Customers() {

    const [customers, setCustomers] = useState([]);

    const loadCustomers = () => {

        api.get("/customers")
            .then(res => setCustomers(res.data));

    };

    useEffect(() => {

        loadCustomers();

    }, []);

    return (

        <div className="p-10 bg-gray-100 min-h-screen">

            <CustomerForm
                onCustomerAdded={loadCustomers}
            />

            <div className="mt-10">

            <CustomerTable
                customers={customers}
                refreshCustomers={loadCustomers}
            />

            </div>

        </div>

    );
}

export default Customers;