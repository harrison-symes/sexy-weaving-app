import WeaveBoard from "../components/Board/WeaveBoard"
import ColourSelection from "../components/ColourControls/ColourSelection"
import WeaveControls from "../components/WeaveControls/WeaveControls"

import {FcCloth} from "react-icons/fc"

const Weave = () => {
    return (
        <div>
            <h1 className="page-header"><FcCloth />Time to weave!<FcCloth /></h1>
            <WeaveBoard />
            <ColourSelection canPickColours={false} />
            <WeaveControls />
        </div>
    )
}

export default Weave