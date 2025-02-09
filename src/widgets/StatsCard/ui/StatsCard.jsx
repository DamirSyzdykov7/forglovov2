// eslint-disable-next-line react/prop-types
export function StatsCard({ count, label, color }) {
  const colorClasses = {
    blue: "bg-blue-100 border-blue-200",
    green: "bg-green-100 border-green-200",
    red: "bg-red-100 border-red-200",
  };

  return (
    <div className={`p-6 rounded-lg border ${colorClasses[color]}`}>
      <div className="text-4xl font-bold mb-2">{count}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}
