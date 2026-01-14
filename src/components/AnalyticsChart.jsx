import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { test: "Test 1", score: 65 },
  { test: "Test 2", score: 72 },
  { test: "Test 3", score: 80 },
  { test: "Test 4", score: 78 }
];

export default function AnalyticsChart() {
  return (
    <div className="bg-white rounded-xl shadow p-6 h-[300px]">
      <h3 className="font-semibold mb-4">Performance Analytics</h3>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="test" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="score" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
