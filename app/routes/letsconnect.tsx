import SocialButton from "~/components/socialbutton";

const LetsConnect = () => {
    return (
        <main className='min-h-screen relative bg-[url(cloud-bg.jpg)] bg-cover bg-center'>
            <div className="relative h-screen flex flex-col justify-center items-center sm:gap-10 gap-5">
                <div className="fixed top-20">
                    <header>
                        <h1 className='mx-auto text-zinc-100 text-center text-4xl font-homet tracking-[-1%] sm:text-7xl'>Let's Connect!</h1>
                        <h4 className='flex justify-center mx-auto text-zinc-100 text-center text-lg font-bold tracking-[-1%] sm:text-2xl mt-5'>
                            <button type="button" className="">
                                <a className="" href="/">
                                    <img className="max-w-9" src="home.svg" />
                                </a>
                            </button>
                        </h4>
                    </header>
                </div>
                <div className="flex flex-col gap-3 items-center pt-40">
                    <SocialButton />
                </div>
            </div>
        </main>
    )
}

export default LetsConnect;