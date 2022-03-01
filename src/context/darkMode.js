import { createContext, useContext } from "react";

const DarkModeContext = createContext(null);

export {DarkModeContext};
export const useDarkMode = ()=>{
    return useContext(DarkModeContext);
};