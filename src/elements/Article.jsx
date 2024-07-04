import smk2 from '../assets/smk2.png'
import untad from '../assets/untad.jpeg'
import bangkit from '../assets/bangkit.jpg'
import EducationCard from '../container/EducationCard'

const Article = () => {
    return (
        <div>
            <div className=" w-full h-[90vh] bg-slate-300 flex justify-center items-center flex-col">
                <h1 className=" font-serif text-3xl">Education</h1>
                <div><EducationCard ImageUrl="" title="Vocational Highschool 2 Palu" /></div>
            </div>
        </div>
    )
}
export default Article;