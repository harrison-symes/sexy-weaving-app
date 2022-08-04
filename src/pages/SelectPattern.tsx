import FlipBoard from "../components/Board/FlipBoard"
import PatternControls from "../components/Controls/PatternControls"

const SelectPattern = () => {
    return (
        <div>
            <h1 className="page-header">Choose your pattern</h1>
            <FlipBoard />
            <PatternControls />
        </div>
    )
}

export default SelectPattern