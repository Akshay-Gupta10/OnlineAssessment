export default function Analytics() {
  const stats = [
    ["Highest Score", "10 / 10"],
    ["Lowest Score", "3 / 10"],
    ["Avg Completion Time", "18 min"],
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Analytics</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {stats.map(([title, value]) => (
          <div
            key={title}
            className="bg-white p-6 rounded-2xl shadow"
          >
            <p className="text-sm text-gray-500">{title}</p>
            <p className="text-2xl font-bold mt-2">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
