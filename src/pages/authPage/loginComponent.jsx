"use client";

import { useContext, useState } from "react";
import { AuthContext, AuthProvider } from "./tokenState";
import "../../index.css";
import Regist from "./regist";

// eslint-disable-next-line react/prop-types
function LoginForm({ onClose, authtoreg }) {
  const { handleLogin } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState(false);

  const finish = async (e) => {
    e.preventDefault();
    await handleLogin(name, password);
  };

  if (state) {
    return <Regist />;
  }

  return (
    <AuthProvider>
      <div className="fixed inset-0 bg-[#2b3b59] bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#2b3b59]">
              Добро пожаловать
            </h2>
            <button
              onClick={onClose}
              className="text-[#2b3b59] hover:text-[#5375b0] transition-colors"
            >
              X
            </button>
          </div>
          <p className="text-[#767bb5] mb-6">введите ваши данные</p>
          <form onSubmit={finish} method="POST" className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#2b3b59]"
              >
                Логин
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-[#b4c2dc] rounded-md shadow-sm focus:outline-none focus:ring-[#38a2fe] focus:border-[#38a2fe]"
                placeholder="Введите логин"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#2b3b59]"
              >
                Пароль
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-[#b4c2dc] rounded-md shadow-sm focus:outline-none focus:ring-[#38a2fe] focus:border-[#38a2fe]"
                placeholder="Введите пароль"
              />
            </div>
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="px-4 py-2 bg-[#38a2fe] text-white rounded-md hover:bg-[#5375b0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#38a2fe] transition-colors"
              >
                Войти
              </button>
              <button
                type="button"
                onClick={authtoreg}
                className="text-[#38a2fe] hover:text-[#5375b0] transition-colors"
              >
                Зарегистрироваться
              </button>
            </div>
          </form>
        </div>
      </div>
    </AuthProvider>
  );
}

export default LoginForm;
