import { Search } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
interface Prop{
    value: string
    setValue: Dispatch<SetStateAction<string>>
}
const SearchInput = ({value,setValue}:Prop) => {
    return ( 
        <div className="w-full sm:w-[216px] rounded-xs h-full bg-white p-1 flex items-center justify-start gap-2 ">
            <Search color="#B5B7C0" />
            <input placeholder="search" value={value} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setValue(e.target.value)} type="text" className="flex w-full items-center justify-start placeholder:text-[#B5B7C0] placeholder:text-[14px] placeholder:capitalize focus:outline-none " />
        </div>
     );
}
 
export default SearchInput;