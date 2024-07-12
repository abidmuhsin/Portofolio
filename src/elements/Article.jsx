import EducationCard from '../container/EducationCard'
import smk2 from '../assets/smk22.png'
import untad from '../assets/untad.jpeg'
import bangkit from '../assets/bangkit2.jpg'

const Article = () => {
    return (
        <div>
            <div className=" w-full min-h-[110vh] bg-slate-200 flex flex-col">
                <h1 className="font-sans font-bold text-3xl p-16 ml-20">Education & Experience</h1>
                <div className='flex flex-wrap items-center justify-center '>
                    <EducationCard 
                        imageUrl={smk2}
                        schoolName="Vocational Highschool 2 Palu" 
                        year="2018 - 2021 (Multimedia)" 
                        skills="Relevant Skills: Graphic Design, Video Editing, 3D/2D Animation "
                        onViewClick={() => handleViewClick('SMK 2 Palu')}
                    />
                    <EducationCard
                        imageUrl={untad} 
                        schoolName="Tadulako University" 
                        year="2021 - Present (Information System)"
                        skills="Relevant Skills: Digital Marketing, Database, Data Analyst, Web Programming " 
                        onViewClick={() => handleViewClick('Tadulako University')}
                    />
                    <EducationCard
                        imageUrl={bangkit}
                        schoolName="Bangkit Academy"
                        year="14 Agustus 2023 - 31 Desember 2023"
                        skills="Relevant Skills: Cloud Computing, Front-End Web Dev, Back-End Web Dev"
                        onViewClick={()=> handleViewClick()}/>
                </div>
                
            </div>
        </div>
    )
}
export default Article;