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
            <div className="flex justify-center items-center border-2 border-black rounded-lg p-4 text-5xl">
                {routeOption.text} &nbsp;
                <img className="max-w-11" src={routeOption.icon} />
            </div>
        </button>
    )
}

export default HomeOptionCard