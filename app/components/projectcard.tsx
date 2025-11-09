import type { projectContentType } from "~/utils/interfaces"

interface projectContentPropType {
    content : projectContentType
}

const ProjectCard = ({ content } : projectContentPropType) => {
    return (
        <div className="flex flex-col sm:flex-row w-full sm:gap-3">
            <div className="flex flex-col gap-3 justify-center items-center max-w-96 p-6 rounded-2xl">
                <div className="text-zinc-100 font-bold pb-3 text-base sm:text-2xl">
                    {content.title}
                </div>
                <div className="text-zinc-200 p-5 text-xs sm:text-sm bg-linear-to-br from-gray-800/80 to-stone-900/80 ">
                    {content.description}
                </div>
                <div className="flex gap-2 font-techstack text-zinc-100 text-xs sm:text-sm">
                    {
                        content.techstack.map( (txt, idx) => (
                            <span key={idx}>{txt}</span>
                        ))
                    }
                </div>
                <div className="text-zinc-100 text-xs sm:text-sm">
                    <a className='hover:text-white' href={content.footerLinks[0]} target="_blank" rel="noopener noreferrer">
                        <img className="inline w-6 pb-1" src="/githublight.svg" />
                    </a>
                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                <img className="rounded-lg sm:w-5/6 shadow-lg" src={content.imgUrl} alt={`Preview image for ${content.title}`} />
            </div>
        </div>
    )
}

export default ProjectCard