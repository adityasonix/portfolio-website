const PageNotFound = () => {
    return (
        <main className='min-h-screen relative bg-[url(/cloud-bg.jpg)] bg-cover bg-center'>
            <div className="flex flex-col gap-8 p-24">
                <div className="flex flex-col gap-2">
                    <h1 className='text-zinc-100 text-2xl sm:text-5xl flex items-center gap-2'><img className="max-w-9 sm:max-w-13 rounded-lg" src="/errorpage.svg" /> Oops!</h1>
                    <h4 className="text-zinc-100 text-lg sm:text-xl">It seems the page does not exist.</h4>
                </div>
                <h4 className='flex sm:text-2xl'>
                    <button type="button" className="cursor-pointer border-2 border-sky-300 rounded-lg">
                        <a className="flex items-center p-2" href="/">
                            <span className="text-zinc-100">Let's take you home &nbsp;</span> <img className="inline max-w-6 sm:max-w-8" src="/home.svg" />
                        </a>
                    </button>
                </h4>
            </div>
        </main>
    )
}

export default PageNotFound