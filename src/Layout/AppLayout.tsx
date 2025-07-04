import { ToastContainer } from 'react-toastify';
const AppLayout = ({children}:{children: React.ReactNode}) => {
    return ( 
        <div className="">
            <ToastContainer />
            {children}
        </div>
     );
}
 
export default AppLayout;