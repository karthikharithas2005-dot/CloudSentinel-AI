import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function TrendChart({ alerts }) {
  const trendData = alerts.map((alert, index) => ({
    name: `Alert ${index + 1}`,
    count: index + 1,
  }));

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={trendData}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="name" />

        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="count"
          stroke="#3b82f6"
          strokeWidth={4}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default TrendChart;
