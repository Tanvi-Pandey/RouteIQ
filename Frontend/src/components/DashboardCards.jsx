function DashboardCards() {

    const cards = [
        { title: "Customers", value: 0 },
        { title: "Products", value: 0 },
        { title: "Pending Orders", value: 0 },
        { title: "Processed Orders", value: 0 }
    ];

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: "20px",
                marginTop: "30px"
            }}
        >
            {cards.map((card) => (
                <div
                    key={card.title}
                    style={{
                        background: "white",
                        padding: "25px",
                        borderRadius: "12px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                    }}
                >
                    <h3>{card.title}</h3>
                    <h1>{card.value}</h1>
                </div>
            ))}
        </div>
    );
}

export default DashboardCards;