import { useDispatch, useSelector } from "react-redux"
import { confirmSettings } from "../../actions"
import { goToSavedPage } from "../../actions/savedPatterns.action"
import { getHeight, getWidth } from "../../selectors/settings.selectors"
import HeightAdjuster from "./HeightAdjuster"

const ScaleControls = () => {
    const dispatch = useDispatch()
    const width = useSelector(getWidth)
    const height = useSelector(getHeight)

    const onConfirm = () => dispatch(confirmSettings({
        width, height
    }))

    const onLoadPatterns = () => {
        dispatch(goToSavedPage())
    }
    
    return (
        <div className="board-controls">
            {/* <WidthAdjuster /> */}
            <div className="board-control__buttons">
                <button className="board-control__button" onClick={onLoadPatterns}>Load</button>
            </div>
            <button onClick={onConfirm} className="board-control__submit">Confirm</button>
            <HeightAdjuster />
        </div>
    )
}

export default ScaleControls