import { useSelector } from "react-redux"
import { getColours } from "../../selectors/colours.selectors"
import ChosenColour from "./ChosenColour"
import ColourPicker from "./ColourPicker"

interface ColourSelectionProps {
    canPickColours: boolean;
}

const ColourSelection = (props: ColourSelectionProps) => {
    const colours = useSelector(getColours)

    return (
        <div className="color-selection">
            {colours.map((colour, i) => (
                <ChosenColour canEdit={props.canPickColours} colour={colour} number={i + 1} />
            ))}
            {props.canPickColours && colours.length < 8 && (
                <ColourPicker />
            )}
        </div>
    )
}

export default ColourSelection