const EducationCard = ({ schoolName, year, onViewClick, imageUrl, skills } ) => {
    return (
        <div className="max-w-md min-h-[40vh] rounded overflow-hidden shadow-lg m-4 p-4 bg-white flex flex-col justify-between">
            <div className="flex gap-3">
                <div>
                    <img className="max-w-24 min-h-24 object-cover" src={imageUrl} alt={`${schoolName} image`} />
                </div>
                <div>
                    <div className="font-bold text-xl mb-2">{schoolName}</div>
                    <p className="text-gray-700 text-base mb-4">{year}</p>
                    <h3 className="text-blue-700 text-sm">{skills}</h3>
                </div>
            </div>
            <button 
                onClick={onViewClick} 
                className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
            >
                View
            </button>
        </div>
    );
};

export default EducationCard;