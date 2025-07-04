import { useEffect, useState } from "react";
import { SideBarContext } from "../../Context/SideBarContext";
import SideBar from "../SideBar";
import MobileSideBar from "../MobileSideBar";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../../lib/firebase";
import { toast } from "react-toastify";

const UserLayout = ({children}:{children: React.ReactNode}) => {
    const [open,setOpen] = useState<boolean>(false)
    const navigate = useNavigate()
    const toggleOpen = ()=>{
        setOpen(prev=>!prev)
    }
    const signout = async ()=>{
        const out = await signOut(auth)
        if(typeof out==="undefined"){
            toast.success("signed out")
            localStorage.removeItem("user")
        }else{
            toast.error("failed to sign out")
        }
    }
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(!user){
                navigate('/')
            }
        })
    },[navigate])
    return ( 
        <SideBarContext.Provider value={{open,toggleOpen}} >
            <div className=" bg-[#fafbff] h-dvh w-full flex items-start justify-start gap-8 ">
                <SideBar />
                <MobileSideBar />
                <div className="w-full min-h-dvh h-dvh overflow-y-scroll p-3 sm:p-8 ">
                    <div className="flex w-full items-center justify-end ">
                        <p onClick={signout} className="cursor-pointer py-2 ">Sign Out</p>
                    </div>
                    {children}
                </div>
            </div>
        </SideBarContext.Provider>
     );
}
 
export default UserLayout;