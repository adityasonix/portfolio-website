import type { bookDetailType } from "~/utils/interfaces";

interface bookDetailProp {
    bookOverview : bookDetailType;
}

const BookCard = ({ bookOverview } : bookDetailProp) => {
    return (
        <button className="h-full w-full cursor-pointer">
            <a href={`bookshelf/${bookOverview.id}`}>
                <div className="flex overflow-hidden bg-linear-to-br from-gray-700/50 to-stone-800/50 rounded-xl cursor-pointer shadow-inner shadow-light-100/20">
                    <img className="rounded-xl object-scale-down max-h-42 sm:max-h-56" src={bookOverview.cover} />
                    <div className="flex grow flex-col justify-center items-center gap-4 sm:gap-8 p-2 sm:p-4">
                        <div className="flex flex-col items-center gap-1">
                            <div className="text-gray-400 text-tiny"> TITLE </div>
                            <div className="text-zinc-100 text-xs sm:text-sm font-bold"> {bookOverview.titleen} </div>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <div className="text-gray-400 text-tiny"> AUTHOR </div>
                            <div className="text-zinc-200 text-xs sm:text-sm"> {bookOverview.author} </div>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <div className="text-gray-400 text-tiny"> GENRE </div>
                            <div className="text-zinc-200 text-xs sm:text-sm"> {bookOverview.genre} </div>
                        </div>
                    </div>
                </div>
            </a>
        </button>
    )
}

export default BookCard;