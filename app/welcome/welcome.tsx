import HomeOptionCard from '~/components/homeoptioncard.js';
import { routeOptions } from '~/content/content';

const Welcome = () => {
  return (
    <main className='min-h-screen relative bg-[url(cloud-bg.jpg)] bg-cover bg-center'>
      <div className='h-screen flex flex-col justify-center items-center pb-12 gap-12'>
          <div>
            <header>
              <h1 className='mx-auto text-center text-zinc-100 text-6xl font-homet tracking-[-1%] sm:text-9xl'>Aditya Soni</h1>
            </header>
          </div>
          <div className='flex flex-col gap-4'>
            {
              routeOptions.map((routeOption) => (
                  <HomeOptionCard key={routeOption.id} routeOption={routeOption} />
              ))
            }
          </div>
      </div>
    </main>
  )
}

export default Welcome;