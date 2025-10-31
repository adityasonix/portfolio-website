interface bookOverviewType {
    bookOverview : {
        id : string,
        title : string,
        author : string,
        category : string,
        genre : string
    }
}

const BookCard = ({ bookOverview } : bookOverviewType) => {

    const bookDetailLink = "bookshelf/" + bookOverview.id;

    return (
        <button className="cursor-pointer">
            <a href={bookDetailLink}>
                <div className="flex overflow-hidden bg-linear-to-br from-gray-700/50 to-stone-800/50 rounded-xl cursor-pointer shadow-inner shadow-light-100/20">
                    <img className="rounded-xl max-w-48" src="nazopanya.JPG" />
                    <div className="flex flex-col justify-center items-center gap-4 p-4">
                        <div className="flex flex-col items-center gap-1">
                            <div className="text-gray-400 text-tiny"> TITLE </div>
                            <div className="text-zinc-100 text-sm font-bold"> {bookOverview.title} </div>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <div className="text-gray-400 text-tiny"> AUTHOR </div>
                            <div className="text-zinc-200 text-sm"> {bookOverview.author} </div>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <div className="text-gray-400 text-tiny"> CATEGORY </div>
                            <div className="text-zinc-200 text-sm"> {bookOverview.category} </div>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <div className="text-gray-400 text-tiny"> GENRE </div>
                            <div className="text-zinc-200 text-sm"> {bookOverview.genre} </div>
                        </div>
                    </div>
                </div>
            </a>
        </button>
    )
}

export default BookCard;