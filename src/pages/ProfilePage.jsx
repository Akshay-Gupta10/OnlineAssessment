import { useNavigate } from "react-router-dom";
import AnalyticsChart from "../components/AnalyticsChart";
import StatCard from "../components/StatCard";

export default function ProfilePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      {/* Back Button */}
        <button
            onClick={() => navigate("/dashboard")}
            className="block mx-auto z-50 mb-4 text-blue-600 font-semibold"
        >
            ← Back to Dashboard
        </button>

        {/* Profile Card */}
        <div className="text-center bg-white p-6 rounded-xl shadow mb-6">
            <h2 className="text-xl font-bold">Akshay</h2>
            <p className="text-gray-500">akshay@gmail.com</p>
            <p className="text-gray-500">Role: User</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <StatCard title="Avg Score" value="74%" />
            <StatCard title="Tests Taken" value="12" />
            <StatCard title="Accuracy" value="81%" />
        </div>

        {/* Analytics */}
        <div className="bg-white p-6 rounded-xl shadow mb-6">
            <h3 className="font-semibold mb-4">Performance Analytics</h3>
            <AnalyticsChart />
        </div>

        {/* Past Tests */}
        <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold mb-4">Past Tests</h3>
            <ul className="space-y-2">
            <li className="flex justify-between">
                <span>Java</span><span>78%</span>
            </li>
            <li className="flex justify-between">
                <span>DSA</span><span>85%</span>
            </li>
            <li className="flex justify-between">
                <span>React</span><span>70%</span>
            </li>
            </ul>
        </div>
    </div>
  );
}
