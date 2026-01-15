const attempts = [
  { user: "Akshay", test: "React Basics", score: "8 / 10", date: "14 Jan 2026" },
  { user: "Rohit", test: "HTML Quiz", score: "6 / 10", date: "13 Jan 2026" },
];

export default function TestAttempts() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Test Attempts</h2>

      <div className="bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-200 text-sm">
            <tr>
              <th className="p-4 text-left">Student</th>
              <th className="p-4 text-left">Test</th>
              <th className="p-4 text-left">Score</th>
              <th className="p-4 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {attempts.map((a, i) => (
              <tr key={i} className="border-t hover:bg-slate-50">
                <td className="p-4">{a.user}</td>
                <td className="p-4">{a.test}</td>
                <td className="p-4 font-semibold text-green-700">{a.score}</td>
                <td className="p-4">{a.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
