import { ColourSelection } from "../../reducers/colours.reducers"
import ChosenColour from "./ChosenColour"

interface LoadColourPreviewProps {
    colours: Array<ColourSelection>
}

export const LoadColourPreview = (props: LoadColourPreviewProps) => {
    return (
        <div className="color-selection">
            {props.colours.map((colour, i) => (
                <ChosenColour canEdit={false} colour={colour.colour} count={colour.count} number={i + 1} />
            ))}
        </div>
    )
}