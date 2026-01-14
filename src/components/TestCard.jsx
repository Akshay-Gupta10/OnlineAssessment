import { useNavigate } from "react-router-dom";

export default function TestCard({ title, duration, level }) {
  const navigate = useNavigate();
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-gray-500 mb-4">Duration: {duration} min</p>
      <p className="text-gray-500 mb-4">Level: {level}</p>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => navigate(`/start-test/${title}`)}
      >
        Start Test
      </button>
    </div>
  );
}

