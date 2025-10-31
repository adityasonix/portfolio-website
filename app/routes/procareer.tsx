import { expCons } from "~/content/content";
import CareerCard from "~/components/careercard";

const ProCareer = () => {
    return (
        <main className='min-h-screen relative bg-[url(cloud-bg.jpg)] bg-cover bg-center'>
            <div className="relative h-screen flex flex-col justify-center items-center gap-4">
                <div className="flex flex-col gap-2">
                    <h1 className='mx-auto text-center text-zinc-100 text-4xl font-homet tracking-[-1%] sm:text-7xl'>Career Journey!</h1>
                    <h4 className='flex justify-center mx-auto tracking-[-1%] sm:text-2xl'>
                        <button type="button" className="">
                            <a className="" href="/">
                                <img className="max-w-8 sm:max-w-12" src="home.svg" />
                            </a>
                        </button>
                    </h4>
                </div>
                <div className="flex flex-col max-w-7/8 sm:max-w-1/2 gap-1 sm:gap-3 items-center">
                    {
                        expCons.map((expCon) => (
                            <CareerCard key={expCon.id} expDetail={expCon}/>
                        ))
                    }
                </div>
            </div>
        </main>
    )
}

export default ProCareer;