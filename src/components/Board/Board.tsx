import * as React from "react"
import { useSelector } from "react-redux"
import { getHeight, getWidth } from "../../selectors/settings.selectors"
import HeightAdjuster from "../Controls/HeightAdjuster"
import WidthAdjuster from "../Controls/WidthAdjuster"


const Board = () => {
    const width = useSelector(getWidth)
    const height = useSelector(getHeight)
    const BOARD_MIN_HEIGHT = window.innerWidth - (2 * 16)

    const cellWidth = Math.min(BOARD_MIN_HEIGHT / height, BOARD_MIN_HEIGHT / width) 

    return (
        <>
            <div className="board-view">
                <div className="board-container" style={{
                    width: cellWidth * width,
                    height: cellWidth * height
                }}>
                    {new Array(height).fill(0).map(() => (
                        <div className="board-row">
                            {new Array(width).fill(0).map(() => (
                                <span className="board-cell" style={{
                                    width: cellWidth,
                                    height: cellWidth
                                }}></span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="board-controls">
                <WidthAdjuster />
                <HeightAdjuster />
            </div>
        </>
    )
}

export default Board