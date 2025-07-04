import { useState } from "react";
import TopNav from "../TopNav";
import SearchInput from "./components/Search";
import CustomerDetails from "./components/CustomerDetails";
import AllCustomer from "./components/AllCustomer";
import ToggleSideBar from "../ToggleSideBar";

const Index = () => {
    const [search,setSearch] = useState<string>("")
    return (
        <div className="w-full flex flex-col gap-8 ">
            <ToggleSideBar />
            <TopNav children={<SearchInput value={search} setValue={setSearch} />} />
            <CustomerDetails />
            <AllCustomer />
        </div>
    );
}
 
export default Index;