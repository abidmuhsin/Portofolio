const EducationCard = ( ImageUrl, title, description) => {
    return (
        <div>
            <div className="card">
                <img src={ImageUrl} alt="" />
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default EducationCard;