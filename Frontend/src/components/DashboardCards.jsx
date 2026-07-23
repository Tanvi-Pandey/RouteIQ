import { useEffect, useState } from "react";
import api from "../services/api";

function DashboardCards() {

    const [stats, setStats] = useState({
        customers: 0,
        products: 0,
        pending: 0,
        processed: 0
    });

    useEffect(() => {

        api.get("/dashboard")
            .then(res => setStats(res.data))
            .catch(err => console.log(err));

    }, []);

    const cards = [

        {
            title: "Customers",
            value: stats.customers
        },

        {
            title: "Products",
            value: stats.products
        },

        {
            title: "Pending Orders",
            value: stats.pending
        },

        {
            title: "Processed Orders",
            value: stats.processed
        }

    ];

    return (

        <div className="grid grid-cols-4 gap-6 mt-8">

            {cards.map(card => (

                <div
                    key={card.title}
                    className="bg-white rounded-xl shadow-lg p-8"
                >

                    <p className="text-gray-500">
                        {card.title}
                    </p>

                    <h1 className="text-5xl font-bold mt-4">
                        {card.value}
                    </h1>

                </div>

            ))}

        </div>

    );
}

export default DashboardCards;