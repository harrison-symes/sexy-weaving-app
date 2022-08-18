import ControlButton from "./ControlButton"
import { RiPaintFill } from "react-icons/ri"
import { useDispatch } from "react-redux"
import { flipAllUp } from "../../actions/pattern.actions"


const FlipAllOnButton = () => {
    const dispatch = useDispatch()

    return (
        <ControlButton
            onClick={() => dispatch(flipAllUp())}
            icon={RiPaintFill}
        />
    )
}

export default FlipAllOnButton