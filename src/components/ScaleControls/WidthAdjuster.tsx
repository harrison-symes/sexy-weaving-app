import * as React from "react"
import { useDispatch, useSelector } from "react-redux"
import { decreaseWidth, increaseWidth } from "../../actions/settings.actions"
import { MAX_WIDTH, MIN_WIDTH } from "../../constants/settings.constants"
import { getWidth } from "../../selectors/settings.selectors"

const WidthAdjuster = () => {
    const width = useSelector(getWidth)
    const dispatch = useDispatch()
    const onIncrease = () => dispatch(increaseWidth())
    const onDecrease = () => dispatch(decreaseWidth())

    return (
        <div className="board-control">
            <h1 className="board-control__text">Width: {width}</h1>
            <div className="board-control__buttons">
                <button disabled={width <= MIN_WIDTH} className="board-control__button" onClick={onDecrease}>{"-"}</button>
                <button disabled={width >= MAX_WIDTH} className="board-control__button" onClick={onIncrease}>{"+"}</button>
            </div>
        </div>
    )
}

export default WidthAdjuster