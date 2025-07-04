import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { AuthContext } from "../CreateContext/AuthContext";
import { auth, faceBookProvider, googleProvider } from "../../../../lib/firebase";
import type { UserType } from "../../Types";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const AuthProvider = ({children}:{children:React.ReactNode}) => {
    const [user, setUser] = useState<UserType|null>(null)
    // Registration function
    const signup = async (email: string,password:string): Promise<UserType|string>=>{
            try{
            const createUser = await createUserWithEmailAndPassword(auth,email,password)
            if(!createUser){
                return "Registration Failed check connection and try again "
            }
            const getUser = createUser.user;
            const record: UserType = {
                uid: getUser?.uid,
                email: String(getUser.email)
            }
            return record
        }catch(error: any){
            return error?.message.split("/")[1]
        }
    }
    // Login function
    const signin = async (email: string,password: string):Promise<UserType|string>=>{
        try {
            const getRecord =  await signInWithEmailAndPassword(auth,email,password)
            if(!getRecord){
                return getRecord
                
            }
            const record: UserType = {
                uid: getRecord.user.uid,
                email: String(getRecord.user.email)
            }
            setUser(record)
            localStorage.setItem("user",JSON.stringify(getRecord))
            return record
        } catch (error: any) {
            return error?.message.split("/")[1]
        }
    }
    // signout
    const signout = async ()=>{
        const out = await signOut(auth)
        if(typeof out==="undefined"){
            toast.success("signed out")
        }else{
            toast.error("failed to sign out")
        }
    }

    // other methods
    const googleAuth = async ():Promise<string>=>{
        try {
            const google = await signInWithPopup(auth, googleProvider)
            if(google){
                localStorage.setItem("user",JSON.stringify(google))
                const record: UserType = {
                    uid: google.user.uid,
                    email: String(google.user.email)
                }
                setUser(record)
             return "success"
            }
            return "success"
        } catch (error: any) {

            return error?.message.split("/")[1]
        }
    }
    const facebookAuth = async ():Promise<string>=>{
        try {
            const fb = await signInWithPopup(auth, faceBookProvider)
            if(fb){
                localStorage.setItem("user",JSON.stringify(fb))
             return "success"
            }
            return "success"
        } catch (error: any) {

            return error?.message.split("/")[1]
        }
    }

    useEffect(()=>{
        const user = localStorage.getItem("user")
        if(user){
            setUser(JSON.parse(user))
        }
    },[])
    return ( 
        <AuthContext.Provider value={{signin,signout,signup,googleAuth,facebookAuth,user}}>
            {children}
        </AuthContext.Provider>
     );
}
 
export default AuthProvider;