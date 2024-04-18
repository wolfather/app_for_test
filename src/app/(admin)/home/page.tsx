'use client'
import { AppContext, AppContextProvider } from "@/app/context/app_context";
import { useContext } from "react";

export default function Admin_Home() {
    const { userData, logged, setLogged, setUserData } = useContext(AppContext)

    console.log({logged})
    return (
        <AppContextProvider>
            <div>
                <h1>Admin Home works</h1>
                <h2>Oi, {userData.name}! Bem vindo</h2>
            </div>
        </AppContextProvider>
    )
}