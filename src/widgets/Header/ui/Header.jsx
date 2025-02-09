import { useContext, useState } from "react";
import { AuthContext } from "../../../pages/authPage/tokenState"; // Импортируем AuthContext
import { Bell, User, LogOut } from "lucide-react";
import { Link } from "react-router"; // Нужно импортировать Link из react-router-dom
import LoginForm from "../../../pages/authPage/loginComponent";
import Regist from "../../../pages/authPage/regist";

export function Header() {
  const [switcher, setSwitcher] = useState(false);
  const [state, setState] = useState(false);
  const { user, handleLogout } = useContext(AuthContext); // Добавили handleLogout

  const opopo = () => {
    if (user) {
      return;
    }
    setState(true);
  };

  const authtoreg = () => {
    setSwitcher(true);
    setState(false);
  };

  return (
    <header className="flex justify-between items-center px-28 py-4 bg-white shadow-sm fixed w-full top-0 z-50">
      <Link to={"/"}>
        <div className="text-4xl font-bold text-gray-800">NIC</div>
      </Link>
      <div className="flex items-center gap-6">
        <button className="w-auto h-auto p-2 rounded-full bg-slate-200 hover:bg-slate-300">
          <Bell className="text-slate-700" size={30} />
        </button>

        {user ? (
          <div className="flex items-center gap-4">
            <Link to={"/ProfilePage"}>
              <button className="w-auto h-auto p-2 rounded-full bg-blue-400 hover:bg-blue-500">
                <User className="text-slate-700" size={30} />
              </button>
            </Link>
            {/* Новая кнопка выхода */}
            <button
              onClick={handleLogout}
              className="w-auto h-auto p-2 rounded-full bg-red-400 hover:bg-red-500 transition-colors"
              title="Выйти"
            >
              <LogOut className="text-white" size={30} />
            </button>
          </div>
        ) : (
          <button
            className="w-auto h-auto p-2 rounded-full bg-blue-400 hover:bg-blue-500"
            onClick={opopo}
          >
            <User className="text-slate-700" size={30} />
          </button>
        )}
      </div>

      {state && (
        <LoginForm onClose={() => setState(false)} authtoreg={authtoreg} />
      )}
      {switcher && <Regist onCloseReg={() => setSwitcher(false)} />}
    </header>
  );
}
