import { expCons } from "~/content/content";
import CareerCard from "~/components/careercard";

const ProCareer = () => {
    return (
        <main className='min-h-screen relative bg-[url(cloud-bg.jpg)] bg-cover bg-center'>
            <div className="h-screen flex flex-col justify-center items-center sm:gap-10 gap-5">
                <div className="fixed top-20">
                    <header>
                        <h1 className='mx-auto text-center text-4xl font-bold tracking-[-1%] sm:text-7xl'>Career Journey!</h1>
                        <h4 className='flex justify-center mx-auto text-center text-lg font-bold tracking-[-1%] sm:text-2xl mt-3'>
                            <img className="max-w-8" src="career.svg" />
                        </h4>
                    </header>
                </div>
                <div className="flex flex-col max-w-7/8 sm:max-w-1/2 gap-3 items-center">
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