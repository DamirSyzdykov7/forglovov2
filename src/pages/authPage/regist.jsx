import React, { useEffect, useState } from "react";
import axios from "axios";

function Regist({onCloseReg}) {

    const [name , setName] = useState('');
    const [password , setPassword] = useState('');


    const Add = (event) => {
        event.preventDefault()
        try {
            axios.post('http://glovo/api/regist', {name , password});            
        } catch {
            console.error('ошибка отправки данных')       
        }

    }

    return (
        <>
        <div className="fixed inset-0 bg-gray bg-opacity-70 flex justify-center items-center z-50">
            <div className=" text-center bg-white rounded-[15px]">
                <div className="w-[400px] h-[300px] border-2 rounded-[15px] flex justify-center">
                    <div className="">
                        <div className="border-b-2">
                            <div className="absolute">
                                <button className="ml-[260px]" onClick={onCloseReg}>Х</button>
                            </div>
                                <h1><p className="pt-[20px]">Добро пожаловать</p></h1>
                            <h2 className="pb-[20px]">введит ваши данные</h2>
                        </div>
                        <form onSubmit={Add} method="POST">
                    <p><input className="w-[200px] mt-[15px] border-2" type="text" placeholder="введите ваше новое имя" id="RegistLogin" name="RegistLogin" onChange={(event) => {setName(event.target.value)}}></input></p>
                    <p><input className="w-[200px] mt-[15px] border-2" type="password" placeholder="введите ваш новый пароль" id="RegistPassword" name="RegistPassword" onChange={(event) => {setPassword(event.target.value)}} ></input></p>
                    <button className="mt-[15px]" type="submit">зарегестрироваться</button>
                </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}

export default Regist