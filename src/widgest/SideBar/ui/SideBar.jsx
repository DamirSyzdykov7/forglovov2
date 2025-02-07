export function SideBar() {
  return (
    <nav className="fixed left-0 top-[70px] w-[250px] p-8">
      <div className="flex items-center gap-4 p-3 mb-2 rounded-lg hover:bg-gray-200 cursor-pointer">
        <span>🏠</span>
        <span>Home</span>
      </div>
      <div className="flex items-center gap-4 p-3 mb-2 rounded-lg hover:bg-gray-200 cursor-pointer">
        <span>👥</span>
        <span>Friend treads</span>
      </div>
      <div className="flex items-center gap-4 p-3 mb-2 rounded-lg hover:bg-gray-200 cursor-pointer">
        <span>🔖</span>
        <span>Saved</span>
      </div>
    </nav>
  );
}
