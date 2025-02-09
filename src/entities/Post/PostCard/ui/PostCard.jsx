import axios from "axios";
import { useEffect, useState } from "react";

export function PostCard() {
  const [threads, setThreads] = useState([]); 
  const [user, setUser] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://glovo/api/showThread");
        setThreads(response.data.thread); 
        setUser(response.data.user || "Гость");
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };

    fetchData();
  }, []);

  return (<>
    {threads.map((thread) => (
    <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
      
        <div key={thread.id} className="border-b pb-4 mb-4">
          <h2 className="text-xl font-semibold mb-2">{thread.name_Thread}</h2>
          <div className="flex items-center gap-4 mb-2">
            <div className="w-10 h-10 rounded-full bg-blue-500"></div>
            <div>
              <div>{user}</div>
              <small className="text-gray-500"></small>
            </div>
          </div>
          <p className="mb-2">{thread.Info}</p>
        </div>
        <div className="flex gap-4">
        <button className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200">
          🔖
        </button>
        <button className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200">
          Submit your application
        </button>
      </div>
    </div>
    ))}</>
  );
}