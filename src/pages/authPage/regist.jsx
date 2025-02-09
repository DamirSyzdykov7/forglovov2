// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
function Regist({ onCloseReg }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const Add = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://glovo/api/regist", { name, password });
      // You might want to add some success feedback here
    } catch (error) {
      console.error("Ошибка отправки данных:", error);
      // You might want to add some error feedback to the user here
    }
  };

  return (
    <div className="fixed inset-0 bg-[#2b3b59] bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#2b3b59]">
            Добро пожаловать
          </h2>
          <button
            onClick={onCloseReg}
            className="text-[#2b3b59] hover:text-[#5375b0] transition-colors"
          >
            X
          </button>
        </div>
        <p className="text-[#767bb5] mb-6">Введите ваши данные</p>
        <form onSubmit={Add} method="POST" className="space-y-4">
          <div>
            <label
              htmlFor="RegistLogin"
              className="block text-sm font-medium text-[#2b3b59]"
            >
              Имя пользователя
            </label>
            <input
              type="text"
              id="RegistLogin"
              name="RegistLogin"
              placeholder="Введите ваше новое имя"
              onChange={(event) => setName(event.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-[#b4c2dc] rounded-md shadow-sm focus:outline-none focus:ring-[#38a2fe] focus:border-[#38a2fe]"
              required
            />
          </div>
          <div>
            <label
              htmlFor="RegistPassword"
              className="block text-sm font-medium text-[#2b3b59]"
            >
              Пароль
            </label>
            <input
              type="password"
              id="RegistPassword"
              name="RegistPassword"
              placeholder="Введите ваш новый пароль"
              onChange={(event) => setPassword(event.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-[#b4c2dc] rounded-md shadow-sm focus:outline-none focus:ring-[#38a2fe] focus:border-[#38a2fe]"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-[#38a2fe] text-white rounded-md hover:bg-[#5375b0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#38a2fe] transition-colors"
            >
              Зарегистрироваться
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Regist;
