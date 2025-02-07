import React, { useState } from "react";
import Regist from "./regist";
import LoginForm from "./loginComponent";

function SwitcherAuth({close}) {
    
    const [switcher  , setSwitcher] = useState('login')

    const handleSwitcher = () => {
        return null
    }

    return (
        <>
        {switcher === "login" && (<LoginForm onClose={close} authtoreg={() => setSwitcher("regist")} />)}
        {switcher === "regist" && (<Regist onClose={handleSwitcher}/>)}
        </>
    )
}

export default SwitcherAuth