import { useDispatch, useSelector } from "react-redux"
import { flipPatternCell } from "../../actions/pattern.actions"
import { MAX_WIDTH, MAX_HEIGHT } from "../../constants/settings.constants"
import useBrowserWidth from "../../hooks/useBrowserWidth"
import { getPatternBoard } from "../../selectors/pattern.selectors"
import { getWidth, getHeight } from "../../selectors/settings.selectors"
import cn from "classnames"

const BOARD_MAX = 1000

const FlipBoard = () => {
    const board = useSelector(getPatternBoard)
    const dispatch = useDispatch()
    const browserWidth = useBrowserWidth()
    const BOARD_WIDTH = Math.min(browserWidth, BOARD_MAX) - (2 * 16)

    const cellWidth = BOARD_WIDTH / MAX_WIDTH

    const boardHeight = cellWidth * MAX_HEIGHT

    const onCellClick = (row: number, col: number) => {
        dispatch(flipPatternCell({
            row, col
        }))
    }

    return (
        <>
            <div className="board-view" style={{
                    // width: boardHeight,
                    height: boardHeight
                }}
            >
                <div className="board-container">
                    {board.map((row, rowNumber) => (
                        <div className="board-row">
                            {row.map((cell, colNumber) => (
                                <span
                                    onClick={() => onCellClick(rowNumber, colNumber)}
                                    className={cn("board-cell", {
                                        "board-cell--flipped": cell
                                    })}
                                    style={{
                                        width: cellWidth,
                                        height: cellWidth
                                    }}
                                ></span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default FlipBoard