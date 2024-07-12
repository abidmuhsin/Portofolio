const Navbar = () => {
    return (
        <div className="h-[10vh] bg-slate-700 flex items-center justify-end">
            <div className="flex items-center mr-4 justify-end">
                <h1 className="text-[12px] text-white font-semibold hover:text-teal-200 mx-5"><a href="">HOME</a></h1>
                <h1 className="text-[12px] text-white font-semibold hover:text-teal-200 mx-5"><a href="">ABOUT</a></h1>
                <h1 className="text-[12px] text-white font-semibold hover:text-teal-200 mx-5"><a href="">PROJECT</a></h1>
                <h1 className="text-[12px] text-white font-semibold hover:text-teal-200 mx-5"><a href="">EXPERIENCE</a></h1>
                <h1 className="text-[12px] text-white font-semibold hover:text-teal-200 mx-5"><a href="">CONTACT</a></h1>
            </div>
        </div>    
        
    )
}

export default Navbar;