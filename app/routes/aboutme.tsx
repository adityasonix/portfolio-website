import { aboutText } from "~/content/content";

const AboutMe = () => {
    return (
        <main className='min-h-screen relative bg-[url(cloud-bg.jpg)] bg-cover bg-center'>
            <div className="h-screen flex flex-col justify-center items-center sm:gap-10 gap-5">
                <div className="fixed top-20">
                    <header>
                        <h1 className='mx-auto text-zinc-100 text-center text-4xl font-homet tracking-[-1%] sm:text-7xl'>Who I Am!</h1>
                        <h4 className='flex justify-center mx-auto text-center text-lg font-bold tracking-[-1%] sm:text-2xl mt-5'>
                            <button type="button" className="">
                                <a className="" href="/">
                                    <img className="max-w-9" src="home.svg" />
                                </a>
                            </button>
                        </h4>
                    </header>
                </div>
                <div className="flex flex-col pt-40 max-w-4/5 sm:max-w-3/4 gap-3">
                    {
                        aboutText.map((aText) => (
                            <p className='font-normal mb-2 text-zinc-200 text-xs sm:text-base' key={aText.id}>{aText.textCon}</p>
                        ))
                    }
                    <p className='font-normal font-sign mb-2 text-zinc-200 text-xs sm:text-lg'>Aditya Soni</p>
                </div>
            </div>
        </main>
    )
}

export default AboutMe;