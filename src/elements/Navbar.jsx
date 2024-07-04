const Navbar = () => {
    return (
        <div className="bg-slate-700 flex h-[13vh] items-center justify-center">
            <h1 className="text-[15px] text-white font-semibold hover:text-teal-200 mx-5"><a href="">HOME</a></h1>
            <h1 className="text-[15px] text-white font-semibold hover:text-teal-200 mx-5"><a href="">ABOUT</a></h1>
            <h1 className="text-[15px] text-white font-semibold hover:text-teal-200 mx-5"><a href="">PROJECT</a></h1>
            <h1 className="text-[15px] text-white font-semibold hover:text-teal-200 mx-5"><a href="">EXPERIENCE</a></h1>
            <h1 className="text-[15px] text-white font-semibold hover:text-teal-200 mx-5"><a href="">CONTACT</a></h1>
        </div>
    )
}

export default Navbar;