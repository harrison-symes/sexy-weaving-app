import ControlButton from "./ControlButton"
import { TiTick } from "react-icons/ti"

interface IConfirmButtonProps {
    onConfirm: () => void;
}

const ConfirmButton = (props: IConfirmButtonProps) => {
    return (
        <ControlButton
            onClick={props.onConfirm}
            icon={TiTick}
        />
    )
}

export default ConfirmButton