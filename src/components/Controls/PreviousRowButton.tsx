import ControlButton from "./ControlButton"
import { VscDebugReverseContinue } from "react-icons/vsc"
import { useDispatch } from "react-redux";
import { previousWeaveRow } from "../../actions/weave.actions";

const PreviousRowButton = () => {
    const dispatch = useDispatch()

    const onClick = () => {
        dispatch(previousWeaveRow())
    }

    return (
        <ControlButton
            onClick={onClick}
            icon={VscDebugReverseContinue}
        />
    )
}

export default PreviousRowButton