import { GrNext } from "react-icons/gr"; 
import { GrPrevious } from "react-icons/gr"; 
import { useState } from "react";

const ImageSlider =({images})=> {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide =()=> {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const prevSlide =()=> {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    }

    return (
        <div className="">
            <button className="top-[40%] left-4 translate-y-[-50%] absolute p-7" onClick={prevSlide}><GrPrevious /></button>
            <div className="object-cover max-w-xl min-h-fit">
                <img src={images[currentIndex]} alt="" />
            </div>
            <button className="top-[40%] right-4 translate-y-[-50%] absolute p-7" onClick={nextSlide}><GrNext /></button>
        </div>
    )
}

export default ImageSlider