import ProjectCard from "../container/ProjectCard"
import PopUp from '../container/PopUp.jsx'
import { useState } from "react";

const Portfolio =()=> {
    const [buttonPopup, setButtonPopup] = useState (false);
    return (
        <div className="h-[100vh] bg-slate-900">
            <div className="flex justify-center flex-col items-start p-16 ml-20 text-white text-3xl font-bold">
                <h1 className="text-lg text-yellow-500">Portofolio</h1>
                <h3>My Project</h3>
            </div>
            <div className="flex flex-row justify-center items-center my-3 mx-8">
                <ProjectCard 
                ImageUrl=""
                TitleProject="TrackMate"
                ProjectDescription="Aplikasi untuk membantu kebutuhan UMKM"
                ButtonOnclick={()=> setButtonPopup(true)('prject 1')}/>
                <ProjectCard 
                ImageUrl=""
                TitleProject="Simple Todo-list App"
                ProjectDescription="Aplikasi untuk membantu kebutuhan UMKM"
                ButtonOnclick={()=> handleClick('prject 1')}/>
                <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}
                    nameProject="Abid Muhsin"
                    />
            </div>
            
        </div>
    )
}

export default Portfolio