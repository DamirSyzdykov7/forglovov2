// eslint-disable-next-line react/prop-types
export function UserStatus({ isOnline }) {
  return (
    <span className="flex items-center gap-1 text-sm text-gray-500">
      <span
        className={`w-2 h-2 rounded-full ${
          isOnline ? "bg-green-500" : "bg-gray-400"
        }`}
      />
      {isOnline ? "online" : "offline"}
    </span>
  );
}
