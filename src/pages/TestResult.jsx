import { useLocation, useNavigate } from "react-router-dom";

export default function TestResult() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if(!state) return <p className="p-8">No result to show</p>;

  const { score, total } = state;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow text-center">
        <h2 className="text-2xl font-bold mb-4">Test Completed!</h2>
        <p className="text-xl mb-4">Your Score: <span className="font-bold">{score} / {total}</span></p>
        <p className="text-gray-500 mb-6">{Math.round((score/total)*100)}%</p>
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={()=>navigate("/dashboard")}
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}
