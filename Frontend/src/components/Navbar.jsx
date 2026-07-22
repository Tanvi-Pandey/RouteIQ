import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <h1 className="text-3xl font-bold text-cyan-400">
          RouteIQ
        </h1>

        <div className="flex gap-8 text-lg">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-cyan-400 font-semibold"
                       : "hover:text-cyan-400"
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/customers"
            className={({ isActive }) =>
              isActive ? "text-cyan-400 font-semibold"
                       : "hover:text-cyan-400"
            }
          >
            Customers
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-cyan-400 font-semibold"
                       : "hover:text-cyan-400"
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/orders"
            className={({ isActive }) =>
              isActive ? "text-cyan-400 font-semibold"
                       : "hover:text-cyan-400"
            }
          >
            Orders
          </NavLink>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;