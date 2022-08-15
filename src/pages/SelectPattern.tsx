import FlipBoard from "../components/Board/FlipBoard"
import PatternControls from "../components/Controls/PatternControls"

import { FaChessBoard } from "react-icons/fa"

const SelectPattern = () => {
    return (
        <div>
            <h1 className="page-header"><FaChessBoard />Input pattern<FaChessBoard /></h1>
            <FlipBoard />
            <PatternControls />
        </div>
    )
}

export default SelectPattern