import { createContext } from "react";
interface SideContextType{
    open: boolean
    toggleOpen: ()=>void
}
const initialValue = {
    open: false,
    toggleOpen: ()=>null
}
export const SideBarContext = createContext<SideContextType>(initialValue) 



