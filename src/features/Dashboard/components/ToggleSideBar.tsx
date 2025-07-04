import { Menu } from "lucide-react";
import { useContext } from "react";
import { SideBarContext } from "../Context/SideBarContext";

const ToggleSideBar = () => {
    const {toggleOpen} = useContext(SideBarContext)
    return ( 
        <>
        <Menu onClick={toggleOpen} className="cursor-pointer block lg:hidden" />
        </>
     );
}
 
export default ToggleSideBar;