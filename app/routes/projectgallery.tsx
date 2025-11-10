import ProjectCard from "~/components/projectcard"
import { projectContents } from "~/content/content"
import type { Route } from "./+types/projectgallery";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Aditya | Personal Projects" },
  ];
}

const ProjectGallery = () => {
    return (
        <main className='min-h-screen relative bg-[url(/cloud-bg.jpg)] bg-cover bg-center'>
            <div className="relative h-screen flex flex-col justify-center items-center gap-4 py-12">
                <div className="flex flex-col gap-2 pb-1">
                    <h1 className='mx-auto text-center text-zinc-100 text-4xl font-homet tracking-[-1%] sm:text-7xl'>Side Quests</h1>
                    <h4 className='flex justify-center mx-auto tracking-[-1%] sm:text-2xl'>
                        <button type="button" className="">
                            <a className="" href="/">
                                <img className="max-w-8 sm:max-w-12" src="/home.svg" alt="Go to Home" />
                            </a>
                        </button>
                    </h4>
                </div>
                <div className="flex overflow-auto flex-col w-3/4 gap-2 sm:gap-3 items-center">
                    {
                        projectContents.map(( content ) => (
                            <ProjectCard key={content.id} content={content} />
                        ))
                    }
                </div>
            </div>
        </main>
    )
}

export default ProjectGallery