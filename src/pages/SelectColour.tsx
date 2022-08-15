import ColourControls from "../components/ColourControls/ColourControls"
import ColourSelection from "../components/ColourControls/ColourSelection"

import { IoIosColorPalette } from "react-icons/io"

const SelectColour = () => {
    return (
        <div>
            <h1 className="page-header"><IoIosColorPalette />Select colours<IoIosColorPalette /></h1>
            <ColourSelection canPickColours={true} />
            <ColourControls />
        </div>
    )
}

export default SelectColour