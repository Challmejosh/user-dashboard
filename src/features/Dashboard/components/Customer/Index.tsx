import { useState } from "react";
import TopNav from "../TopNav";
import SearchInput from "./components/Search";
import CustomerDetails from "./components/CustomerDetails";
import AllCustomer from "./components/AllCustomer";

const Index = () => {
    const [search,setSearch] = useState<string>("")
    return (
        <div className="w-full flex flex-col gap-8 ">
            <TopNav children={<SearchInput value={search} setValue={setSearch} />} />
            <CustomerDetails />
            <AllCustomer />
        </div>
    );
}
 
export default Index;