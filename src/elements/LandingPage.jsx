import { AiOutlineLinkedin } from "react-icons/ai"; 
import { AiFillPhone } from "react-icons/ai"; 
import { AiTwotoneMail } from "react-icons/ai"; 
import { AiOutlineInstagram } from "react-icons/ai"; 
import ProfileImage from '../assets/ProfileImage.jpg'

const LandingPage = () => {
    return (
        <div className="flex h-[90vh] justify-center items-center border-y-black-2">
            <img src={ProfileImage} alt="profile" className='w-[300px] rounded-full mr-[15vh] border-4 border-black'/>
            <div className="text-left font-sans">
                <h1 className="">Hello World...I'm</h1>
                <h2 className="text-[30px] font-bold">Abid Muhsin</h2>
                <h3 className="text-[20px] text-blue-800">Front End Web Developer</h3>
                <div className="w-full mt-5">
                    <div className="flex mb-2"><AiOutlineInstagram className="text-[22px] mx-2" /><p><a href="https://www.instagram.com/abidmsn_/" className=" hover:font-semibold">Instagram: abidmsn_</a></p></div>
                    <div className="flex mb-2"><AiTwotoneMail className="text-[22px] mx-2"/><p>Email: abidmhsn@gmail.com</p></div>
                    <div className="flex mb-2"><AiFillPhone className="text-[22px] mx-2"/><p>Phone: +6282262513496</p></div>
                    <div className="flex"><AiOutlineLinkedin className="text-[22px] mx-2"/><p><a href="https://www.linkedin.com/in/abid-muhsin" className=" hover:font-semibold">Linkedin: Abid Muhsin</a></p></div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;

