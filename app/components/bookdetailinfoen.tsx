import BookDetailInfoCard from "./bookdetailinfocard"
import type { bookDetailFetch } from "~/utils/interfaces";
import { handleImageError } from "~/utils/handlefallback";

interface bookDetailPropEN {
    bookDetail : bookDetailFetch
}

const BookDetailInfoEn = ({ bookDetail }: bookDetailPropEN) => {

    const parsedReview = bookDetail.reviewtextspoiler.split('\n')
    console.log(parsedReview)

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
                <div className="flex overflow-auto flex-col justify-evenly items-center max-w-5/6 pt-4">
                    <div className="flex w-full justify-around items-center">
                        <img className="rounded-xl object-scale-down max-h-42 sm:max-h-100" onError={handleImageError} src={bookDetail.cover} alt={`Cover of the book ${bookDetail.titleen}`} />
                        <BookDetailInfoCard bookDetail={bookDetail} />
                    </div>
                    <div className="text-white">{bookDetail.reviewtext}</div>
                    {
                        parsedReview.map(p => (
                            <div className="text-white">{p}</div>
                        ))
                    }
                </div>
            </div>
        </main>
    )
}

export default BookDetailInfoEn