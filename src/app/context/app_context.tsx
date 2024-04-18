import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { UserEntity } from "../User/user.entity";


interface AppContextEntity {
    userData: UserEntity;
    setUserData: Dispatch<SetStateAction<UserEntity>>;
    logged: boolean;
    setLogged: Dispatch<SetStateAction<boolean>>;
}
export const AppContext = createContext<AppContextEntity>({
    userData: {} as UserEntity,
    setUserData: () => {},
    logged: false,
    setLogged: () => {},
})

interface AppContextProviderProps {
    children: ReactNode;
}

export const AppContextProvider = ({children}: AppContextProviderProps) => {
    const [userData, setUserData] = useState<UserEntity>({} as UserEntity);
    const [logged, setLogged] = useState<boolean>(false)

    console.log({logged})

    return <AppContext.Provider value={{userData, setUserData, logged, setLogged}}>
        {children}
    </AppContext.Provider>
}