import { Clock, DollarSign, MapPin, Search, Users2 } from "lucide-react"
import { useEffect, useState } from "react"

interface Prop{
    address: string
    onChange: (key:"select"|"address"|"phone"|"fullName"|"birth",e?:React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLSelectElement>,addressInput?:string)=>void
}
const StepThree = ({address,onChange}:Prop) => {
    const [active,setActive] = useState<"one"|"two">("one")
    const [street,setStreet] = useState<string>("")
    const [apartment,setApartment] = useState<string>("")
    const [city,setCity] = useState<string>("")
    const [state,setState] = useState<string>("")
    const [zipcode,setZipcode] = useState<string>("")
    const handleActive = (text:"one"|"two")=>{
        setActive(text)
    }
    const getLocation= ()=>{
        navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        onChange("address",undefined,"address")
    })
}
    useEffect(()=>{
        const addressInput = (street + apartment + city + state + zipcode)
        onChange("address",undefined,addressInput)
    },[street,apartment,city,state,zipcode])
    return ( 
        <div className="flex flex-col items-start justify-between w-full h-full ">
            {active==="one"&&<div className="w-full h-full flex flex-col items-start justify-between">
                <div className="w-full flex flex-col gap-8 items-start justify-between ">
                    <div className="w-full  ">
                        <div className="w-full h-[56px] border border-[#DDDDDD] py-1 px-4 rounded-2xl flex items-center justify-start ">
                            <Search color="#1A071066" />
                            <div className="w-full flex flex-col items-start justify-center ">
                                <input value={address} placeholder="Search for address" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>onChange("address",e)} title="address" name="address" type="text" className="w-full bg-transparent py-2 px-3 flex items-center justify-start focus:outline-none  " />
                            </div>
                        </div>
                        <p className="text-[#1A071066] text-sm ">Your address is not visible to other users</p>
                    </div>
                    <div className="w-full flex items-center justify-start gap-2 ">
                        <div onClick={getLocation} className="text-[#5932EA] w-fit px-[12px] flex gap-1 font-semibold items-center justify-start p-2 cursor-pointer rounded-2xl border border-[#EF498F47] ">
                            <MapPin size={16} />
                            <p className="text-xs sm:text-md ">Use current location</p>
                        </div>
                        <div onClick={()=>handleActive("two")} className="text-[#5932EA] w-fit px-[12px] flex gap-1 font-semibold items-center justify-start p-2 cursor-pointer rounded-2xl border border-[#EF498F47] ">
                            <p className="text-xs sm:text-md">Add manually</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 items-start justify-center ">
                    <p className="font-bold text-2xl ">Sharing your address shows:</p>
                    <div className="flex flex-col items-start justify-center gap-2 ">
                        <div className="text-[#1A0710A6] flex gap-1 items-center justify-start ">
                            <Users2 size={16} />
                            <p className="">People near you</p>
                        </div>
                        <div className="text-[#1A0710A6] flex gap-1 items-center justify-start ">
                            <Clock size={16} />
                            <p className="">Estimated delivery time</p>
                        </div>
                        <div className="text-[#1A0710A6] flex gap-1 items-center justify-start ">
                            <DollarSign size={16} />
                            <p className="">Estimate shipping costs</p>
                        </div>
                    </div>
                </div>
            </div>}
            {active==="two"&&(
                <div className="w-full flex flex-col gap-5 items-start justify-center ">
                    {/* street */}
                    <div className="w-full h-[56px] border border-[#DDDDDD] py-1 px-4 rounded-2xl flex items-center justify-between ">
                        <div className="w-full flex flex-col items-start justify-center ">
                            <label htmlFor="street" className="text-[#1A0710A6] text-sm font-medium" >street address</label>
                            <input value={street} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setStreet(e.target.value)} id="street" name="street" type="text" className="w-full bg-transparent flex items-center justify-start focus:outline-none  " />
                        </div>
                    </div>
                    {/* apartment */}
                    <div className="w-full h-[56px] border border-[#DDDDDD] py-1 px-4 rounded-2xl flex items-center justify-between ">
                        <div className="w-full flex flex-col items-start justify-center ">
                            <input value={apartment} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setApartment(e.target.value)} placeholder="Apartment" title="apartment" name="apartment" type="text" className="w-full bg-transparent flex items-center justify-start focus:outline-none  " />
                        </div>
                        <p className="text-sm text-[#1A0710A6] ">optional</p>
                    </div>
                    {/* city */}
                    <div className="w-full h-[56px] border border-[#DDDDDD] py-1 px-4 rounded-2xl flex items-center justify-between ">
                        <div className="w-full flex flex-col items-start justify-center ">
                            <label htmlFor="city" className="text-[#1A0710A6] text-sm font-medium" >City</label>
                            <input value={city} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setCity(e.target.value)} id="city" name="city" type="text" className="w-full bg-transparent flex items-center justify-start focus:outline-none  " />
                        </div>
                    </div>
                    {/* state and zipcode */}
                    <div className="w-full flex items-center justify-center gap-3 ">
                        <div className="w-full h-[56px] border border-[#DDDDDD] py-1 px-4 rounded-2xl flex items-center justify-between ">
                            <div className="w-full flex flex-col items-start justify-center ">
                                <label htmlFor="state" className="text-[#1A0710A6] text-sm font-medium" >State</label>
                                <input value={state} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setState(e.target.value)} id="state" name="state" type="text" className="w-full bg-transparent flex items-center justify-start focus:outline-none  " />
                            </div>
                        </div>
                        <div className="w-full h-[56px] border border-[#DDDDDD] py-1 px-4 rounded-2xl flex items-center justify-between ">
                            <div className="w-full flex flex-col items-start justify-center ">
                                <label htmlFor="zipcode" className="text-[#1A0710A6] text-sm font-medium" >Zip code</label>
                                <input value={zipcode} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setZipcode(e.target.value)} id="zipcode" name="zipcode" type="text" className="w-full bg-transparent flex items-center justify-start focus:outline-none  " />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
     );
}
 
export default StepThree; 