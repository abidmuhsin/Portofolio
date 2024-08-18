// import { useState } from "react";
// import { AiFillCloseSquare } from "react-icons/ai"; 
// import ImageSlider from "./ImageSlider.jsx";
// import { AiOutlineFullscreenExit } from "react-icons/ai"


// const PopUp =( props )=> {
//     const { nameProject, build, link, devDays, images}= props;

    
//     return ( props.trigger ) ? (
//            <div className='fixed top-0 left-0 w-[100%] h-[100vh] bg-slate-500 bg-opacity-85 flex justify-center items-center'>
//                 <div className='relative p-[32px] w-[100%] max-w-[640px] bg-white'>
//                     <ImageSlider images={images}/>
//                     <h2>Project Name: {nameProject}</h2>
//                     <h2>Build With: {build}</h2>
//                     <h2>Link: {link}</h2>
//                     <h2>Development Days: {devDays}</h2>
//                     <button className="absolute top-[16px] right-[16px]" onClick={()=> props.setTrigger(false)}><AiFillCloseSquare className="text-2xl"/></button>
//                 </div>
//            </div>
//     ) : "";
// }

// export default PopUp;

import { useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai"; 
import ImageSlider from "./ImageSlider.jsx";
import { AiOutlineFullscreenExit } from "react-icons/ai"

const PopUp = (props) => {
    const { nameProject, build, link, devDays, images } = props;

    // Jika link terdiri dari beberapa link, kita bisa memisahkannya dan menampilkannya dalam bentuk daftar
    const links = link.split(", ");

    return (props.trigger) ? (
        <div className='fixed top-0 left-0 w-[100%] h-[100vh] bg-slate-500 bg-opacity-85 flex justify-center items-center'>
            <div className='relative p-[32px] w-[100%] max-w-[640px] bg-white'>
                <ImageSlider images={images} />
                <h2>Project Name: {nameProject}</h2>
                <h2>Build With: {build}</h2>
                <h2>Development Days: {devDays}</h2>
                <h2>Links:</h2>
                <ul className="list-disc ml-5">
                    {links.map((singleLink, index) => (
                        <li key={index}>
                            <a href={singleLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                                {singleLink}
                            </a>
                        </li>
                    ))}
                </ul>
                <button className="absolute top-[16px] right-[16px]" onClick={() => props.setTrigger(false)}>
                    <AiFillCloseSquare className="text-2xl" />
                </button>
            </div>
        </div>
    ) : "";
}

export default PopUp;
