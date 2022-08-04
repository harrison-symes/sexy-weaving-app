import { useDispatch, useSelector } from "react-redux"
import { nextWeaveRow } from "../../actions/weave.actions"
import { getHeight } from "../../selectors/settings.selectors"

const WeaveControls = () => {
    const dispatch = useDispatch()

    const onNext = () => {
        dispatch(nextWeaveRow())
    }
    
    return (
        <div className="board-controls">
            <button onClick={onNext} className="board-control__submit">Next</button>
        </div>
    )
}

export default WeaveControls