import { useState } from "react";
import { CreatePostModal } from "../../CreatePostModal";
import { Plus } from "lucide-react";

export function CreatePost() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmit = (title, content) => {
    console.log("New thread:", { title, content });
  };

  return (
    <>
      <div className="flex items-center bg-white p-4 rounded-lg mb-8 shadow-sm">
        <button
          onClick={handleOpenModal}
          className="flex-1 text-left p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          Add a new thread
        </button>
        <button
          onClick={handleOpenModal}
          className="bg-blue-500 text-white p-2 rounded-full cursor-pointer hover:bg-blue-600"
        >
          <Plus />
        </button>
      </div>
      <CreatePostModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
      />
    </>
  );
}
