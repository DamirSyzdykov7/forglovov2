import React, { useEffect, useState } from "react";
import axios from "axios";
import {Routes, Route, Link } from "react-router";

function RestPage() {
    const [restoraunts , SetRestoraunts] = useState([]);
    const [dishes, setDishes] = useState([]);
    useEffect(() => {
            const restCall = async() => {
                try{
                const query = await axios.get('http://glovo/api/main')
                const reponse =  query.data.isRestoraunts
                SetRestoraunts(reponse)
                } catch {
                    console.error('ршибка загрузки ресторнов')
                }

            }
            restCall()
    },[])


    
    const AddRestURL = async(restoraunt) => {
        try{
        const restorauntName = restoraunt.Название
        const queryDishes = await axios.post("http://glovo/api/dishes" , {restorauntName})
        console.log("Ответ сервера:", queryDishes.data.hadDishes);
        const res = queryDishes.data.hadDishes
        console.log('res' , res)
        setDishes(res);
        }catch {
            console.error("ошибка отправки данных ресторана на сервер")
        }
    }
    useEffect(() => {
            console.log("БЛюда", dishes)
        }, [dishes])

    return (
        <>
        <h1 className="text-center text-[50px] martel text-[#3F4255]">Restoraunts</h1>
        <div className="grid grid-cols-4 gap-20 ml-[24px] mt-[70px] mr-[24px] ">
            {restoraunts.map((restoraunt) => (
                <Link key={restoraunt.id} to={`/dishes?restoraunt=${restoraunt.Название}`}>
                    <button onClick={() => AddRestURL(restoraunt)}>
                        <div className="border-4">
                            <div className="">
                                <div className="w-[300px] h-[400px] b-2 ">
                                    <div>
                                        <img src={`/src/shared/assets/photo/${restoraunt.фото}`} className="w-[300px] h-[300px]"></img>
                                    </div>
                                    <div className="text-center pt-[25px] martel text-[#3F4255] text-[30px]">
                                        {restoraunt.Название}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                </Link>
            ))}
        </div>
        </>

    )
}

export default RestPage