import ControlButton from "./ControlButton"
import { VscDebugContinue } from "react-icons/vsc"
import { useDispatch } from "react-redux";
import { goToStage } from "../../actions/router.actions";
import { nextWeaveRow } from "../../actions/weave.actions";

const NextRowButton = () => {
    const dispatch = useDispatch()

    const onClick = () => {
        dispatch(nextWeaveRow())
    }

    return (
        <ControlButton
            onClick={onClick}
            icon={VscDebugContinue}
        />
    )
}

export default NextRowButton