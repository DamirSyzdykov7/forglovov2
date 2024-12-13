import React, { createContext, useEffect, useState } from "react";
import '/src/output.css'
import '/src/App.css'
import SwiperRest from "../widgest/swiper/swiper";
import FindLocate from "../widgest/swiper/findLoc/findLoc";
import {Routes, Route, Link } from "react-router";
import TimeSvg from "..//shared/assets/timeSvg"
import DeliverSvg from '../shared/assets/deliverSvg'
import HurtSvg from '..//shared/assets/hurtSvg'
import LoginForm from "../pages/authPage/loginComponent";



function BodyMainPage() {

    return (
        <>
        <div className=" mt-[25px] mr-[90px] relative">
            <img className="float-right" src="/src/shared/assets/Photo-plate.jpg"></img> 
            <div className="absolute right-[-15px] top-[50px] mt-[560px] text-center">
                <img src="/src/shared/assets/arrow.jpg" className="mx-auto"></img>
                <p className="mt-[14px] martel text-[16px] font-normal text-[#313030]">
                    Fresh salad, Il Pasifigio
                </p>
            </div>                       
        </div>
        <div className="ml-[90px]">
            <div className="poppins leading-64 text-6xl mt-[125px] ">
                <p>Your Food court</p>at home
            </div>
            <div className="flex mt-[88px]">
                <div className="border-2 rounded martel mr-[24px] w-[118px] h-[72px] text-center text-[#3F4255] border-yellow">
                    <p className="text-[16px] mt-[16px] font-bold">Delivery</p>
                    <div className="text-[12px] font-normal">Order in</div>
                </div>
                <div className="border-2 rounded martel w-[118px] h-[72px] text-center text-[#3F4255] border-yellow">
                    <p className="text-[16px] mt-[16px] font-bold">Takeout</p>
                    <div className="text-[12px] font-normal" >Grab and go</div>
                </div>
            </div>
        </div>
        <div className="relative flex">
            <div>
                <img src="/src/shared/assets/rucola-png.jpg" className=" ml-[560px] absolute inset-0 z-0"></img>
            </div>
        </div>
        <div className="w-[872px] h-[104px] shadow-md shadow-[0_8px_40px_rgba(0,0,0,0.10)] mt-[350px] flex rounded-sm">
            <div className="ml-[92px] flex pt-[28px]">
                <TimeSvg/>
                <div className="pl-[16px]">
                    <p className="martel text-[16px] ">delivery in all paris</p> 
                        in less than 30 minutes
                </div>
                <div className="pl-[46px]">
                    <DeliverSvg/>
                </div>
                <div className="pl-[16px]">
                    <p className="martel text-[16px] ">Free delivery</p>
                        from 29 euros
                </div>
                <div className="pl-[46px]">
                    <HurtSvg/>
                </div>
                <div className="pl-[16px]">
                    <p className="martel text-[16px] ">Only fresh</p>
                        and French products
                </div>
             </div>
        </div>
        <div className=" mt-[48px] ml-[92px] mr-[92px] flex justify-between">
            <div className="text-[#3F4255] poppins text-4xl">Restoraunts</div>
            <Link to="restoraunts">
                <div className="w-[118px] h-[48px] border-2 text-center pt-[10px] bg-[#F2F4FA] martel text-[#9093A6]">show all</div>
            </Link>
        </div>
        <div className="ml-[92px] mr-[92px]">
            <SwiperRest/>
        </div>
        <div className="bg-[#F2F4FA] text-[#3F4255] flex justify-between">
            <div className="pt-[80px] pb-[80px] pl-[170px]">
                <div>
                    <p className="text-3xl poppins">
                        Your nearest restoraunts
                    </p>
                </div>
                    <div className="text-base text-[#3F4255] mt-[24px]">
                        <p>
                            Each kitchen works with its own delivery area
                        </p>
                            to deliver food to you as soon as possible
                    </div>
             </div>
            <div className="pt-[113px]">
                <FindLocate/>
            </div>
        </div>
        </>
    )
}

export default BodyMainPage