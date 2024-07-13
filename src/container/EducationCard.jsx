const EducationCard = ({ schoolName, year, onViewClick, imageUrl, skills } ) => {
    return (
        <div className="max-w-md min-h-[30vh] rounded overflow-hidden shadow-lg m-4 p-4 bg-slate-800 flex flex-col justify-between">
            <div className="flex gap-3 text-white">
                <div>
                    <img className="max-w-24 min-h-24 object-cover" src={imageUrl} alt={`${schoolName} image`} />
                </div>
                <div>
                    <div className="font-bold text-xl mb-2">{schoolName}</div>
                    <p className="text-base mb-4">{year}</p>
                    <h3 className="text-yellow-500 text-sm font-semibold">{skills}</h3>
                </div>
            </div>
        </div>
    );
};

export default EducationCard;