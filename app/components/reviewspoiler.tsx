import { useState } from "react"

interface spoilerTextProp {
    spoilerText : string
}

const ReviewSpoiler = ({ spoilerText } : spoilerTextProp) => {

    const parsedSpoilerText = spoilerText.split('\n')
    const [isExpanded, setIsExpanded] = useState(false)

    const onToggle = () => {
        setIsExpanded(prevExpandValue => !prevExpandValue)
    }

    return (
        <div className="bg-linear-to-br from-gray-800/50 to-stone-900/50 p-6 max-w-9/10 rounded-3xl overflow-hidden transition-all duration-300">
            <div className="flex items-start cursor-pointer" onClick={onToggle}>
                <h2 className='mx-auto text-zinc-100 text-center font-homet font-bold tracking-[-1%] sm:text-xl'>
                    Review (Spoilers)
                    <img className={`sm:max-w-9 max-w-7 inline ${isExpanded ? "rotate-180" : ""}`} src="/spoilerexpand.svg" />
                </h2>
            </div>
            <div className={`flex flex-col gap-2 pt-5 overflow-hidden transition-all duration-300 ${isExpanded ? "" : "hidden"}`}>
                <div className="container h-px bg-gradient-to-r from-transparent via-zinc-50 to-transparent mb-2"></div>
                {
                    parsedSpoilerText.map((p, index) => (
                        <div key={index} className="text-zinc-100 text-sm sm:text-base font-en-review">{p}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default ReviewSpoiler