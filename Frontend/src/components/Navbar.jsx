import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "15px 40px",
                background: "#1f2937",
                color: "white"
            }}
        >
            <h2>RouteIQ</h2>

            <div style={{ display: "flex", gap: "25px" }}>
                <Link to="/">Dashboard</Link>
                <Link to="/customers">Customers</Link>
                <Link to="/products">Products</Link>
                <Link to="/orders">Orders</Link>
            </div>
        </nav>
    );
}

export default Navbar;