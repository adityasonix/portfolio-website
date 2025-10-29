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
        <div className="flex flex-col items-center bg-sky-50 p-5 rounded-2xl shadow-inner shadow-light-100/10">
            <div className="">
                {expDetail.timeline}
            </div>
            <div className="text-xl font-bold pb-3">
                {expDetail.title}
            </div>
            <hr className="border-1 container solid #000000"></hr>
            <div className="text-sm p-2">
                {expDetail.expText}
            </div>
        </div>
    )
}

export default CareerCard;