import ScaleBoard from "../components/Board/ScaleBoard"

import { GiScales } from "react-icons/gi"
import MobileControl from "../components/Control/MobileControl"
import HeightButton from "../components/Controls/HeightButton"
import ConfirmButton from "../components/Controls/ConfirmButton"
import LoadButton from "../components/Controls/LoadButton"

const SelectScale = () => {
    return (
        <div>
            <h1 className="page-header"><GiScales />Choose scale<GiScales /></h1>
            <ScaleBoard />
            <MobileControl>
                <LoadButton />
                <HeightButton />
                <ConfirmButton nextStage="PATTERN" />
            </MobileControl>
        </div>
    )
}

export default SelectScale