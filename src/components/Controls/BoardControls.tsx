import HeightAdjuster from "./HeightAdjuster"
import WidthAdjuster from "./WidthAdjuster"

const BoardControls = () => {
    return (
        <div className="board-controls">
            <WidthAdjuster />
            <button className="board-control__submit">Confirm</button>
            <HeightAdjuster />
        </div>
    )
}

export default BoardControls