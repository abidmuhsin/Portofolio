import ProjectCard from "../container/ProjectCard"
import PopUp from '../container/PopUp.jsx'
import { useState } from "react";
import todo from '../assets/todo1.png'
import todo2 from '../assets/todo2.png'
import todo3 from '../assets/todo3.png'
import todo1 from '../assets/todo1.png'

const Portfolio =()=> {
    const [buttonPopup, setButtonPopup] = useState (false);

    const images = [
        todo1,todo2,todo3
    ];

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
                ButtonOnclick={()=> setButtonPopup(true)}/>
                <ProjectCard 
                ImageUrl={todo}
                TitleProject="Simple Todolist-App"
                ProjectDescription="Projek ini merupakan projek individu. Aplikasi ini untuk membuat daftar kegiatan yang harus dilakukan"
                ButtonOnclick={()=> setButtonPopup(true)}/>
                <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}
                    images={images}
                    nameProject="Abid Muhsin"
                    />
            </div>
            
        </div>
    )
}

export default Portfolio