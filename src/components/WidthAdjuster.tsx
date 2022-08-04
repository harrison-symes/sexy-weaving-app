import * as React from "react"
import { useDispatch, useSelector } from "react-redux"
import { decreaseWidth, increaseWidth } from "../actions/settings.actions"
import { getWidth } from "../selectors/settings.selectors"

const WidthAdjuster = () => {
    const width = useSelector(getWidth)
    const dispatch = useDispatch()
    const onIncrease = () => dispatch(increaseWidth())
    const onDecrease = () => dispatch(decreaseWidth())

    return (
        <div className="width-adjuster">
            <button onClick={onDecrease}>{"-"}</button>
            <h1>Width: {width}</h1>
            <button onClick={onIncrease}>{"+"}</button>
        </div>
    )
}

export default WidthAdjuster