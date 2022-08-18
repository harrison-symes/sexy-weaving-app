import { useState } from 'react'
import { CompactPicker       } from 'react-color'
import { useDispatch } from 'react-redux'
import { addColor } from '../../actions/colours.actions'
import ControlButton from './ControlButton'
import {FaPaintBrush} from "react-icons/fa"

const AddColour = () => {
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()

    const onAdd = (color: string) => {
        dispatch(addColor({color}))
    }

    return (
        <>
            {isOpen && <CompactPicker       
                onChange={color => onAdd(color.hex)}
                onChangeComplete={() => setIsOpen(false)}
            />}
            <ControlButton
                icon={FaPaintBrush}
                onClick={() => setIsOpen(true)}
            />
        </>
    )
}

export default AddColour