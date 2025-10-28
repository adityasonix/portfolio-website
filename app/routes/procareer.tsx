const ProCareer = () => {
    return (
        <main className='overflow-auto min-h-screen relative bg-[url(cloud-bg.jpg)] bg-cover bg-center'>
            <div className="h-screen flex flex-col justify-center items-center sm:gap-10 gap-5">
                <div>
                    <header>
                        <h1 className='mx-auto text-center text-4xl font-bold tracking-[-1%] sm:text-7xl'>Career Journey!</h1>
                        <h4 className='flex justify-center mx-auto text-center text-lg font-bold tracking-[-1%] sm:text-2xl mt-3'>
                            <img className="max-w-8" src="career.svg" />
                        </h4>
                    </header>
                </div>
                <div className="flex flex-col max-w-h sm:max-w-3/4 gap-3 items-center">
                    <div className="grid grid-flow-row grid-cols-2 gap-3">
                        <div className="careerTimeline">
                            2023 &mdash; Present
                        </div>
                        <div>
                            Software Developer &middot; SAP Labs
                        </div>
                        <div></div>
                        <div>
                            af
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProCareer;