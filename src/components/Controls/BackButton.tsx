import ControlButton from "./ControlButton"
import { MdOutlineKeyboardBackspace } from "react-icons/md"
import { Stages } from "../../reducers/router.reducers"
import { useDispatch } from "react-redux";
import { goToStage } from "../../actions/router.actions";

interface IBackButtonProps {
    previousStage: Stages;
}

const BackButton = (props: IBackButtonProps) => {
    const dispatch = useDispatch()

    return (
        <ControlButton
            onClick={() => dispatch(goToStage(props.previousStage))}
            icon={MdOutlineKeyboardBackspace}
        />
    )
}

export default BackButton