import { aboutTextPro, aboutTextSports, aboutTextPassion, aboutTextFoot } from '../content/content'

const AboutMe = () => {
    return (
        <main className='overflow-auto min-h-screen relative bg-[url(cloud-bg.jpg)] bg-cover bg-center'>
            <div className="h-screen flex flex-col justify-center items-center sm:gap-10 gap-5">
                <div>
                    <header>
                        <h1 className='mx-auto text-center text-4xl font-bold tracking-[-1%] sm:text-7xl'>Who I Am!</h1>
                        <h4 className='flex justify-center mx-auto text-center text-lg font-bold tracking-[-1%] sm:text-2xl mt-3'>
                            <img className="max-w-7" src="aboutface.svg" />
                        </h4>
                    </header>
                </div>
                <div className="flex flex-col max-w-4/5 sm:max-w-3/4 gap-3 items-center">
                    <p className='font-semibold mb-2 text-xs sm:text-lg'>{aboutTextPro}</p>
                    <p className='font-semibold mb-2 text-xs sm:text-lg'>{aboutTextSports}</p>
                    <p className='font-semibold mb-2 text-xs sm:text-lg'>{aboutTextPassion}</p>
                    <p className='font-semibold mb-2 text-xs sm:text-lg'>{aboutTextFoot}</p>
                </div>
            </div>
        </main>
    )
}

export default AboutMe;