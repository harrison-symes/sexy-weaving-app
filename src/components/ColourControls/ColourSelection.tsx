import { useSelector } from "react-redux"
import { getColours } from "../../selectors/colours.selectors"
import ChosenColour from "./ChosenColour"
import ColourPicker from "./ColourPicker"

const ColourSelection = () => {
    const colours = useSelector(getColours)

    return (
        <div className="color-selection">
            {colours.map((colour, i) => (
                <ChosenColour colour={colour} number={i + 1} />
            ))}
            <ColourPicker />
        </div>
    )
}

export default ColourSelection