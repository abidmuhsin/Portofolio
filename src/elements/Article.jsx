import EducationCard from '../container/EducationCard'
import smk2 from '../assets/smk2.png'
import untad from '../assets/untad2.png'
import bangkit from '../assets/bangkit2.png'
import { useState } from 'react'

const Article = () => {
    return (
        <div className=" w-full min-h-[110vh] bg-slate-900 flex flex-col">
                <h1 className="font-sans font-bold text-3xl p-16 ml-20 text-white">Education & Experience</h1>
                <div className='flex flex-wrap items-center justify-center '>
                    <EducationCard 
                        imageUrl={smk2}
                        schoolName="Vocational Highschool 2 Palu" 
                        year="2018 - 2021 (Multimedia)" 
                        skills="Relevant Skills: Graphic Design, Video Editing, 3D/2D Animation "
                    />
                    <EducationCard
                        imageUrl={untad} 
                        schoolName="Tadulako University" 
                        year="2021 - Present (Information System)"
                        skills="Relevant Skills: Digital Marketing, Database, Data Analyst, Web Programming " 
                    />
                    <EducationCard
                        imageUrl={bangkit}
                        schoolName="Bangkit Academy"
                        year="14 Agustus 2023 - 31 Desember 2023"
                        skills="Relevant Skills: Cloud Computing, Front-End Web Dev, Back-End Web Dev"
                    />
                </div>
                {/* <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <h3>My pop up</h3>
                </PopUp> */}
            </div>    
    )
}
export default Article;