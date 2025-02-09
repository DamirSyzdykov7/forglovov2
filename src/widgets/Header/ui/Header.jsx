import PropTypes from "prop-types";
import { Bell, User } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";
import "/src/index.css";
import LoginForm from "../../../pages/authPage/loginComponent";
import Regist from "../../../pages/authPage/regist";

export function Header() {
  const [switcher, setSwitcher] = useState(false);
  const [state, setState] = useState(false);
  const opopo = () => {
    setState(true);
    console.log("Button clicked!");
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
        <button
          className="w-auto h-auto p-2 rounded-full bg-blue-400 hover:bg-blue-500"
          onClick={opopo}
        >
          <User className="text-slate-700" size={30} />
        </button>
      </div>
      {state && (
        <LoginForm onClose={() => setState(false)} authtoreg={authtoreg} />
      )}
      {switcher ? (
        <Regist
          onCloseReg={() => {
            setSwitcher(false);
          }}
        />
      ) : (
        ""
      )}
    </header>
  );
}

Header.propTypes = {
  setIsSwitched: PropTypes.func.isRequired,
  isSwitched: PropTypes.bool,
};
