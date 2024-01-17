import { AiOutlineLinkedin } from "react-icons/ai"; 
import { AiFillPhone } from "react-icons/ai"; 
import { AiTwotoneMail } from "react-icons/ai"; 
import { AiOutlineCalendar } from "react-icons/ai"; 
import { AiOutlineInstagram } from "react-icons/ai"; 
import ProfileImage from '../assets/ProfileImage.jpg'

const Article = () => {
    return (
        <div className='flex items-center justify-center bg-slate-300 h-[100vh]'>
            <img src={ProfileImage} alt="profile" className='w-[300px] rounded-full'/>
            <div className='w-[80vh] h-[60vh] flex justify-center flex-wrap ml-9 text-[14px]'>
                <h1 className='text-[7vh] font-bold font-sans mb-5'>Abid Muhsin</h1>
                <p className='mx-4 text-justify mb-4'>Hello, I'am Abid Muhsin. I'am a student at Tadulako University majoring in Information Systems. I'm part of the Bangkit 2023 Cohort, specializing in the exciting field of cloud computing. I'm enthusiastic about delving into web development. I sharpen my skills to stay competitive in the dynamic IT world.</p>
                <div className="w-full ml-2">
                    <div className="flex mb-2"><AiOutlineCalendar className="text-[22px] mx-2"/><p>17 April 2003</p></div>
                    <div className="flex mb-2"><AiOutlineInstagram className="text-[22px] mx-2" /><p>Instagram: <a href="https://www.instagram.com/abidmsn_/">abidmsn_</a></p></div>
                    <div className="flex mb-2"><AiTwotoneMail className="text-[22px] mx-2"/><p>Email: abidmhsn@gmail.com</p></div>
                    <div className="flex mb-2"><AiFillPhone className="text-[22px] mx-2"/><p>Phone: +6282262513496</p></div>
                    <div className="flex"><AiOutlineLinkedin className="text-[22px] mx-2"/><p>Linkedin: <a href="https://www.linkedin.com/in/abid-muhsin">Abid Muhsin</a></p></div>
                </div>
            </div>
        </div>
    )
};

export default Article;