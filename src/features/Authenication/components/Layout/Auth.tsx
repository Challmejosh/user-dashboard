import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginIcon from "../ui/loginIcon";
import Form from "../Form";
import { AuthContext } from "../../Context/CreateContext/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../../lib/firebase";
import { toast } from "react-toastify";
import { X } from "lucide-react";
import AppleSvg from "../../../../assets/apple.svg"
import fbSvg from "../../../../assets/facebook-2-logo-svgrepo-com.svg"
import googleSvg from "../../../../assets/google-color-svgrepo-com.svg"
const Auth = () => {
  const [active, setActive] = useState<"register" | "login">("register");
  const [step, setStep] = useState<number>(1);
  const [error, setError] = useState<string>("");
  const [loading,setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const { signup,signin, googleAuth,facebookAuth } = useContext(AuthContext);
    // email and password authentication
    const handleAuth = async (
        e: React.FormEvent<HTMLFormElement>,
        email: string,
        password: string,
        fullName: string,
        phone: string,
        birth: string,
        address: string
    ) => {
        e.preventDefault();
        console.log(birth)
        // validating inputs
        if (!email.trim() || !email.includes("@")) {
        if (!email.includes("@")) {
            setError('incorrect format "@" must be included  ');
        }
        if (!email.trim()) {
            setError("email must not be empty");
        }
        return;
        }
        if (!password.trim() || password.length < 8) {
        setError("password must be at least 8 characters");
        return;
        }
        setError("");
        // register
        if (active === "register") {
            if (step === 1) {
                setLoading(true)
                setTimeout(()=>{
                    setLoading(false)
                    setStep(2);
                },500)
                return;
            }
            if (step === 2) {
                if (!fullName.trim() || !phone.trim()) {
                    setError("make sure all are field fill in");
                    return;
                }
                setLoading(true)
                setTimeout(()=>{
                    setLoading(false)
                    setStep(3);
                },500)
                return;
            }
            if (step === 3) {
                if (!address.trim() || address.length < 8) {
                    setError(
                        "address not be empty and should be greater than 8 letters "
                    );
                    return;
                }
                setError("");
                setLoading(true)
                const res = await signup(email, password);
                setLoading(false)
                if (typeof res === "string") {
                    toast.error(res);
                    return;
                } else {
                    setStep(4);
                }
            }
        if (step === 4) {
            setLoading(false)
            await setStep(1)
            setLoading(true)
            setActive("login");
            return;
        }
        }
        // login 
        if (active === "login") {
            setLoading(true)
            const res = await signin(email,password)
            setLoading(false)
            if(typeof res==="string"){
                toast.error(res)
                return
            }
            toast.success("Login successful")
            navigate(`/customer`)
        }
    };
    // google authentication
    const handleGoogle = async ()=>{
        setLoading(true)
        const res = await googleAuth()
        setLoading(false)
        if(res==="success"){
            toast.success(res)
            navigate(`/customer`)
        }else{
            toast.error(res)
        }
    }
    // facebook authentication
    const handleFacebook = async ()=>{
        setLoading(true)
        const res = await facebookAuth()
        setLoading(false)
        if(res==="success"){
            toast.success(res)
            navigate(`/customer`)
        }else{
            toast.error(res)
        }
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate("/customer")
            } 
        });
    },[navigate])
  return (
    <div className="w-full bg-[#fbfbfb] flex items-center justify-center py-8 max-h-dvh min-h-dvh h-dvh ">
      <div
        className={` ${
          step === 4 && " p-0 overflow-hidden justify-start relative "
        } ${
          step !== 4 && "px-[24px] py-[16px]"
        } w-[502px] h-full sm:rounded-[24px] bg-white flex flex-col gap-6 items-center ${
          step !== 1 && step !== 4 && "justify-between "
        } ${active === "register" ? "justify-between" : "justify-start"}  `}
      >
        {/* nav */}
        <div
          className={` w-full flex items-center ${
            step !== 4 && " justify-between"
          } ${step === 4 && "justify-end absolute p-3 "}  `}
        >
          {step === 1 && (
            <div className=" flex gap-2 items-center justify-start ">
              <h2
                onClick={() => setActive("register")}
                className={`${
                  active === "register" &&
                  "text-[#1A0710D9] border-b-[2px] border-b-[#EF498F] text-lg "
                } cursor-pointer capitalize p-3 transform transition-all  `}
              >
                register
              </h2>
              <h2
                onClick={() => setActive("login")}
                className={`${
                  active === "login" &&
                  "text-[#1A0710D9] border-b-[2px] border-b-[#EF498F] text-l"
                } cursor-pointer capitalize p-3 transform transition-all  `}
              >
                Log In
              </h2>
            </div>
          )}
          {step !== 1 && step !== 4 && (
            <div className="flex items-center justify-center gap-6 ">
              <p className="capitalize font-bold text-lg ">
                {step === 2
                  ? "personal information"
                  : step === 3
                  ? "Add address"
                  : null}
              </p>
              <p className="text-[#6BC62D] font-bold ">{step} of 4</p>
            </div>
          )}
          <X
            onClick={() => {
              if (step !== 1) {
                setStep((prev) => prev - 1);
              }
            }}
          />
        </div>
        {/* socials auth */}
        {step === 1 && (
          <div className="w-full flex items-center justify-start gap-2 ">
            <LoginIcon children={<img src={AppleSvg} alt="apple" className="object-contain w-[18px] h-[18px]" />} />
            <LoginIcon click={handleFacebook} children={<img src={fbSvg} alt="facebook" className="object-contain w-[18px] h-[18px]" />
} />
            <LoginIcon click={handleGoogle} children={<img src={googleSvg} alt="google" className="object-contain w-[18px] h-[18px] "  />} />
          </div>
        )}

        {/* form */}
        <Form loading={loading} error={error} step={step} active={active} onSubmit={handleAuth} />
        {step === 1 && (
          <>
            {active === "register" && (
              <div className="flex text-xs sm:text-sm flex-col items-center justify-center text-center ">
                <div className="">
                  <span className="">By continuing i agree with</span>
                  <span>
                    {" "}
                    <Link
                      to="/"
                      className="capitalize underline text-[#4a9bff] "
                    >
                      terms & consitions
                    </Link>{" "}
                  </span>
                </div>
                <span>
                  {" "}
                  <Link to="/" className="capitalize underline text-[#4a9bff] ">
                    terms & consitions
                  </Link>{" "}
                </span>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Auth;
