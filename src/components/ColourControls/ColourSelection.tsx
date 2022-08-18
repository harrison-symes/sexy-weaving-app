import { useSelector } from "react-redux"
import { getColourSelection } from "../../selectors/colours.selectors"
import ChosenColour from "./ChosenColour"
import ColourPicker from "./ColourPicker"
import cn from "classnames"

interface ColourSelectionProps {
    canPickColours: boolean;
}

const ColourSelection = (props: ColourSelectionProps) => {
    const colours = useSelector(getColourSelection)

    return (
        <div className={cn("color-selection", {
            "color-selection--editable": props.canPickColours
        })}>
            {colours.map((colour, i) => (
                <ChosenColour canEdit={props.canPickColours} colour={colour.colour} count={colour.count} number={i + 1} />
            ))}
        </div>
    )
}

export default ColourSelection