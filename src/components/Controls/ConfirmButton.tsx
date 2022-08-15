import ControlButton from "./ControlButton"
import { AiOutlineArrowRight } from "react-icons/ai"
import { Stages } from "../../reducers/router.reducers"
import { useDispatch } from "react-redux";
import { goToStage } from "../../actions/router.actions";

interface IConfirmButtonProps {
    nextStage: Stages;
}

const ConfirmButton = (props: IConfirmButtonProps) => {
    const dispatch = useDispatch()

    return (
        <ControlButton
            onClick={() => dispatch(goToStage(props.nextStage))}
            icon={AiOutlineArrowRight}
        />
    )
}

export default ConfirmButton