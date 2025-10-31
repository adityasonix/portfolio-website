interface bookOverviewType {
    bookOverview : {
        id : string,
        title : string,
        author : string
    }
}

const BookCard = ({ bookOverview } : bookOverviewType) => {
    return (
        <div className="flex overflow-hidden bg-linear-to-br from-gray-700/50 to-stone-800/50 rounded-xl shadow-inner shadow-light-100/20">
            <img className="rounded-xl max-w-48" src="nazopanya.JPG" />
            <div className="flex flex-col justify-center items-center p-2">
                <div className="text-gray-400 text-tiny"> TITLE </div>
                <div className="text-zinc-100"> {bookOverview.title} </div>
                <div className="text-gray-400 text-tiny"> AUTHOR </div>
                <div className="text-zinc-200 text-sm"> {bookOverview.author} </div>
            </div>
        </div>
    )
}

export default BookCard;