import { Search } from "lucide-react";
import { useState } from "react";
import CustomerTable from "./CustomerTable";
export interface CustomerType{
    name: string
    company: string
    phone: string
    email: string
    country: string
    status: "active"|"inactive"
}
const AllCustomer = () => {
    const [search,setSearch] = useState<string>("")
    const allCustomer:CustomerType[] = [
        {name: "jane cooper",company: "microsoft",phone:"(225) 555-0118",email:"jane@microsoft.com",country:"United States",status:"active"},
        {name: "Floyd Miles",company: "Yahoo",phone:"(205) 555-0100",email:"floyd@yahoo.com",country:"Kiribati",status:"inactive"},
        {name: "Ronald Richards",company: "Adobe",phone:"(302) 555-0107",email:"ronald@adobe.com",country:"Israel",status:"inactive"},
        {name: "Marvin McKinney",company: "Tesla",phone:"(252) 555-0126",email:"marvin@tesla.com",country:"Iran",status:"active"},
        {name: "Jerome Bell",company: "Google",phone:"(629) 555-0129",email:"jerome@google.com",country:"Réunion",status:"active"},
        {name: "Kathryn Murphy",company: "Microsoft",phone:"(406) 555-0120",email:"kathryn@microsoft.com",country:"Curaçao",status:"active"},
        {name: "Jacob Jones",company: "Yahoo",phone:"(208) 555-0112",email:"jacob@yahoo.com",country:"Brazil",status:"active"},
        {name: "Kristin Watson",company: "Facebook",phone:"(704) 555-0127",email:"kristin@facebook.com",country:"Åland Islands",status:"inactive"},
    ]
    return ( 
        <div className="w-full h-full bg-white rounded-[30px] shadow-lg flex flex-col gap-6  items-center justify-between  ">
            {/* title and sort */}
            <div className="w-full p-[16px] sm:p-[26px] flex flex-wrap gap-3 items-center justify-between ">
                <div className="flex flex-col items-start justify-center">
                    <p className="capitalize text-[18px] sm:text-[20px] font-bold  ">all customers</p>
                    <p className="capitalize text-[#16C098] text-[12px] ">active members</p>
                </div>
                <div className="flex flex-wrap sm:flex-nowrap items-center justify-start sm:justify-end gap-3 ">
                    <div className="w-[216px] h-full bg-[#F9FBFF] rounded-xs p-1 flex items-center justify-start gap-2 ">
                        <Search color="#B5B7C0" />
                        <input placeholder="search" value={search} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setSearch(e.target.value)} type="text" className="flex w-full items-center justify-start placeholder:text-[#B5B7C0] placeholder:text-[14px] placeholder:capitalize focus:outline-none " />
                    </div>
                    <div className="w-[154px] h-full bg-[#F9FBFF] rounded-xs p-1 flex items-center justify-center gap-2 ">
                        <label htmlFor="sort" className="capitalize  ">sort by:</label>
                        <select className="cursor-not-allowed capitalize font-semibold flex items-center justify-center text-center " name="" id="" title="sort" disabled={true}>
                            <option className="" value="">newest</option>
                        </select>
                    </div>
                </div>
            </div>
            <CustomerTable 
            data={allCustomer}
            />
            <div className="w-full flex flex-wrap p-5 text-sm text-center gap-2 items-center justify-center md:justify-between ">
                <p className="">Showing data 1 to 8 of  256K entries</p>
                <div className="flex items-center justify-center gap-2  ">
                    <PagninationBtn text="<" />
                    <PagninationBtn text="1" act={true} />
                    <PagninationBtn text="2" />
                    <PagninationBtn text="3" />
                    <PagninationBtn text="4" />
                    <p className="">...</p>
                    <PagninationBtn text="40" />
                    <PagninationBtn text=">" />
                </div>
            </div>
        </div>
     );
}
 
export default AllCustomer;

const PagninationBtn = ({text,act}:{text:string,act?:boolean})=>{
    return <div className={` ${act?"bg-[#5932EA] text-white ":"bg-[#F5F5F5]"} w-[25px] h-[24px] text-sm font-medium cursor-pointer flex items-center justify-center rounded-[4px]  border border-[#EEEEEE] `}>{text}</div>
}