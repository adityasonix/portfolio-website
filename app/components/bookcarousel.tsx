import { useState } from "react";

interface imageUrlsProp {
    imageUrls: string[]
}

const BookCarousel = ({ imageUrls } : imageUrlsProp) => {
    
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        if(current !== 0) setCurrent(current - 1);
    }

    const nextSlide = () => {
        if(current !== imageUrls.length - 1) setCurrent(current + 1);
    }

    return(
        <div className="overflow-hidden relative rounded-2xl">
            <div className="flex transition ease-out duration-400" style={{ transform: `translateX(-${current * 100}%)` }}>
                {
                    imageUrls.map((slide) => (
                        <img key={slide} src={slide} />
                    ))
                }
            </div>
            <div className="absolute top-0 flex justify-between items-center w-full h-full">
                <button disabled={current === 0 ? true : false} className="cursor-pointer opacity-60 disabled:opacity-5 hover:opacity-90 ml-2" onClick={prevSlide}>
                    <img className="w-9" src="/carouselback.svg" />
                </button>
                <button disabled={current === imageUrls.length - 1 ? true : false} className="cursor-pointer opacity-60 disabled:opacity-5 hover:opacity-90 mr-2" onClick={nextSlide}>
                    <img className="w-9" src="/carouselnext.svg" />
                </button>
            </div>
        </div>
    )
}

export default BookCarousel;