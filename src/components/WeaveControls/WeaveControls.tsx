import { useDispatch } from "react-redux"
import { nextWeaveRow, previousWeaveRow, resetApp } from "../../actions/weave.actions"

const WeaveControls = () => {
    const dispatch = useDispatch()

    const onNext = () => {
        dispatch(nextWeaveRow())
    }

    const onReset = () => {
        dispatch(resetApp())
    }
    
    return (
        <div className="board-controls">
            <div className="board-control__buttons">
                <button onClick={onReset} className="board-control__button--large">Reset</button>
            </div>
            <button onClick={onNext} className="board-control__submit">Next</button>
            <div className="board-control__buttons">
                <button onClick={() => dispatch(previousWeaveRow())} className="board-control__button--large">Back</button>
            </div>
        </div>
    )
}

export default WeaveControls