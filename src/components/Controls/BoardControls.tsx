import { useDispatch, useSelector } from "react-redux"
import { confirmSettings } from "../../actions"
import { getHeight, getWidth } from "../../selectors/settings.selectors"
import HeightAdjuster from "./HeightAdjuster"
import WidthAdjuster from "./WidthAdjuster"

const BoardControls = () => {
    const dispatch = useDispatch()
    const width = useSelector(getWidth)
    const height = useSelector(getHeight)

    const onConfirm = () => dispatch(confirmSettings({
        width, height
    }))
    
    return (
        <div className="board-controls">
            <WidthAdjuster />
            <button onClick={onConfirm} className="board-control__submit">Confirm</button>
            <HeightAdjuster />
        </div>
    )
}

export default BoardControls