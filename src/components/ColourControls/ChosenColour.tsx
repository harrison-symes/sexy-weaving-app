import { useState } from "react";
import { CompactPicker } from "react-color";
import { useDispatch } from "react-redux";
import { updateColor } from "../../actions/colours.actions";

interface ColourPickerProps {
    colour: string;
    number: number;
}

const ChosenColour = (props: ColourPickerProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const dispatch = useDispatch()

    const onChange = (color: string) => {
        dispatch(updateColor({
            color,
            number: props.number
        }))
    }

    return (
        <div onClick={() => setIsOpen(true)} className="chosen-color" style={{ backgroundColor: props.colour }}>
            {isOpen && <CompactPicker       
                color={props.colour}
                onChange={color => onChange(color.hex)}
                onChangeComplete={() => setIsOpen(false)}
            />}
            {props.number}</div>
    )
}

export default ChosenColour