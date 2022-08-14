import { useSelector } from "react-redux"
import { MAX_WIDTH } from "../../constants/settings.constants"
import useBrowserWidth from "../../hooks/useBrowserWidth"
import { getHeight, getWidth } from "../../selectors/settings.selectors"

const BOARD_MAX = 1000

const ScaleBoard = () => {
    const width = useSelector(getWidth)
    const height = useSelector(getHeight)
    const browserWidth = useBrowserWidth()
    const BOARD_WIDTH = Math.min(browserWidth, BOARD_MAX) - (2 * 16)

    const cellWidth = BOARD_WIDTH / MAX_WIDTH

    return (
        <>
            <div className="board-view">
                <div className="board-container">
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
        </>
    )
}

export default ScaleBoard