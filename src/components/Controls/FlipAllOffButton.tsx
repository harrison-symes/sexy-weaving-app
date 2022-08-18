import ControlButton from "./ControlButton"
import { RiPaintLine } from "react-icons/ri"
import { useDispatch } from "react-redux"
import { goToStage } from "../../actions/router.actions"
import { flipAllDown } from "../../actions/pattern.actions"


const FlipAllOffButton = () => {
    const dispatch = useDispatch()

    return (
        <ControlButton
            onClick={() => dispatch(flipAllDown())}
            icon={RiPaintLine}
        />
    )
}

export default FlipAllOffButton