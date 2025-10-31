interface expDetailType {
    expDetail : {
        id: string,
        timeline: string,
        title: string,
        expText: string
    }
}
const CareerCard = ({expDetail}: expDetailType) => {
    return (
        <div className="flex flex-col items-center bg-linear-to-br from-gray-700/50 to-stone-800/50 p-5 rounded-2xl shadow-inner shadow-light-100/20">
            <div className="text-zinc-300 font-thin pb-1 text-xs sm:text-base">
                {expDetail.timeline}
            </div>
            <div className="text-zinc-100 font-bold pb-3 text-base sm:text-xl">
                {expDetail.title}
            </div>
            <div className="container h-px bg-gradient-to-r from-transparent via-zinc-50 to-transparent"></div>
            <div className="text-zinc-200 p-2 text-xs sm:text-sm">
                {expDetail.expText}
            </div>
        </div>
    )
}

export default CareerCard;