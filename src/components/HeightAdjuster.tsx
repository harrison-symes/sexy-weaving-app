import * as React from "react"
import { useDispatch, useSelector } from "react-redux"
import { decreaseHeight, increaseHeight } from "../actions/settings.actions"
import { getHeight } from "../selectors/settings.selectors"

const HeightAdjuster = () => {
    const height = useSelector(getHeight)
    const dispatch = useDispatch()
    const onIncrease = () => dispatch(increaseHeight())
    const onDecrease = () => dispatch(decreaseHeight())

    return (
        <div className="height-adjuster">
            <button onClick={onDecrease}>{"-"}</button>
            <h1>Height: {height}</h1>
            <button onClick={onIncrease}>{"+"}</button>
        </div>
    )
}

export default HeightAdjuster