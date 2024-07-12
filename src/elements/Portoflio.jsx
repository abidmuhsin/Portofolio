import ProjectCard from "../container/ProjectCard"

const Portfolio =()=> {
    return (
        <div className="h-[90vh] flex flex-row justify-center items-center my-3 mx-8">
            <ProjectCard 
            ImageUrl=""
            TitleProject="TrackMate"
            ProjectDescription="Aplikasi untuk membantu kebutuhan UMKM"
            ButtonOnclick={()=> handleClick('prject 1')}/>
             <ProjectCard 
            ImageUrl=""
            TitleProject=""
            ProjectDescription="Aplikasi untuk membantu kebutuhan UMKM"
            ButtonOnclick={()=> handleClick('prject 1')}/>
        </div>
    )
}

export default Portfolio