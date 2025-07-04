import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Customer from "../features/Dashboard/pages/Customer";
import NotFound from "../pages/NotFound";
import Dashboard from "../features/Dashboard/pages/Dashboard";
import Help from "../features/Dashboard/pages/Help";
import Income from "../features/Dashboard/pages/Income";
import Product from "../features/Dashboard/pages/Product";
import Promote from "../features/Dashboard/pages/Promote";

const Router = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path={`/customer`} element={<Customer/>} />
            <Route path={`/dashboard`} element={<Dashboard/>} />
            <Route path={`/help`} element={<Help/>} />
            <Route path={`/income`} element={<Income/>} />
            <Route path={`/product`} element={<Product />} />
            <Route path={`/promote`} element={<Promote />} />
        </Routes>
     );
}
 
export default Router;