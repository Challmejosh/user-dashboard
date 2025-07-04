import { ArrowDown, ArrowUp, LucideComputer, UserCheck2, Users2Icon } from "lucide-react";
import FirstImg from "../../../../../assets/first.png"
import SecondImg from "../../../../../assets/second.png"
import ThirdImg from "../../../../../assets/third.png"
import ForthImg from "../../../../../assets/forth.png"
import FifthImg from "../../../../../assets/fifth.png"
const CustomerDetails = () => {
    const analytic: Prop[] = [
        {icon: <Users2Icon size={20} color="#00AC4F" />,first: "total customers",second: "5,423",third: "this month",thirdPosition: "up"},
        {icon: <UserCheck2 size={20} color="#00AC4F" />,first: "members",second: "1,893",third: "this month",thirdPosition: "down"},
        {icon: <LucideComputer size={20} color="#00AC4F" /> ,first: "active now",second: "189",third: <MiniImage />,},
    ]
    return ( 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 shadow-lg items-center justify-center w-full bg-white rounded-[30px] p-8 ">
            {analytic?.map((item,index:number)=>(
                <div key={index} className={`${index===1 && "lg:border-x lg:border-x-[#ACACAC] " } p-2 border-b border-b-[#ACACAC] md:border-b-[0px] `}>
                    <DetailFormat
                    icon={item.icon}
                    first={item.first}
                    second={item.second}
                    third={item.third}
                    thirdPosition={item.thirdPosition}
                    />
                </div>
            ))}
        </div>
     );
}
 
export default CustomerDetails;
interface Prop{
    icon:React.ReactNode,
    thirdPosition?: "up"|"down",
    first:string,second:string,
    third:React.ReactNode|string
}
const DetailFormat = ({first,second,third,thirdPosition,icon}:Prop)=>{
    return (
        <div className="flex gap-3 items-center justify-start md:justify-center">
            <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center bg-[#D3FFE7] ">
                {/* <Users2Icon  /> */}
                {icon}
            </div>
            <div className="flex flex-col items-start justify-center ">
                <p className="text-[#ACACAC] text-[14px] capitalize font-[400] ">{first}</p>
                <p className="text-[30px] font-bold ">{second}</p>
                {typeof third==="string"?(
                    <div className="text-[#ACACAC] text-[14px] flex gap-1 items-center justify-center "> 
                        {thirdPosition==="up"? 
                        <p className="text-green-600 flex items-center justify-center "> <ArrowUp color="green" size={12} /> 16% </p>: thirdPosition==="down" ? <p className="text-red-600 flex items-center justify-center " ><ArrowDown color="red" size={12} /> 1% </p>:null } 
                        {third}
                    </div>
                ):(
                    <>{third}</>
                )}
            </div>
        </div>
    )
}


const MiniImage=()=>{
    const imagesArr: string[]=[
        FirstImg,SecondImg,ThirdImg,ForthImg,FifthImg
    ]
    return (
     <div className="flex items-center justify-start  ">
            {imagesArr?.map((item, index: number) => (
                <img
                    src={item}
                    key={index}
                    alt={item.split("png")[0]}
                    className={`h-[26px] w-[26px] rounded-full border-white border-[2px] object-cover object-center ${index !== 0 ? "-ml-2" : ""}`}
                />
            ))}
        </div>
    )
}