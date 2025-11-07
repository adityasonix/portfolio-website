import HomeOptionCard from '~/components/homeoptioncard.js';
import { routeOptions } from '~/content/content';

const Welcome = () => {
    return (
        <main className='min-h-screen relative bg-[url(cloud-bg.jpg)] bg-cover bg-center'>
            <div className='h-screen flex flex-col justify-center items-center pb-12 gap-12 px-6'>
                <div>
                    <header>
                        <h1 className='mx-auto text-center text-zinc-100 text-6xl font-homet tracking-[-1%] sm:text-9xl'>Aditya Soni</h1>
                    </header>
                </div>
                <div className='flex flex-col sm:flex-row gap-10 sm:gap-20'>
                    <div className='flex justify-center items-center'>
                        <img className='object-scale-down w-36 sm:w-64 rounded-full' src='./profilepic.jpeg' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        {
                            routeOptions.map((routeOption, iteratorIndex) => (
                                <HomeOptionCard key={routeOption.id} routeOption={routeOption} iteratorIndex={iteratorIndex} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Welcome;