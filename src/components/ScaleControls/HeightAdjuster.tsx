import * as React from "react"
import { useDispatch, useSelector } from "react-redux"
import { setHeight } from "../../actions"
import { MAX_HEIGHT, MIN_HEIGHT } from "../../constants/settings.constants"
import { getHeight } from "../../selectors/settings.selectors"

const HeightAdjuster = () => {
    const height = useSelector(getHeight)
    const dispatch = useDispatch()
    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => dispatch(setHeight(parseInt(e.target.value)))

    return (
        <div className="board-control">
            <h1 className="board-control__text">Height:</h1>
            <div className="board-control__buttons">
                <select onChange={onChange} value={height} className="select-control">
                    {new Array(MAX_HEIGHT).fill(0).map((_, i) => {
                        if (i < MIN_HEIGHT) return null

                        return (
                            <option>
                                {i}
                            </option>
                        )
                    })}
                </select>
                {/* <button disabled={height <= MIN_HEIGHT} className="board-control__button" onClick={onDecrease}>{"-"}</button>
                <button disabled={height >= MAX_HEIGHT} className="board-control__button" onClick={onIncrease}>{"+"}</button> */}
            </div>
        </div>
    )
}

export default HeightAdjuster