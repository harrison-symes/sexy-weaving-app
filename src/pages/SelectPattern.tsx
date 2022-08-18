import FlipBoard from "../components/Board/FlipBoard"
import PatternControls from "../components/Controls/PatternControls"

import { FaChessBoard } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { confirmPattern } from "../actions/pattern.actions"
import MobileControl from "../components/Control/MobileControl"
import ConfirmButton from "../components/Controls/ConfirmButton"
import FlipAllOnButton from "../components/Controls/FlipAllOnButton"
import FlipAllOffButton from "../components/Controls/FlipAllOffButton"
import BackButton from "../components/Controls/BackButton"

const SelectPattern = () => {
    const dispatch = useDispatch()

    const onConfirm = () => {
        dispatch(confirmPattern())
    }

    return (
        <div>
            <h1 className="page-header"><FaChessBoard />Input pattern<FaChessBoard /></h1>
            <FlipBoard />
            <MobileControl>
                <BackButton previousStage="SCALE" />
                <FlipAllOffButton />
                <FlipAllOnButton />
                <ConfirmButton onConfirm={onConfirm} />
            </MobileControl>
        </div>
    )
}

export default SelectPattern