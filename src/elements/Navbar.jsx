import { AiFillLinkedin } from "react-icons/ai"; 
import { AiFillGithub } from "react-icons/ai"; 
import { AiOutlineInstagram } from "react-icons/ai"; 
const Navbar = () => {
    return (
        <div className="h-[10vh] bg-slate-900 flex items-center justify-end gap-5 pr-20">
            <div className="flex gap-2">
                <a href="https://www.instagram.com/abidmsn_/"><h1 className="text-3xl text-white"><AiOutlineInstagram /></h1></a>
            </div>
            <div className="flex gap-2">
                <a href="https://github.com/abidmuhsin"><h1 className="text-3xl text-white"><AiFillGithub /></h1></a>
            </div>
            <div className="flex gap-2">
                <a href="https://www.linkedin.com/in/abid-muhsin-741b4428b/"><h1 className="text-3xl text-white"><AiFillLinkedin /></h1></a>
            </div>
        </div>    
        
    )
}

export default Navbar;