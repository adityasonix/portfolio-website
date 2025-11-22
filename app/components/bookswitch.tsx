const BookSwitch = () => {
    return (
        <div className='flex justify-center mt-1'>
            <label className="w-1/2 relative cursor-pointer">
                <input type="checkbox" className="sr-only peer"/>
                <div className="flex items-center justify-between pl-6 pr-5 w-full h-9 bg-zinc-500 peer-checked:bg-slate-500 rounded-full transition-all duration-300 relative text-white font-semibold">
                    <span className="peer-checked:text-gray-700 z-10">和書感想文</span>
                    <span className="peer-checked:text-white z-10">Read in EN</span>
                </div>
                <div className="absolute left-1 top-1 z-0 w-1/2 h-7 border-2 border-white rounded-full peer-checked:translate-x-14/15 transition-transform duration-300"></div>
            </label>
        </div>
    )
}

export default BookSwitch