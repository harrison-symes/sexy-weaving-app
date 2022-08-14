import { MAX_WIDTH } from "../../constants/settings.constants"
import useBrowserWidth from "../../hooks/useBrowserWidth"
import { ColourSelection } from "../../reducers/colours.reducers"
import cn from "classnames"
import { isArray } from "lodash"
import { LoadColourPreview } from "../ColourControls/LoadColourPreview"
import { useDispatch } from "react-redux"
import { loadWeave } from "../../actions/savedPatterns.action"

const BOARD_MAX = 500

export interface ISavedWeave {
    width: number;
    height: number;
    colours: Array<ColourSelection>;
    pattern: Array<Array<boolean>>;
}

interface LoadBoardProps {
    weave: ISavedWeave;
    onDeletePattern: () => void;
}

const LoadBoard = (props: LoadBoardProps) => {
    const dispatch = useDispatch()
    const { pattern, colours } = props.weave
    const browserWidth = useBrowserWidth()
    const BOARD_WIDTH = Math.min(browserWidth, BOARD_MAX) - (2 * 16)

    const cellWidth = BOARD_WIDTH / MAX_WIDTH

    if (!isArray(pattern)) {
        return null
    }

    const onLoadPattern = () => {
        dispatch(loadWeave(props.weave))
    }

    return (
        <div className="load-board__container">
            <div className="board-view">
                <div className="board-container">
                    {pattern.map((row) => (
                        <div className="board-row">
                            {row.map((cell) => (
                                
                                <span 
                                    className={cn("board-cell", {
                                        "board-cell--flipped": cell
                                    })} 
                                    style={{
                                        width: cellWidth,
                                        height: cellWidth
                                    }}></span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <LoadColourPreview colours={colours} />
            <div className="load-pattern__controls">
                <button className="load-pattern__button" onClick={props.onDeletePattern}>Delete</button>
                <button className="load-pattern__button" onClick={onLoadPattern}>Load</button>
            </div>
        </div>
    )
}

export default LoadBoard