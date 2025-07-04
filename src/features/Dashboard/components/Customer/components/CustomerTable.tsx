import type { CustomerType } from "./AllCustomer";

interface Prop{
    data: CustomerType[]
}
const CustomerTable = ({data}:Prop) => {
    return ( 
        <div className="w-full h-full overflow-x-scroll lg:overflow-x-hidden ">
            <table className="border-collapse w-full">
                <thead className="">
                    <tr className="">
                        <th className="text-left capitalize p-4 text-[#B5B7C0] border-b border-[#B5B7C0] ">customer name</th>
                        <th className="text-left capitalize p-4 text-[#B5B7C0] border-b border-[#B5B7C0] ">company</th>
                        <th className="text-left capitalize p-4 text-[#B5B7C0] border-b border-[#B5B7C0] ">phone number</th>
                        <th className="text-left capitalize p-4 text-[#B5B7C0] border-b border-[#B5B7C0] ">email</th>
                        <th className="text-left capitalize p-4 text-[#B5B7C0] border-b border-[#B5B7C0] ">country</th>
                        <th className="text-left capitalize p-4 text-[#B5B7C0] border-b border-[#B5B7C0] ">status</th>
                    </tr>
                </thead>
                {/* <div className="p-2 w-full "> */}
                    <tbody>
                        {data?.map((item,index:number)=>(
                            <tr className="w-full hover:bg-[#B5B7C0] "key={index}>
                                <td className="text-left text-[14px] font-medium border-[#B5B7C0] border-b p-4 capitalize ">{item.name}</td>
                                <td className="text-left text-[14px] font-medium border-[#B5B7C0] border-b p-4 capitalize ">{item.company}</td>
                                <td className="text-left text-[14px] font-medium border-[#B5B7C0] border-b p-4 ">{item.phone}</td>
                                <td className="text-left text-[14px] font-medium border-[#B5B7C0] border-b p-4 ">{item.email}</td>
                                <td className="text-left text-[14px] font-medium border-[#B5B7C0] border-b p-4 capitalize ">{item.country}</td>
                                <td className={`text-left text-[14px] font-medium border-[#B5B7C0] border-b p-4 capitalize  `}>
                                    <p className={` py-[4px] px-[12px] text-center rounded-[4px] border ${item.status==="active"?"border-[#00B087] bg-[#16C09861] text-[#008767] ":" bg-[#FFC5C5] border-[#DF0404]  text-[#DF0404] "}`}>
                                    {item.status}
                                    </p>
                                        
                                </td>
                            </tr>
                        ))}
                    </tbody>
                {/* </div> */}
            </table>
        </div>
     );
}
 
export default CustomerTable;