import FlipBoard from "../components/Board/FlipBoard"
import FlipControls from "../components/Controls/FlipControls"

const BoardFlip = () => {
    return (
        <div>
            <h1 className="page-header">Choose your pattern</h1>
            <FlipBoard />
            <FlipControls />
        </div>
    )
}

export default BoardFlip