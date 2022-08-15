import { useDispatch } from "react-redux"
import { confirmColours } from "../../actions/colours.actions"

const PatternControls = () => {
    const dispatch = useDispatch()

    const onConfirm = () => dispatch(confirmColours())

    return (
        <div className="board-controls">
            <button onClick={onConfirm} className="board-control__submit">Confirm</button>
        </div>
    )
}

export default PatternControls