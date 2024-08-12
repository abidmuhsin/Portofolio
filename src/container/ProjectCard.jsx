const ProjectCard = ({ ImageUrl, TitleProject, ProjectDescription, ButtonOnclick }) => {
    return (
        <div className="max-w-80 max-h-80  m-4 p-4 flex flex-col justify-center items-start shadow-2xl rounded bg-slate-800 text-white gap-1">
            <img src={ImageUrl} alt="Project" className="h-[40vh] bg-white object-cover"/>
            <h2 className="text-xl font-bold w-full h-10">{TitleProject}</h2>
            <p className="text-xs text-yellow-500 text-justify w-full h-[8vh] ">{ProjectDescription}</p>
            <button onClick={ButtonOnclick} className="bg-yellow-800 text-white font-bold px-5 py-2 my-3 hover:bg-yellow-900">View</button>
        </div>
    )
}

export default ProjectCard