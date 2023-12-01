import { createContext, useContext } from "react";

const AppContext = createContext()

const text = "Hi mom!!";
const AppProvider = ({children})=>{
    return (
        <AppContext.Provider value={text}>
            {children}
        </AppContext.Provider>
    )
    
}




const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext}