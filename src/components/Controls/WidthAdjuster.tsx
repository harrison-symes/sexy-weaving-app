import * as React from "react"
import { useDispatch, useSelector } from "react-redux"
import { decreaseWidth, increaseWidth } from "../../actions/settings.actions"
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
                <button className="board-control__button" onClick={onDecrease}>{"-"}</button>
                <button className="board-control__button" onClick={onIncrease}>{"+"}</button>
            </div>
        </div>
    )
}

export default WidthAdjuster