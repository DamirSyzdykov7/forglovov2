import React, { createContext, useEffect, useState } from "react";
import '/src/output.css'
import '/src/App.css'
import ManLogo from '/src/shared/assets/ManLogo.jsx'
import CartSvg from "../shared/assets/cartSvg";
import MenuButton from "..//shared/assets/menuButton";
import LoginForm from "../pages/authPage/loginComponent";
import SwiperRest from "../widgest/swiper/swiper";
import {Routes, Route, Link } from "react-router";
import Regist from "../pages/authPage/regist";



function HeaderMainPAge() {

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
        <>
            <header>
                <div className="border-b-2">
                    <div className="flex justify-between relative ml-[90px] pb-[11px]">
                        <div className="absolute max-w-fit inset-0 text-center pt-[26px]" >
                            <img src="/src/shared/assets/Rectangle19.jpg" className="object-cover pt-[13px]" width="81px"></img>
                        </div>
                            <div className="w-[70%]  z-10 martel text-2xl pt-[26px] text-[#3F4255] font-bold">
                                <Link to="/">yellowkitchen</Link>
                            </div>
                        <div className="flex pt-[26px]">
                            <div className="mr-[6px]">
                                <ManLogo/>
                            </div>
                            <div className=" martel text-[16px] leading-[20px] text-[#9093A6]">
                                <button onClick={opopo}>Log In</button>
                            </div>
                        </div>
                        <div className="flex pt-[24px] ml-[48px]">
                            <div><CartSvg/></div>
                            <div className=" martel text-[#9093A6]">0</div>
                        </div>
                        <div className="mr-[40px]"><MenuButton/></div>
                    </div>
                </div>
                {state && 
                    <LoginForm onClose={() => setState(false) } authtoreg={authtoreg}/>
                }
                {switcher ? <Regist onCloseReg={() => {setSwitcher(false)}}/> :''
                }
            </header>
        </>
    )


}

export default HeaderMainPAge