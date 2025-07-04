import Auth from "../components/Layout/Auth";
import AuthProvider from "../Context/Provider/AuthProvider";

const AuthPage = () => {
    return ( 
        <AuthProvider>
            <Auth />
        </AuthProvider>
     );
}
 
export default AuthPage;