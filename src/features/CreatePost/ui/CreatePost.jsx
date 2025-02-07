export function CreatePost() {
  return (
    <div className="flex items-center bg-white p-4 rounded-lg mb-8 shadow-sm">
      <input
        type="text"
        placeholder="Add a new tread"
        className="flex-1 border-none p-2 text-base focus:outline-none"
      />
      <button className="bg-blue-500 text-white p-2 rounded-full cursor-pointer hover:bg-blue-600">
        +
      </button>
    </div>
  );
}
