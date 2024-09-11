import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    const login = async(formData) => {
        axios.defaults.withCredentials = true;

        const res = await axios.post("http://localhost:2002/api/auth/login",formData);
        setCurrentUser(res.data);
    };

    const logout = async() => {
        await axios.post("http://localhost:2002/api/auth/logout");
        setCurrentUser(null);
    };

    useEffect (()=> {
        localStorage.setItem("user",JSON.stringify(currentUser));
    },[currentUser]);

    return (< AuthContext.Provider value={{currentUser,login,logout}}>{children}</AuthContext.Provider>);;
};