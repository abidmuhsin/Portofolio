import { useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai"; 
import ImageSlider from "./ImageSlider.jsx";
import { AiOutlineFullscreenExit } from "react-icons/ai"
import { AiOutlineFullscreen } from 'react-icons/ai'


const PopUp =( props )=> {
    const { nameProject, build, year, devDays, images}= props;
    const [fullscreen, setFullscreen] = useState(false);

    const toggleFullscreen =()=> {
        setFullscreen(!fullscreen);
    }
    
    return ( props.trigger ) ? (
           <div className={`fixed top-0 left-0 w-[100%] h-[100vh] bg-slate-500 bg-opacity-85 flex justify-center items-center ${fullscreen ? 'flex-col' : ''}`}>
                <div className={`relative p-[32px] w-[100%] max-w-[640px] bg-white ${fullscreen ? 'max-h-full overflow auto' : ''}`}>
                    <ImageSlider images={images}/>
                    <h2>Project Name: {nameProject}</h2>
                    <h2>Build With: {build}</h2>
                    <h2>Year: {year}</h2>
                    <h2>Development Days: {devDays}</h2>
                    <button className="absolute top-[16px] right-[16px]" onClick={()=> props.setTrigger(false)}><AiFillCloseSquare className="text-2xl"/></button>
                    <button className="absolute top-8 left-8" onClick={toggleFullscreen}>
                    {fullscreen ? (
                        <AiOutlineFullscreenExit className="text-3xl text-gray-600 hover:text-gray-900" />
                    ) : (
                        <AiOutlineFullscreen className="text-3xl text-gray-600 hover:text-gray-900" />
                    )}
                </button>
                    { props.children }
                </div>
           </div>
    ) : "";
}

export default PopUp;