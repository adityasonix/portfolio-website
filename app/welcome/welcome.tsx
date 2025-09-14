import HomeOptionCard from '~/components/homeoptioncard.js';
import NavBar from '../components/navbar.jsx'

const Welcome = () => {

  const routeOptions = [
    {"id": "one", "text": "Who I Am", "icon": "man.svg"}, 
    {"id": "two", "text": "Shosetsu Shelf", "icon": "book.svg"}, 
    {"id": "three", "text": "Code & Career", "icon": "tech.svg"}, 
    {"id": "four", "text": "Let\'s Connect", "icon": "connect.svg"}
  ];

  return (
    <main className='min-h-screen relative bg-[url(cloud-bg.jpg)] bg-cover bg-center'>
      <div className='h-screen flex flex-col justify-center items-center pb-12 gap-10'>
          <div>
            <header>
              <h1 className='mx-auto text-center text-5xl font-bold tracking-[-1%] sm:text-9xl'>Aditya Soni</h1>
            </header>
          </div>
          <div className='grid grid-cols-2 gap-8'>
            {
              routeOptions.map((routeOption) => (
                  <HomeOptionCard routeOption={routeOption} />
              ))
            }
          </div>
      </div>
    </main>
  )
}

export default Welcome;