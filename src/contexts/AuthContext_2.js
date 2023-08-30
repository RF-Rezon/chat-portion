import { auth } from "@/firebase/Firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const AuthContext_2 = createContext();

export const AuthContextProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState({});

    useEffect(()=> {
       const unsub = onAuthStateChanged(auth, (user)=> {
            setCurrentUser(user);
        });

        return ()=> {
            unsub();
        }
    }, []);

    return (
    <AuthContext_2.Provider value={{currentUser}}> 
        {children}
    </AuthContext_2.Provider>
    )
}