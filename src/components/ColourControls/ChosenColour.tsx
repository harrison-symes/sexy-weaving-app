import { useState } from "react";
import { CompactPicker } from "react-color";
import { useDispatch } from "react-redux";
import { updateColor } from "../../actions/colours.actions";

interface ColourPickerProps {
    colour: string;
    count: number;
    number: number;
    canEdit: boolean;
}

const ChosenColour = (props: ColourPickerProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const dispatch = useDispatch()

    const onChange = (color: string) => {
        dispatch(updateColor({
            color,
            number: props.number,
            count: props.count
        }))
    }

    const increaseCount = () => {
        dispatch(updateColor({
            color: props.colour,
            number: props.number,
            count: props.count + 1
        }))
    }

    const decreaseCount = () => {
        dispatch(updateColor({
            color: props.colour,
            number: props.number,
            count: props.count - 1
        }))
    }

    return (
        <div className="color-selection-container">
            {props.canEdit && <button disabled={props.count <= 1} onClick={decreaseCount}>-</button>}
            {isOpen && <CompactPicker       
                color={props.colour}
                onChange={color => onChange(color.hex)}
                onChangeComplete={() => setIsOpen(false)}
            />}
            <div className="chosen-color" style={{ backgroundColor: props.colour }} onClick={() => setIsOpen(props.canEdit)}>
                x{props.count}
            </div>
            {props.canEdit && <button onClick={increaseCount}>+</button>}
        </div>
    )
}

export default ChosenColour