import { useSelector } from "react-redux"
import { MAX_WIDTH } from "../../constants/settings.constants"
import useBrowserWidth from "../../hooks/useBrowserWidth"
import { getPatternBoard } from "../../selectors/pattern.selectors"
import cn from "classnames"
import { getWeaveRow } from "../../selectors/weave.selectors"
import { getActiveColor } from "../../selectors/colours.selectors"

const BOARD_MAX = 1000

const WeaveBoard = () => {
    const board = useSelector(getPatternBoard)
    const activeRow = useSelector(getWeaveRow)
    const activeColor = useSelector(getActiveColor)
    const browserWidth = useBrowserWidth()
    const BOARD_WIDTH = Math.min(browserWidth, BOARD_MAX) - (2 * 16)

    const cellWidth = BOARD_WIDTH / MAX_WIDTH

    return (
        <>
            <div className="board-view">
                <div className="board-container">
                    {board.map((row, rowNumber) => (
                        <div>
                            <div className={cn("board-row", {
                                "board-row--active": rowNumber === activeRow
                            })} style={{borderColor: activeColor}}>
                                {row.map((cell, colNumber) => (
                                    <span
                                        className={cn("board-cell", {
                                            "board-cell--flipped": cell
                                        })}
                                        style={{
                                            width: cellWidth,
                                            height: cellWidth,
                                        }}
                                    >
                                        {cell === true && colNumber + 1}
                                    </span>
                                ))}
                            </div>
                            {rowNumber === activeRow && <div className="color-slice" style={{backgroundColor: activeColor}}></div>}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default WeaveBoard