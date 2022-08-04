import { useDispatch, useSelector } from "react-redux"
import { nextWeaveRow } from "../../actions/weave.actions"
import { getHeight } from "../../selectors/settings.selectors"

const WeaveControls = () => {
    const dispatch = useDispatch()
    const height = useSelector(getHeight)

    const onNext = () => {
        dispatch(nextWeaveRow({maxRows: height}))
    }
    return (
        <div className="board-controls">
            <button onClick={onNext} className="board-control__submit">Next</button>
        </div>
    )
}

export default WeaveControls