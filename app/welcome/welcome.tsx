import HomeOptionCard from '~/components/homeoptioncard.js';

const Welcome = () => {

  const routeOptions = [
    {"id": "one", "text": "Who I Am", "icon": "man.svg", "link": "aboutme"}, 
    {"id": "two", "text": "Shosetsu Shelf", "icon": "book.svg", "link": "connect"}, 
    {"id": "three", "text": "Code & Career", "icon": "tech.svg", "link": "procareer"}, 
    {"id": "four", "text": "Let\'s Connect", "icon": "connect.svg", "link": "connect"}
  ];

  return (
    <main className='min-h-screen relative bg-[url(cloud-bg.jpg)] bg-cover bg-center'>
      <div className='h-screen flex flex-col justify-center items-center pb-12 gap-12'>
          <div>
            <header>
              <h1 className='mx-auto text-center text-zinc-100 text-5xl font-homet tracking-[-1%] sm:text-9xl'>Aditya Soni</h1>
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