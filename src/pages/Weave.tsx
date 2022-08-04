import WeaveBoard from "../components/Board/WeaveBoard"
import ColourControls from "../components/ColourControls/ColourControls"
import WeaveControls from "../components/WeaveControls/WeaveControls"

const Weave = () => {
    return (
        <div>
            <h1 className="page-header">Get weaving :)</h1>
            <WeaveBoard />
            <WeaveControls />
        </div>
    )
}

export default Weave