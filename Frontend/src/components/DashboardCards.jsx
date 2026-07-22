function DashboardCards() {

    const cards = [
        { title: "Customers", value: 1 },
        { title: "Products", value: 1 },
        { title: "Pending Orders", value: 0 },
        { title: "Processed Orders", value: 1 }
    ];

    return (
        <div className="grid grid-cols-4 gap-6 mt-8">

            {cards.map((card) => (

                <div
                    key={card.title}
                    className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition"
                >
                    <p className="text-gray-500">{card.title}</p>

                    <h1 className="text-4xl font-bold mt-3">
                        {card.value}
                    </h1>

                </div>

            ))}

        </div>
    );
}

export default DashboardCards;