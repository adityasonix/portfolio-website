import type { bookDetailType } from "~/utils/interfaces";

interface bookDetailProp {
    bookDetail : bookDetailType;
}

const BookDetailInfo = ({ bookDetail } : bookDetailProp) => {
    return (
        <div className="w-full sm:w-2/5 flex flex-col justify-center items-center gap-1 sm:gap-6 my-6 sm:my-4 shadow-xl p-3 rounded-2xl bg-linear-to-br/oklab from-grey-700/40 to-zinc-600/60">
            <div className="sm:hidden container h-px bg-gradient-to-r from-transparent via-zinc-50 to-transparent mb-3"></div>
            <div className="flex flex-col items-center">
                <div className="text-gray-400 text-little sm:text-xs"> TITLE </div>
                <div className="text-zinc-100 text-sm sm:text-xl font-bold"> {bookDetail.titleen || bookDetail.titlejp} </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="text-gray-400 text-little sm:text-xs"> AUTHOR </div>
                <div className="text-zinc-200 test-sm sm:text-xl"> {bookDetail.author} </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="text-gray-400 text-little sm:text-xs"> GENRE </div>
                <div className="text-zinc-200 test-sm sm:text-xl"> {bookDetail.genre} </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="text-gray-400 text-little sm:text-xs"> CATEGORY </div>
                <div className="text-zinc-200 test-sm sm:text-xl"> {bookDetail.category} </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="text-gray-400 text-little sm:text-xs"> PUBLISHER </div>
                <div className="text-zinc-200 test-sm sm:text-xl"> {bookDetail.publisher} </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="text-gray-400 text-little sm:text-xs"> KNOW MORE / BUY </div>
                <div className="text-zinc-300 test-sm sm:text-lg">
                    <a className='hover:text-white' href={bookDetail?.bookmeter} target="_blank" rel="noopener noreferrer">
                        <img className="inline w-4 pb-1" src="/bookmeter.svg" /> Bookmeter <img className="inline w-4" src="/external.svg" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default BookDetailInfo;