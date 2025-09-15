import SocialButton from "~/components/socialbutton";

const LetsConnect = () => {
    return (
        <main className='min-h-screen relative bg-[url(cloud-bg.jpg)] bg-cover bg-center'>
            <div className="h-screen flex flex-col justify-center items-center pb-12 gap-10">
                <div>
                    <header>
                        <h1 className='mx-auto text-center text-4xl font-bold tracking-[-1%] sm:text-7xl'>Let's Connect!</h1>
                        <h4 className='flex justify-center mx-auto text-center text-lg font-bold tracking-[-1%] sm:text-2xl mt-3'>
                            My Socials &thinsp; <img className="max-w-7" src="social.svg" />
                        </h4>
                    </header>
                </div>
                <div className="flex flex-col gap-3">
                    <SocialButton />
                </div>
            </div>
        </main>
    )
}

export default LetsConnect;