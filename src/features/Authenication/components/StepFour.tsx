import successImage from "../../../assets/success.png"
const StepFour = () => {
    return ( 
        <div className="w-full h-full flex flex-col  ">
            <img src={successImage} alt="" className="w-full object-contain h-full" />
            <div className="px-6 flex items-center justify-start w-full ">
                <p className="font-bold text-5xl w-full flex items-center justify-start ">
                    You are successfully registered!
                </p>
            </div>
        </div>
     );
}
 
export default StepFour;