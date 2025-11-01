import { useState } from "react";

const BookCarousel = () => {
    // Temporary
    const slides = ["/nazopanya1.PNG", "/nazopanya2.PNG", "/nazopanya3.PNG"];

    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        if(current !== 0) setCurrent(current - 1);
    }

    const nextSlide = () => {
        if(current !== slides.length - 1) setCurrent(current + 1);
    }

    return(
        <div className="overflow-hidden relative rounded-2xl">
            <div className="flex transition ease-out duration-400" style={{ transform: `translateX(-${current * 100}%)` }}>
                {
                    slides.map((slide) => (
                        <img key={slide} src={slide} />
                    ))
                }
            </div>
            <div className="absolute top-0 flex justify-between items-center w-full h-full">
                <button disabled={current === 0 ? true : false} className="cursor-pointer opacity-60 disabled:opacity-5 hover:opacity-90 ml-2" onClick={prevSlide}>
                    <img className="w-9" src="/carouselback.svg" />
                </button>
                <button disabled={current === slides.length - 1 ? true : false} className="cursor-pointer opacity-60 disabled:opacity-5 hover:opacity-90 mr-2" onClick={nextSlide}>
                    <img className="w-9" src="/carouselnext.svg" />
                </button>
            </div>
        </div>
    )
    // return(
    //     <div className="flex items-center gap-3">
    //         <button onClick={prevSlide}>
    //             <img className="w-48" src="/carouselback.svg" />
    //         </button>
    //         <div className="overflow-hidden">
    //             <div className="flex transition ease-out duration-400" style={{ transform: `translateX(-${current * 100}%)` }}>
    //                 {
    //                     slides.map((slide) => (
    //                         <img src={slide} />
    //                     ))
    //                 }
    //             </div>
    //         </div>
    //         <button onClick={nextSlide}>
    //             <img className="w-48" src="/carouselnext.svg" />
    //         </button>
    //     </div>
    // )
}

export default BookCarousel;