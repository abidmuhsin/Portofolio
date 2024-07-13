const ProjectCard = ({ ImageUrl, TitleProject, ProjectDescription, ButtonOnclick }) => {
    return (
        <div className="max-w-xl m-4 p-4 flex flex-col justify-center items-start shadow-2xl rounded bg-slate-800">
            <img src={ImageUrl} alt="Project" className="max-w-md h-[30vh] bg-white"/>
            <h2 className="text-xl font-bold">{TitleProject}</h2>
            <p className="text-sm">{ProjectDescription}</p>
            <button onClick={ButtonOnclick} className="bg-blue-700 text-white font-bold px-5 py-2 my-3">View</button>
        </div>
    )
}

export default ProjectCard