import React, { createContext, useEffect, useState } from "react";
import { loginInfo ,logout} from "./tokenController";


 export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user ,setUser] = useState(null)

    const handleRefresh = async() => {
        try{
        refreshResponse = await axios.post('http://glovo/api/refresh' , {}, {
            headers : {Authorization : `Bearer ${localStorage.getItem(access_token)}`}
        })

        newToken = refreshResponse.data.access_token;

        localStorage.setItem('accessToken' , newToken);

        

        if(newToken) {
            setUser(prevState => ({...prevState || {} , newToken}))
        } else {
            console.error('какая то залупа')
        }
        
        return newToken;
        } catch {
            console.error('Ошибка обновленяи токена', 401);
        }
    }



    const handleLogin = async(name, password) => {
        await loginInfo(name , password);
        setUser(loginInfo);
    };

    const handleLogout = async() => {
        await logout();
        setUser(null);
    }


    useEffect(() =>{
        const timeRefresh = setInterval(() => {
            handleRefresh();
        }, 59 * 60 *1000);
        timeRefresh
    }, []);

    return (
        <AuthContext.Provider value={{handleLogin,user,handleLogout,AuthProvider}}>
            {children}
        </AuthContext.Provider>
    );
};