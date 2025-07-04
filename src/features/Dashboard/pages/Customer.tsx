import UserLayout from "../components/Layout/UserLayout";
import Index from "../components/Customer/Index";

const Customer = () => {
    return ( 
        <UserLayout children={<Index />} />
     );
}
 
export default Customer;