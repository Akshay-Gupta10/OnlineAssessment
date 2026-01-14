export default function AdminDashboard() {
  const cards = [
    { title: "Total Tests", value: 5 },
    { title: "Total Attempts", value: 42 },
    { title: "Active Students", value: 18 },
    { title: "Avg Score", value: "7.2 / 10" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c) => (
          <div
            key={c.title}
            className="bg-white rounded-2xl shadow-md p-6
                       hover:shadow-lg transition"
          >
            <p className="text-sm text-gray-500">{c.title}</p>
            <p className="text-3xl font-bold text-blue-700 mt-2">
              {c.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
