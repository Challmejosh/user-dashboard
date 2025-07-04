const LoginIcon = ({children,click}:{children:React.ReactNode,click: ()=>void}) => {
    return ( 
        <div onClick={click} className="bg-[#F6F6F6] cursor-pointer h-[48px] w-[48px] rounded-full flex justify-center items-center">
            {children}
        </div>
     );
}
 
export default LoginIcon;