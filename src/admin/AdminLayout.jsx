import { NavLink, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex bg-slate-100">

      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 hidden md:block">
        <h2 className="text-xl font-bold text-blue-700 mb-8">
          Admin Panel
        </h2>

        <nav className="space-y-3">
          <NavLink
            to="/admin"
            end
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg font-medium ${
                isActive ? "bg-gray-200 text-blue-800" : "hover:bg-gray-100"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/admin/create-test"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg font-medium ${
                isActive ? "bg-gray-200 text-blue-800" : "hover:bg-gray-100"
              }`
            }
          >
            Create Test
          </NavLink>

          <NavLink
            to="/admin/attempts"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg font-medium ${
                isActive ? "bg-gray-200 text-blue-800" : "hover:bg-gray-100"
              }`
            }
          >
            Test Attempts
          </NavLink>

          <NavLink
            to="/admin/analytics"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg font-medium ${
                isActive ? "bg-gray-200 text-blue-800" : "hover:bg-gray-100"
              }`
            }
          >
            Analytics
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
