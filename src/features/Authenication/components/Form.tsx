import { Check, Eye, EyeOff } from "lucide-react";
import { useCallback, useState } from "react";
import StepTwo from "./stepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import { toast } from "react-toastify";
interface Prop{
    active: "register"|"login"
    error:boolean
    step: number
    changeError: (value: boolean)=>void
    loading: boolean
    onSubmit: (e: React.FormEvent<HTMLFormElement>,email:string,password:string, fullName:string,phone:string,birth:string,address:string)=>void
}
const Form = ({active,step,onSubmit,error,loading,changeError}:Prop) => {
    const [email,setEmail] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const [showPassword, setShowPassword] = useState(false);
    const [fullName,setFullName] = useState<string>("")
    const [phone,setPhone] = useState<string>("")
    const [select,setSelect] = useState<string>("")
    const [birth,setBirth] = useState<string>("")
    const [address,setAddress] = useState<string>("")
    const [gender,setGender] = useState<"male"|"female"|null>(null)
    const handleChange = useCallback((key:"select"|"address"|"phone"|"fullName"|"birth"|"gender",e?:React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLSelectElement>,addressInput?:string,)=>{
        if(key==="birth"&&e){
            setBirth(e?.target.value)
        }else if (key==="select"&&e){
            setSelect(e.target.value)
        }else if (key==="fullName"&&e){
            setFullName(e.target.value)
        }else if(key==="phone"&&e){
            setPhone(e.target.value)
        }else if(key==="gender"&&e){
            setGender(e.target.value as "male"|"female" )
        }else if(key==="address"){
            if(!addressInput&&e){
                setAddress(e.target.value)
            }
            if(addressInput){
                setAddress(addressInput)
            }
        }else{
            toast.error("try again")
        }
    },[setBirth, setSelect, setFullName, setPhone, setAddress])
    return ( 
        <form 
        onSubmit={(e: React.FormEvent<HTMLFormElement>)=>
            onSubmit(
                e,
                email,
                password,
                fullName,(select+phone),birth,address
            )
        } 
        className={`w-full flex flex-col gap-6 items-start ${step!==1&&"justify-between h-full "}  ${active==="register"? "justify-between" : "  justify-between" } `}
        >

           {/* step 1 */}
            {step === 1 &&<>
                {active==="register"?<p className="text-sm text-[#1A071066] ">or register with email</p>
                :<p className="text-sm text-[#1A071066] ">or login with email</p>}
                <div className="w-full flex flex-col gap-4 items-start justify-center ">
                    <div className="w-full duration-300 transition-all transform">
                        <div className="w-full border border-[#DDDDDD] py-1 px-4 rounded-2xl flex items-center justify-between ">
                            <div className="w-full flex flex-col items-start justify-center ">
                                <label htmlFor="email" className="text-[#1A0710A6] font-medium" >Email address</label>
                                <input value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)} id="email" name="email" type="text" className="w-full bg-transparent flex items-center justify-start focus:outline-none  " />
                            </div>
                            {email.trim() && email.includes("@") && <Check color="#6BC62D" /> }
                        </div>
                        {error&&(!email.trim())&&<p className="text-red-600 duration-300 transition-all transform text-sm ">Email must not be empty</p>}
                        {error&&(email.length>1 && !email.includes("@")  )&&<p className="text-red-600 duration-300 transition-all transform text-sm ">Email must include "@"</p>}
                    </div>
                    <div className="w-full duration-300 transition-all transform flex flex-col items-start justify-start ">
                        <div className="w-full border border-[#DDDDDD] py-1 px-4 rounded-2xl flex items-center justify-between ">
                            <div className="w-full flex flex-col items-start justify-center ">
                                <label htmlFor="password" className="text-[#1A0710A6] font-medium" >Password</label>
                                <input value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)} id="password" name="password" type={showPassword?"text":"password"} className="w-full bg-transparent flex items-center justify-start focus:outline-none  " />
                            </div>
                            {password.length >= 8 && <Check className="mx-1" color="#6BC62D" /> }
                            {showPassword ? <Eye onClick={()=>setShowPassword(prev=>!prev)}className="cursor-pointer" /> 
                            : <EyeOff onClick={()=>setShowPassword(prev=>!prev)}className="cursor-pointer" /> }
                        </div>
                        {error && (password.length < 8 && password.trim() ) &&<p className="text-[#1A0710A6] duration-300 transition-all transform text-sm ">8+ character</p>}
                        {error && (!password.trim()) &&<p className="text-red-600 duration-300 transition-all transform text-sm ">Fill out password </p>}
                    </div>
                </div>
            </>}
            {/* step 2 */}
            {step===2&&
                (<StepTwo
                fullName={fullName}
                phone={phone}
                select={select}
                birth={birth}
                error={error}
                gender={gender}
                onChange={handleChange}
                />)
            }
            {/* step 3 */}
            {step===3&&(
                <StepThree
                error={error}
                changeError={changeError}
                address={address}
                onChange={handleChange}
                />
            )}
            {/* step 4 */}
            {step===4&&(
                <StepFour />
            )}
            {/* submit button */}
            <div className={` ${step===4&&"p-6"} w-full flex flex-col items-center justify-center gap-2 `}>
                {/* <p className="text-red-600 text-sm ">{error}</p> */}
                <button disabled={loading} type="submit" className="bg-[#5932EA] transform transition-all focus:outline-blue-600 duration-300 w-full px-[36px] py-3 rounded-[12px] flex items-center justify-center text-white cursor-pointer ">
                    {loading?"loading...":<>{step===1?<>{active==="register"?"Create account" : "Login to Dashboard"}</>:step===4?"Go to Login":"Save Information"}</>}
                </button>
                {step===1&&<>
                    {active==="register"&&<div className=" text-sm flex items-center justify-start w-full gap-2 ">
                        <input type="checkbox" name="checkbox" id="check" className="" />
                        <label htmlFor="check">Send me news and promotions</label>
                    </div>}
                    {active==="login"&&<div className=" text-sm flex items-center justify-start w-full gap-2 ">
                        <input type="checkbox" name="checkbox" id="check" className="" />
                        <label htmlFor="check">Remember me</label>
                    </div>}
                </>}
            </div>
        </form>
     );
}
 
export default Form;