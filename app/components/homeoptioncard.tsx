interface routeOptionType {
    routeOption : {
        id: string,
        text: string,
        icon: string
    };
}

const HomeOptionCard = ({routeOption} : routeOptionType) => {
    return (
        <button className="optionButton">
            <a href="/connect">
                <div className="bg-gradient-to-br from-cyan-700 to-blue-500 p-1 rounded-lg">
                    <div className="flex justify-center items-center bg-gradient-to-r from-cyan-100 to-cyan-200 bg-black text-black p-4 text-5xl rounded-lg">
                        {routeOption.text} &nbsp;
                        <img className="max-w-11 mt-1" src={routeOption.icon} />
                    </div>
                </div>
            </a>
        </button>
    )
}

export default HomeOptionCard