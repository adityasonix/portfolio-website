interface routeOptionType {
    routeOption : {
        id: string,
        text: string,
        icon: string,
        link: string
    };
}

const HomeOptionCard = ({routeOption} : routeOptionType) => {
    return (
        <button className="cursor-pointer"> 
            <a href={routeOption.link}>
                <div className="animate-rotate-border hover:animate-rotate-border-hover ease-in-out bg-conic/[from_var(--home-border-angle)] from-slate-900 via-slate-400 to-slate-900 p-[3px] rounded-2xl">
                    <div className="flex justify-center items-center bg-gradient-to-r from-gray-700 to-zinc-800 text-zinc-100 py-2 px-6 text-2xl sm:text-4xl rounded-xl">
                        {routeOption.text} &nbsp;
                        <img className="max-w-9 mt-1" src={routeOption.icon} />
                    </div>
                </div>
            </a>
        </button>
    )
}

export default HomeOptionCard