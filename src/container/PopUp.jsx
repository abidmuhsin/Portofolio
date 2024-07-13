import { AiFillCloseSquare } from "react-icons/ai"; 
const PopUp =( props )=> {
    return ( props.trigger ) ? (
           <div className="fixed top-0 left-0 w-[100%] h-[100vh] bg-slate-500 bg-opacity-85 flex justify-center items-center">
                <div className="relative p-[32px] w-[100%] max-w-[640px] bg-white">
                    <img src="https://mercusuar.web.id/file/2022/05/SMKN-2-ba0dab7e.jpeg" alt="" />
                    <button className="absolute top-[16px] right-[16px]" onClick={()=> props.setTrigger(false)}><AiFillCloseSquare className="text-2xl"/></button>
                    { props.children }
                </div>
           </div>
    ) : "";
}

export default PopUp;