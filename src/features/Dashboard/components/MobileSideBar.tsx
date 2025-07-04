import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  UserSquare2Icon,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import MockProfile from "../../../assets/mock-profile.png";
import { useContext, useEffect, useState } from "react";
import { SideBarContext } from "../Context/SideBarContext";
import {AnimatePresence,motion} from "framer-motion";
import settingImg from "../../../assets/setting 1.png"
import keyImg from "../../../assets/key-square.png"
import blockImg from "../../../assets/3d-square 1.png"
import walletImg from "../../../assets/wallet-money 2.png"
import promoteImg from "../../../assets/discount-shape 1.png"
import helpImg from "../../../assets/message-question 1.png"

const MobileSideBar = () => {
  const [isShow, setIsShow] = useState<boolean>(true);
  const [name,setName] = useState("")
  const toggleShow = () => {
    setIsShow((prev) => !prev)
  };
  const {open,toggleOpen} = useContext(SideBarContext)
      useEffect(()=>{
          const getUser = localStorage.getItem("user")
          if(getUser){
              const record = JSON.parse(getUser).user.email
              const split = record.split("@")[0]
              setName(split)
          }
      },[])
  return (
    <AnimatePresence>
        {open&&
        <motion.div
        initial={{x: -100}}
        animate={{x: 0,transition:{
            duration: 0.5,
        }}}
        exit={{x: -100,transition:{
            duration: 0.5,
        }}}
        className={` ${isShow?"w-[80%] ":"w-[80px] "}w-[80%] z-20 shadow-2xl transition-all duration-500 transform fixed bg-transparent backdrop-blur  min-h-dvh p-4 lg:hidden flex flex-col items-start justify-between `}
        >
            <div title="close sidebar" className="bg-[#5932EA] w-fit text-white cursor-pointer absolute right-[-10px] top-[80px] rounded-full ">
                <X
                onClick={toggleOpen}
                className="cursor-pointer "
                />
            </div>
        {/* toggle button */}
        {!isShow ? (
            <div title="expand" className="bg-[#5932EA] w-fit text-white cursor-pointer absolute right-[-10px] top-[20px] rounded-full ">
                <ChevronRight
                onClick={toggleShow}
                className="cursor-pointer "
                />
            </div>
            ) : (
            <div title="collapse" className="bg-[#5932EA] w-fit text-white cursor-pointer absolute right-[-10px] top-[20px] rounded-full ">
                <ChevronLeft
                onClick={toggleShow}
                className="cursor-pointer "
                />
            </div>
        )}
        {/* side bar */}
        <div className={` transition-all duration-1000 transform w-full flex flex-col gap-3 items-start justify-start `}>
            {/* title */}
            <div className="w-full flex gap-2 py-1 px-4 items-center justify-center ">
            <img src={settingImg} alt="" />
            {isShow && (
                <div
                className={`w-full flex items-center justify-start `}
                >
                <p className="text-[26px] flex items-center justify-start font-bold ">Dashboard</p>
                </div>
            )}
            </div>
            {/* links */}
            <div
            className={`w-full h-full flex flex-col gap-1 items-start justify-center`}
            >
            <Link
                to={"/dashboard"}
                className={`${
                location.pathname === "/dashboard" &&
                " font-medium bg-[#5932EA] text-white "
                } text-[#9197B3] hover:text-white hover:bg-[#5932EA] transition-all transform text-[14px] w-full flex gap-2 items-center justify-start py-3 px-4 rounded-[8px] `}
            >
                <img src={keyImg} alt="" />
                {isShow && <p className="capitalize">dashboard</p>}
            </Link>
            <Link
                to={"/product"}
                className={`${
                location.pathname === "/product" &&
                "font-medium  bg-[#5932EA] text-white "
                }group text-[#9197B3] hover:text-white hover:bg-[#5932EA] transition-all transform text-[14px] w-full flex gap-2 items-center justify-start py-3 px-4 rounded-[8px] `}
            >
                <img src={blockImg} alt="" />
                {isShow && (
                <div className="w-full flex items-center justify-between ">
                    <p className="capitalize">product</p>
                    <ChevronRight />
                </div>
                )}
            </Link>
            <Link
                to={"/customer"}
                className={`${
                location.pathname === "/customer" &&
                "font-medium bg-[#5932EA] text-white "
                } text-[#9197B3] hover:text-white hover:bg-[#5932EA] transition-all transform text-[14px] w-full flex gap-2 items-center justify-start py-3 px-4 rounded-[8px] `}
            >
                {/* <img src={customerImg} alt="" /> */}
                <UserSquare2Icon />
                {isShow && (
                <div className="w-full flex items-center justify-between ">
                    <p className="capitalize">customers</p>
                    <ChevronRight />
                </div>
                )}
            </Link>
            <Link
                to={"/income"}
                className={`${
                location.pathname === "/income" &&
                "font-medium bg-[#5932EA] text-white "
                } text-[#9197B3] hover:text-white hover:bg-[#5932EA] transition-all transform text-[14px] w-full flex gap-2 items-center justify-start py-3 px-4 rounded-[8px] `}
            >
                <img src={walletImg} alt="" />
                {isShow && (
                <div className="w-full flex items-center justify-between ">
                    <p className="capitalize">income</p>
                    <ChevronRight />
                </div>
                )}
            </Link>
            <Link
                to={"/promote"}
                className={`${
                location.pathname === "/promote" &&
                "font-medium bg-[#5932EA] text-white "
                } text-[#9197B3] hover:text-white hover:bg-[#5932EA] transition-all transform text-[14px] w-full flex gap-2 items-center justify-start py-3 px-4 rounded-[8px] `}
            >
                <img src={promoteImg} alt="" />
                {isShow && (
                <div className="w-full flex items-center justify-between ">
                    <p className="capitalize">promote</p>
                    <ChevronRight />
                </div>
                )}
            </Link>
            <Link
                to={"/help"}
                className={`${
                location.pathname === "/help" &&
                "font-medium bg-[#5932EA] text-white "
                } text-[#9197B3] hover:text-white hover:bg-[#5932EA] transition-all transform text-[14px] w-full flex gap-2 items-center justify-start py-3 px-4 rounded-[8px] `}
            >
                <img src={helpImg} alt="" />
                {isShow && (
                <div className="w-full flex items-center justify-between ">
                    <p className="capitalize">help</p>
                    <ChevronRight />
                </div>
                )}
            </Link>
            </div>
        </div>

        {/* premium and profile */}
        <div
            className={`  h-full flex flex-col gap-2 items-start justify-start `}
        >
            {isShow&&<div
            className={` w-full h-[120px] rounded-[20px] flex flex-col gap-2 p-2 items-center justify-center bg-gradient-to-br from-[#EAABF0] to-[#4623E9] `}
            >
            <p className="text-center text-[14px] text-white p-2 font-semibold ">
                Upgrade to PRO to get access all Features!
            </p>
            <p className="capitalize text-[#4925E9] text-center font-bold bg-white px-5 py-2 w-full rounded-full cursor-pointer  ">
                get pro now
            </p>
            </div>}
            <div
            className={` w-full p-2 flex gap-2 items-start justify-start`}
            >
            <img
                src={MockProfile}
                alt=""
                className="w-[42px] h-[42px] rounded-full object-cover  "
            />
            {isShow && (
                <div className="w-full flex items-center justify-between ">
                <div className="">
                    <p className="capitalize text-[14px] font-medium  ">{name}</p>
                    <p className="capitalize text-[12px] text-[#757575] font-medium  ">
                    project manager
                    </p>
                </div>
                <ChevronDown color="#757575" />
                </div>
            )}
            </div>
        </div>
        </motion.div>
        }
    </AnimatePresence>
  );
};

export default MobileSideBar;
