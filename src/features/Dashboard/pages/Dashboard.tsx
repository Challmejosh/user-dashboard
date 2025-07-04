import ComingSoon from "../../../pages/ComingSoon";
import UserLayout from "../components/Layout/UserLayout";

const Dashboard = () => {
    return ( <UserLayout children={<ComingSoon />} /> );
}
 
export default Dashboard;