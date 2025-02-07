export function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
      <div className="text-2xl font-bold text-gray-800">NIC</div>
      <div className="flex gap-4">
        <span>🔔</span>
        <button>👤</button>
      </div>
    </header>
  );
}
