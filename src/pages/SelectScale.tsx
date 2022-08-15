import ScaleBoard from "../components/Board/ScaleBoard"
import ScaleControls from "../components/ScaleControls/ScaleControls"

import { GiScales } from "react-icons/gi"

const SelectScale = () => {
    return (
        <div>
            <h1 className="page-header"><GiScales />Choose scale<GiScales /></h1>
            <ScaleBoard />
            <ScaleControls />
        </div>
    )
}

export default SelectScale