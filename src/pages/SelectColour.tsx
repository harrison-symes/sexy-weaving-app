import ColourControls from "../components/ColourControls/ColourControls"
import ColourSelection from "../components/ColourControls/ColourSelection"

import { IoIosColorPalette } from "react-icons/io"
import MobileControl from "../components/Control/MobileControl"
import ConfirmButton from "../components/Controls/ConfirmButton"
import { useDispatch } from "react-redux"
import { confirmColours } from "../actions/colours.actions"
import BackButton from "../components/Controls/BackButton"
import AddColour from "../components/Controls/AddColour"

const SelectColour = () => {
    const dispatch = useDispatch()
    const onConfirm = () => dispatch(confirmColours())

    return (
        <div>
            <h1 className="page-header"><IoIosColorPalette />Select colours<IoIosColorPalette /></h1>
            <ColourSelection canPickColours={true} />
            <MobileControl>
                <BackButton previousStage="PATTERN" />
                <AddColour />
                <ConfirmButton onConfirm={onConfirm}/>
            </MobileControl>
        </div>
    )
}

export default SelectColour