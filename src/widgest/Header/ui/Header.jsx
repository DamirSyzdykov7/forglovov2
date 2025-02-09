import Regist from "../../../pages/authPage/regist";
import {Routes, Route, Link } from "react-router";
import LoginForm from "../../../pages/authPage/loginComponent";
import { useState } from "react";



export function Header() {
  const [switcher  , setSwitcher] = useState(false)
  const [state , setState] = useState(false);
  const opopo = () => {
      setState(true)
      console.log("Button clicked!")
  }

  const authtoreg  = () => {
      setSwitcher(true);
      setState(false);
  }
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
      <div className="text-2xl font-bold text-gray-800">NIC</div>
      <div className="flex gap-4">
        <span>🔔</span>
        <button onClick={opopo} >👤</button>
      </div>
      {state && 
      <LoginForm onClose={() => setState(false) } authtoreg={authtoreg}/>
      }
      {switcher ? <Regist onCloseReg={() => {setSwitcher(false)}}/> :''
      }
    </header>
  );
}
