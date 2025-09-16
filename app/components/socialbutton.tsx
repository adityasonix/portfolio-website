const SocialButton = () => {

    //const connectLinks

    return (
        <>
        <button type="button" className="connectButton bg-gradient-to-br from-purple-500 to-orange-400">
            <a className="connectAnchor" href="https://www.instagram.com/dokusho_zanmai" target="_blank" rel="noopener noreferrer">
                <div className="connectLinkTitle">
                    <img className="sm:max-w-9 max-w-7" src="insta.svg" />
                    &nbsp; dokusho_zanmai
                </div>
                <p className="connectDescription">I usually post about japanese book recommendations &mdash; synopsis and comments. And interesting stuff I find along the way.</p>
            </a>
        </button>
        <button type="button" className="connectButton bg-gradient-to-br from-sky-400 to-blue-700">
            <a className="connectAnchor" href="https://www.linkedin.com/in/soniaditya10" target="_blank" rel="noopener noreferrer">
                <div className="connectLinkTitle">
                    <img className="sm:max-w-9 max-w-7" src="linkedin.svg" />
                    &nbsp; soniaditya10
                </div>
                <p className="connectDescription">My professional profile, work experience, and technical expertise. Just LinkedIn stuff.</p>
            </a>
        </button>
        <button type="button" className="connectButton bg-gradient-to-br from-green-400 to-emerald-700">
            <a className="connectAnchor" href="https://bookmeter.com/users/1577990" target="_blank" rel="noopener noreferrer">
                <div className="connectLinkTitle">
                    <img className="sm:max-w-8 max-w-6" src="bookmeter.svg" />
                    &nbsp; aditya (読書メーター)
                </div>
                <p className="connectDescription">BookMeter is a japanese website for finding books and logging reading activity, and finding recommendations.</p>
            </a>
        </button>
        <button type="button" className="connectButton bg-gradient-to-br from-zinc-400 to-stone-800">
            <a className="connectAnchor" href="https://github.com/adityasonix" target="_blank" rel="noopener noreferrer">
                <div className="connectLinkTitle">
                    <img className="sm:max-w-8 max-w-6" src="github.svg" />
                    &nbsp; adityasonix
                </div>
                <p className="connectDescription">I'll be updating any technical projects and problem-solving code on my Github eventually.</p>
            </a>
        </button>
        </>
    )
}

export default SocialButton;