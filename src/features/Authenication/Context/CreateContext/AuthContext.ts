import { createContext } from "react";
import type { UserType } from "../../Types";

interface AuthType{
    signup: (email: string, password: string) => Promise<UserType|string>
    signin: (email: string, password: string) => Promise<UserType|string>
    signout: () => void
    googleAuth: ()=>Promise<string>
    facebookAuth: ()=>Promise<string>
}
export const AuthContext = createContext<AuthType>({} as AuthType)