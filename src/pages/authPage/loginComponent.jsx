import React, { useContext, useState } from "react";
import { AuthContext } from "./tokenState";
import { AuthProvider } from "./tokenState";
import "C:/Users/Home/forglovov23/src/index.css"
import Regist from "./regist";
import { CreatePostModal } from "../../features/CreatePostModal";

function LoginForm({onClose , authtoreg}) {

    const {handleLogin} = useContext(AuthContext);
    const [name ,setName] = useState('');
    const [password ,setPassword] = useState('');
    const [state, setState] = useState(false)


const finish = async (e) => {
    e.preventDefault();
    await handleLogin(name ,password);
    
}

if(state) {
    return (
        <Regist/>
    )
}

return (
    <AuthProvider>
        <>
        <div className="fixed inset-0 bg-gray bg-opacity-70 flex justify-center items-center z-50">
            <div className=" text-center bg-white rounded-[15px]">
                <div className="w-[400px] h-[300px] border-2 rounded-[15px] flex justify-center">
                    <div className="">
                        <div className="border-b-2">
                            <div className="absolute">
                                    <button className="ml-[260px]" onClick={onClose}>Х</button>
                            </div>
                                <h1><p className="pt-[20px]">Добро пожаловать</p></h1>
                            <h2 className="pb-[20px]">введит ваши данные</h2>
                        </div>
                        <form onSubmit={finish} method="POST">
                                <p className="mt-[30px]">
                                    <input 
                                        placeholder="login" 
                                        className="border-2" 
                                        type="text" id="name" 
                                        value={name ? `${name}` : ''} onChange={(e) => setName(e.target.value)}>
                                    </input>
                                </p>
                                <p className="mt-[20px]">
                                    <input
                                        placeholder="password" 
                                        className="border-2" 
                                        type="password" 
                                        id="password" 
                                        value={password ? `${password}` : ''} onChange={(e) => setPassword(e.target.value)}>
                                </input>
                                </p>
                            <button  className="mt-[20px] border-2 rounded-[6px] w-[65px]" type="submit">войти</button>
                        </form>
                            <div>
                                <button onClick={authtoreg}  >зарегестрироваться</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    </AuthProvider>
)
}

export default LoginForm