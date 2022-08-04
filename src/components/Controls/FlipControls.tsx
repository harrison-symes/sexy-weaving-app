import { useDispatch } from "react-redux"
import { flipAllDown, flipAllUp } from "../../actions/pattern.actions"

const FlipControls = () => {
    const dispatch = useDispatch()

    const onConfirm = () => {

    }

    const onFlipAllUp = () => dispatch(flipAllUp())
    const onFlipAllDown = () => dispatch(flipAllDown())

    return (
        <div className="board-controls">
            <div className="board-control__buttons">
                <button onClick={onFlipAllUp} className="board-control__button--large">Flip all</button>
            </div>
            <button onClick={onConfirm} className="board-control__submit">Confirm</button>
            <div className="board-control__buttons">
                <button onClick={onFlipAllDown} className="board-control__button--large">Unflip all</button>
            </div>
        </div>
    )
}

export default FlipControls