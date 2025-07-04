import { useEffect, useState } from "react";

const TopNav = ({children}:{children:React.ReactNode}) => {
    const [name,setName] = useState("")
    useEffect(()=>{
        const getUser = localStorage.getItem("user")
        if(getUser){
            const record = JSON.parse(getUser).user.email
            const split = record.split("@")[0]
            setName(split)
        }
    },[])
    return ( 
        <div className="w-full flex gap-6 flex-wrap justify-start items-center sm:justify-between ">
            <p className="capitalize font-semibold text-[22px] ">hello {name} 👋🏼,</p>
            {children}
        </div>
     );
}
 
export default TopNav;