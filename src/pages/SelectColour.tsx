import ColourControls from "../components/ColourControls/ColourControls"
import ColourSelection from "../components/ColourControls/ColourSelection"

const SelectColour = () => {
    return (
        <div>
            <h1 className="page-header">Select colours</h1>
            <ColourSelection canPickColours={true} />
            <ColourControls />
        </div>
    )
}

export default SelectColour