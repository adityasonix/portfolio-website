import type { bookDetailFetch } from "~/utils/interfaces";
import { handleImageError } from "~/utils/handlefallback";
import ReviewSpoiler from "./reviewspoiler";

interface bookDetailPropEN {
    bookDetail : bookDetailFetch
}

const BookDetailInfoEn = ({ bookDetail }: bookDetailPropEN) => {

    const parsedReview = bookDetail.reviewtext.split('\n')

    return (
        <main className='min-h-screen relative bg-[url(/cloud-bg.jpg)] bg-cover bg-center'>
            <div className="relative flex flex-col justify-center items-center gap-4 py-12">
                <div className="flex flex-col gap-5">
                    <h1 className='mx-auto text-zinc-100 text-center text-xl font-homet font-bold tracking-[-1%] sm:text-4xl'>{bookDetail.titleen}</h1>
                    <h4 className='flex justify-center mx-auto tracking-[-1%] sm:text-xl'>
                        <button type="button" className="">
                            <a className="" href="/bookshelf">
                                <img className="max-w-6 sm:max-w-7" src="/back.svg" alt="Go back to Gallery" />
                            </a>
                        </button>
                    </h4>
                </div>
                <div className="flex overflow-auto flex-col justify-evenly items-center max-w-5/6 gap-6">
                    <div className="flex overflow-auto flex-col sm:flex-row justify-evenly items-center max-w-5/6 pt-4 gap-4">
                        <div className="flex justify-center w-full">
                            <img className="rounded-xl object-scale-down max-h-42 sm:max-h-100" onError={handleImageError} src={bookDetail.cover} alt={`Cover of the book ${bookDetail.titleen}`} />
                        </div>
                        <div className="flex flex-col items-center gap-3 p-4 border-slate-500 border-2 rounded-4xl">
                            <h2 className='mx-auto text-zinc-100 text-center text-lg font-homet font-bold tracking-[-1%] sm:text-3xl'>My Thoughts</h2>
                            <div className="flex flex-col gap-1 max-w-3/4">
                                {
                                    parsedReview.map((p, index) => (
                                        <div key={index} className="text-zinc-100 text-sm sm:text-base font-en-review">{p}</div>
                                    ))
                                }
                            </div>
                            <div className="text-zinc-100 text-xs sm:text-sm px-2 border-1 border-orange-300 bg-zinc-900 rounded-lg">
                                <a href={bookDetail.amazon} target="_blank" rel="noopener noreferrer">
                                    Listen on <img className="inline w-5 font-homet pb-px" src="/audible.svg" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <ReviewSpoiler spoilerText={bookDetail.reviewtextspoiler} />
                </div>
            </div>
        </main>
    )
}

export default BookDetailInfoEn