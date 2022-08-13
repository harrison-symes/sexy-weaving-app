import { useDispatch, useSelector } from "react-redux"
import { nextWeaveRow, previousWeaveRow } from "../../actions/weave.actions"
import { saveWeave } from "../../localstorage/savedPatterns"
import { getWeaveData } from "../../selectors/weave.selectors"

const WeaveControls = () => {
    const dispatch = useDispatch()
    const weaveData = useSelector(getWeaveData)

    const onNext = () => {
        dispatch(nextWeaveRow())
    }

    const onSave = () => {
        saveWeave(weaveData)
    }
    
    return (
        <div className="board-controls">
            <div className="board-control__buttons">
                <button className="board-control__button--large" onClick={onSave}>Save</button>
            </div>
            <button onClick={onNext} className="board-control__submit">Next</button>
            <div className="board-control__buttons">
                <button onClick={() => dispatch(previousWeaveRow())} className="board-control__button--large">Back</button>
            </div>
        </div>
    )
}

export default WeaveControls