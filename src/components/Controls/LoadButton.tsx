import ControlButton from "./ControlButton"
import { VscSaveAll } from "react-icons/vsc"
import { useDispatch } from "react-redux"
import { goToStage } from "../../actions/router.actions"


const LoadButton = () => {
    const dispatch = useDispatch()

    return (
        <ControlButton
            onClick={() => dispatch(goToStage("SAVED"))}
            icon={VscSaveAll}
        />
    )
}

export default LoadButton