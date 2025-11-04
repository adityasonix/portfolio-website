import type { bookDetailType } from "~/utils/interfaces";

const BookDetailInfo = ({ bookDetail } : bookDetailType) => {
    return (
        <div className="w-2/5 flex flex-col justify-center items-center gap-6 py-4">
            <div className="flex flex-col items-center">
                <div className="text-gray-400 text-xs"> TITLE </div>
                <div className="text-zinc-100 text-xl font-bold"> {bookDetail?.titleen || bookDetail?.titlejp} </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="text-gray-400 text-xs"> AUTHOR </div>
                <div className="text-zinc-200 text-xl"> {bookDetail?.author} </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="text-gray-400 text-xs"> GENRE </div>
                <div className="text-zinc-200 text-xl"> {bookDetail?.genre} </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="text-gray-400 text-xs"> CATEGORY </div>
                <div className="text-zinc-200 text-xl"> {bookDetail?.category} </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="text-gray-400 text-xs"> PUBLISHER </div>
                <div className="text-zinc-200 text-xl"> {bookDetail?.publisher} </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="text-gray-400 text-xs"> KNOW MORE / BUY </div>
                <div className="text-zinc-300 text-lg">
                    <a className="hover:text-white" href={bookDetail?.bookmeter} target="_blank" rel="noopener noreferrer">
                        Bookmeter <img className="inline w-4" src="/external.svg" />
                    </a>
                    <span className="font-bold">&nbsp; &middot; &nbsp;</span>
                    <a className="hover:text-white" href={bookDetail?.bookwalker} target="_blank" rel="noopener noreferrer">
                        Bookwalker <img className="inline w-4" src="/external.svg" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default BookDetailInfo;