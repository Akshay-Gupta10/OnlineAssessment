import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="h-16 flex justify-between items-center px-8 bg-white shadow">
      <h1 className="text-xl font-bold text-blue-600">
        User Dashboard
      </h1>

      {/* Profile */}
      <div
        onClick={() => navigate("/profile")}
        className="flex items-center gap-3 cursor-pointer"
      >
        <div className="text-right">
          <p className="text-sm font-semibold">Akshay</p>
          <p className="text-xs text-gray-500">User</p>
        </div>

        <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
          A
        </div>
      </div>
    </div>
  );
}

