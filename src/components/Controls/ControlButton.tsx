import { IconType, IconContext } from "react-icons"

interface IControlButtonProps {
    icon: IconType;
    onClick: () => void;
}

const ControlButton = (props: IControlButtonProps) => {
    return (
        <IconContext.Provider value={{color: "blue"}}>
            <div className="mobile-control__button" onClick={props.onClick}>
                <props.icon />
            </div>
        </IconContext.Provider>
    )
}

export default ControlButton