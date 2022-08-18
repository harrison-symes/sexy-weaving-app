import WeaveBoard from "../components/Board/WeaveBoard"
import ColourSelection from "../components/ColourControls/ColourSelection"
import WeaveControls from "../components/WeaveControls/WeaveControls"

import {FcCloth} from "react-icons/fc"
import MobileControl from "../components/Control/MobileControl"
import BackButton from "../components/Controls/BackButton"
import NextRowButton from "../components/Controls/NextRowButton"
import PreviousRowButton from "../components/Controls/PreviousRowButton"
import SavePatternButton from "../components/Controls/SavePatternButton"

const Weave = () => {
    return (
        <div>
            <h1 className="page-header"><FcCloth />Time to weave!<FcCloth /></h1>
            <WeaveBoard />
            <ColourSelection canPickColours={false} />
            <WeaveControls />
            <MobileControl>
                <BackButton previousStage="COLOUR" />
                <SavePatternButton />
                <PreviousRowButton />
                <NextRowButton />
            </MobileControl>
        </div>
    )
}

export default Weave