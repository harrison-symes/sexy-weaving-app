import cn from "classnames"
import { useSelector } from "react-redux";
import { PopupKey } from "../../reducers/controls.reducers";
import { getActivePopup } from "../../selectors/controls.selectors";

import "./PopupControl.css"

interface IPopupControlProps {
    children: React.ReactNode;
    popupKey: PopupKey;
}

const PopupControl = (props: IPopupControlProps) => {
    const activePopup = useSelector(getActivePopup)

    return (
        <div className={cn("mobile-control__popup", {
            "mobile-control__popup--active": activePopup === props.popupKey
        })}>
            {props.children}
        </div>
    )
}

export default PopupControl

