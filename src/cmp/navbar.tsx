import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white/60 backdrop-blur sticky top-0 z-30 shadow-sm">
      <div className="max mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="w-9 h-9 rounded-lg bg-linear-to-br from-indigo-600 to-blue-500 flex items-center justify-center text-white font-semibold">
            Z
          </div>
          <span className="font-semibold text-lg">Zerosha</span>
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-slate-900 font-medium"
                : "text-slate-600 hover:text-slate-900"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-slate-900 font-medium"
                : "text-slate-600 hover:text-slate-900"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-slate-900 font-medium"
                : "text-slate-600 hover:text-slate-900"
            }
          >
            Contact
          </NavLink>
        </nav>

        <div className="md:hidden">
          <details className="relative">
            <summary className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center cursor-pointer">
              ☰
            </summary>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg p-3 flex flex-col gap-2">
              <NavLink
                to="/"
                className="text-slate-700"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="text-slate-700"
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className="text-slate-700"
              >
                Contact
              </NavLink>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
