import ScaleBoard from "../components/Board/ScaleBoard"
import ScaleControls from "../components/ScaleControls/ScaleControls"

const SelectScale = () => {
    return (
        <div>
            <h1 className="page-header">Choose your scale</h1>
            <ScaleBoard />
            <ScaleControls />
        </div>
    )
}

export default SelectScale