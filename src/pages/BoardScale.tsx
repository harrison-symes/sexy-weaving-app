import ScaleBoard from "../components/Board/ScaleBoard"
import BoardControls from "../components/Controls/BoardControls"

const BoardScale = () => {
    return (
        <div>
            <h1 className="page-header">Choose your scale</h1>
            <ScaleBoard />
            <BoardControls />
        </div>
    )
}

export default BoardScale