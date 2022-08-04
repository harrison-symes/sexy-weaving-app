import WeaveBoard from "../components/Board/WeaveBoard"
import ColourControls from "../components/ColourControls/ColourControls"
import ColourSelection from "../components/ColourControls/ColourSelection"
import WeaveControls from "../components/WeaveControls/WeaveControls"

const Weave = () => {
    return (
        <div>
            <h1 className="page-header">Get weaving :)</h1>
            <WeaveBoard />
            <ColourSelection canPickColours={false} />
            <WeaveControls />
        </div>
    )
}

export default Weave