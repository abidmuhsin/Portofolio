// import ProjectCard from "../container/ProjectCard"
// import PopUp from '../container/PopUp.jsx'
// import { useState } from "react";
// import todo from '../assets/todo1.png'
// import todo2 from '../assets/todo2.png'
// import todo3 from '../assets/todo3.png'
// import todo1 from '../assets/todo1.png'
// import trackmate1 from '../assets/trackmate1.png'

// const Portfolio =()=> {
//     const [buttonPopup, setButtonPopup] = useState (false);

//     const images = [
//         todo1,todo2,todo3
//     ];

//     return (
//         <div className="h-[100vh] bg-slate-900">
//             <div className="flex justify-center flex-col items-start p-16 ml-20 text-white text-3xl font-bold">
//                 <h1 className="text-lg text-yellow-500">Portofolio</h1>
//                 <h3>My Project</h3>
//             </div>
//             <div className="flex flex-row justify-center items-center my-3 mx-8">
//                 <ProjectCard 
//                 ImageUrl={trackmate1}
//                 TitleProject="TrackMate"
//                 ProjectDescription="Aplikasi untuk membantu kebutuhan UMKM"
//                 ButtonOnclick={()=> setButtonPopup(true)}/>
//                 <ProjectCard 
//                 ImageUrl={todo}
//                 TitleProject="Simple Todolist-App"
//                 ProjectDescription="Projek ini merupakan projek individu. Aplikasi ini untuk membuat daftar kegiatan yang harus dilakukan"
//                 ButtonOnclick={()=> setButtonPopup(true)}/>
//                 <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}
//                     images={images}
//                     nameProject="Abid Muhsin"
//                     />
//             </div>
            
//         </div>
//     )
// }

// export default Portfolio

import ProjectCard from "../container/ProjectCard";
import PopUp from '../container/PopUp.jsx';
import { useState } from "react";
import todo from '../assets/todo1.png';
import todo2 from '../assets/todo2.png';
import todo3 from '../assets/todo3.png';
import todo1 from '../assets/todo1.png';
import trackmate1 from '../assets/trackmate1.png';
import trackmate2 from '../assets/trackmate2.png'
import trackmate3 from '../assets/trackmate3.png'
import trackmate4 from '../assets/trackmate4.png'
import puskes1 from '../assets/puskes1.png'
import puskes2 from '../assets/puskes2.png'
import puskes3 from '../assets/puskes3.png'
import puskes4 from '../assets/puskes4.png'


const Portfolio = () => {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            name: "TrackMate",
            description: "Aplikasi untuk membantu kebutuhan UMKM dan bertujuan untuk menyelesaikan masalah yang dimiliki oleh Amati Indonesia. Saya masuk dalam tim Cloud Computing",
            images: [trackmate1, trackmate2, trackmate3, trackmate4],
            build: "ReactJS, TailwindCSS, HapiJS, NodeJS",
            link: "https://github.com/C23-GT01, https://web-app-five-beta.vercel.app/ ",
            devDays: 70,
        },
        {
            name: "Simple Todolist-App",
            description: "Projek ini merupakan projek individu. Aplikasi ini untuk membuat To Do List kita sehari-hari",
            images: [todo1, todo2, todo3],
            build: "ReactJS, TailwindCSS",
            link: "https://github.com/abidmuhsin/todo-list, https://todo-list-blush-iota-76.vercel.app/ ",
            devDays: 2,
        },
        {
            name: "Website Puskesmas Wuasa",
            description: "Projek ini merupakan proker saya selama KKN di Desa Wuasa yaitu membuatkan Website Profile dari Puskesmas Wuasa. Saya mengerjakan semua pembangunan dari website nya sendirian",
            images: [puskes1, puskes2, puskes3, puskes4],
            build: "ReactJS, TailwindCSS",
            link: "https://github.com/abidmuhsin/puskesmas-wuasa, http://puskesmas-wuasa.site/ ",
            devDays: 30,
        },
    ];

    const handleCardClick = (project) => {
        setSelectedProject(project);
        setButtonPopup(true);
    };

    return (
        <div className="h-[120vh] bg-slate-900">
            <div className="flex justify-center flex-col items-start p-16 ml-20 text-white text-3xl font-bold">
                <h1 className="text-lg text-yellow-500">Portofolio</h1>
                <h3>My Project</h3>
            </div>
            <div className="flex flex-row justify-center items-center my-3 mx-8">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        ImageUrl={project.images[0]}
                        TitleProject={project.name}
                        ProjectDescription={project.description}
                        ButtonOnclick={() => handleCardClick(project)}
                    />
                ))}
                {selectedProject && (
                    <PopUp 
                    trigger={buttonPopup} 
                    setTrigger={setButtonPopup}
                    images={selectedProject.images}
                    nameProject={selectedProject.name}
                    build={selectedProject.build}
                    link={selectedProject.link}
                    devDays={selectedProject.devDays}
                    />
                )}
            </div>
        </div>
    );
}

export default Portfolio;
