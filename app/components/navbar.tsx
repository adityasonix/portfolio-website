import { useState } from "react"

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const buttons = (
        <>
        <button onClick={() => {console.log("Clicked!!")}} className="navButton">Log In</button>
        <button className="navButton">Blog</button>
        <button className="navButton">Register</button>
        </>
    )

    return (
        <nav className="bg-gray-800 text-white fixed w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-4">
                    <div className="flex flex-row w-full justify-between">
                        <div className="text-xl font-bold">
                            Aditya
                        </div>
                        <div className="hidden md:block">
                            <div className="flex ml-10 items-baseline space-x-2">
                                {buttons}
                            </div>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => {setIsOpen(!isOpen)}} className="md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${isOpen ? 'max-h-screen opacity-100 pb-2' : 'max-h-0 opacity-0'} overflow-hidden flex flex-col gap-y-2 md:hidden px-4 sm:px-6 transition-all duration-500 ease-in-out`}>
                {buttons}
            </div>
        </nav>
    )
}

export default NavBar