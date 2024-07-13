import ProjectCard from "../container/ProjectCard"
import PopUp from '../container/PopUp.jsx'
import { useState } from "react";

const Portfolio =()=> {
    const [buttonPopup, setButtonPopup] = useState (false);
    return (
        <div className="h-[90vh] flex flex-row justify-center items-center my-3 mx-8">
            <ProjectCard 
            ImageUrl=""
            TitleProject="TrackMate"
            ProjectDescription="Aplikasi untuk membantu kebutuhan UMKM"
            ButtonOnclick={()=> setButtonPopup(true)('prject 1')}/>
             <ProjectCard 
            ImageUrl=""
            TitleProject=""
            ProjectDescription="Aplikasi untuk membantu kebutuhan UMKM"
            ButtonOnclick={()=> handleClick('prject 1')}/>
            <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3>My pop up</h3>
            </PopUp>
        </div>
    )
}

export default Portfolio