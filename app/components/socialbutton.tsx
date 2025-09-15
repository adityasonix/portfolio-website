const SocialButton = () => {
    return (
        <>
        <button type="button" className="connectButton">
            <a className="flex flex-col justify-center" href="https://www.instagram.com/dokusho_zanmai" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center text-base sm:text-2xl">
                    <img className="sm:max-w-9 max-w-7" src="insta.svg" />
                    &nbsp;&nbsp; dokusho_zanmai
                </div>
                <p>lafjaslkfjslkfajljalkf</p>
            </a>
        </button>
        <button type="button" className="connectButton">
            <a className="flex items-center" href="https://www.linkedin.com/in/soniaditya10" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center text-base sm:text-2xl">
                    <img className="sm:max-w-9 max-w-7" src="linkedin.svg" />
                    &nbsp;&nbsp; soniaditya10
                </div>
            </a>
        </button>
        <button type="button" className="connectButton">
            <a className="flex items-center" href="https://bookmeter.com/users/1577990" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center text-base sm:text-2xl">
                    <img className="sm:max-w-9 max-w-7" src="bookmeter.svg" />
                    &nbsp;&nbsp; aditya (読書メーター)
                </div>
            </a>
        </button>
        <button type="button" className="connectButton">
            <a className="flex items-center" href="https://github.com/adityasonix" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center text-base sm:text-2xl">
                    <img className="sm:max-w-9 max-w-7" src="github.svg" />
                    &nbsp;&nbsp; adityasonix
                </div>
            </a>
        </button>
        </>
    )
}

export default SocialButton;