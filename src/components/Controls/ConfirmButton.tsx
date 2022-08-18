import ControlButton from "./ControlButton"
import { AiOutlineArrowRight } from "react-icons/ai"

interface IConfirmButtonProps {
    onConfirm: () => void;
}

const ConfirmButton = (props: IConfirmButtonProps) => {
    return (
        <ControlButton
            onClick={props.onConfirm}
            icon={AiOutlineArrowRight}
        />
    )
}

export default ConfirmButton