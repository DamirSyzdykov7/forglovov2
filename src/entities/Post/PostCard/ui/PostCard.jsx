import { Bookmark } from "lucide-react";

export function PostCard() {
  return (
    <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Хакатон NIC 07.02.2025</h2>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-10 h-10 rounded-full bg-blue-500"></div>
        <div>
          <div>Баха</div>
          <small className="text-gray-500">1d ago</small>
        </div>
      </div>
      <div className="mb-6 space-y-2">
        <p>🚀🔥 ВНИМАНИЕ, ВСЕМ ЛЮБИТЕЛЯМ ВЫЗОВОВ!</p>
        <p>💡 7 ФЕВРАЛЯ пройдет ЭПИЧЕСКИЙ ХАКАТОН!</p>
        <p>📍 Где? Кабинет 901</p>
        <p>⏰ Когда? В 18:20</p>
      </div>
      <div className="flex gap-4">
        <button className="px-4 py-2 bg-slate-200 rounded-2xl hover:bg-slate-300">
          <Bookmark />
        </button>
        <button className="px-4 py-2 bg-slate-200 rounded-2xl hover:bg-slate-300">
          Submit your application
        </button>
      </div>
    </div>
  );
}
