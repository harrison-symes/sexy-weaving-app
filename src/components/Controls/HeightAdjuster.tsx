import * as React from "react"
import { useDispatch, useSelector } from "react-redux"
import { decreaseHeight, increaseHeight } from "../../actions/settings.actions"
import { getHeight } from "../../selectors/settings.selectors"

const HeightAdjuster = () => {
    const height = useSelector(getHeight)
    const dispatch = useDispatch()
    const onIncrease = () => dispatch(increaseHeight())
    const onDecrease = () => dispatch(decreaseHeight())

    return (
        <div className="board-control">
            <h1 className="board-control__text">Height: {height}</h1>
            <div className="board-control__buttons">
                <button className="board-control__button" onClick={onDecrease}>{"-"}</button>
                <button className="board-control__button" onClick={onIncrease}>{"+"}</button>
            </div>
        </div>
    )
}

export default HeightAdjuster