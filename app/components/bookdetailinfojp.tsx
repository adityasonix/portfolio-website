import BookDetailInfoCard from "./bookdetailinfocard"
import BookCarousel from "./bookcarousel"
import type { bookDetailFetch } from "~/utils/interfaces";

interface bookDetailPropJP {
    bookDetail : bookDetailFetch
    imageUrls : any
}

const BookDetailInfoJp = ({ bookDetail, imageUrls }: bookDetailPropJP) => {
    return (
        <main className='min-h-screen relative bg-[url(/cloud-bg.jpg)] bg-cover bg-center'>
            <div className="relative h-screen flex flex-col justify-center items-center gap-4 py-12">
                <div className="flex flex-col gap-5">
                    <h1 className='mx-auto text-zinc-100 text-center text-xl font-homet font-bold tracking-[-1%] sm:text-4xl'>{bookDetail.titlejp}</h1>
                    <h4 className='flex justify-center mx-auto tracking-[-1%] sm:text-xl'>
                        <button type="button" className="">
                            <a className="" href="/bookshelf">
                                <img className="max-w-6 sm:max-w-7" src="/back.svg" alt="Go back to Gallery" />
                            </a>
                        </button>
                    </h4>
                </div>
                <div className="flex overflow-auto flex-col sm:flex-row justify-evenly items-center max-w-5/6 pt-4">
                    <div className="w-full sm:w-2/5"><BookCarousel imageUrls={imageUrls} /></div>
                    <BookDetailInfoCard bookDetail={bookDetail} />
                </div>
            </div>
        </main>
    )
}

export default BookDetailInfoJp