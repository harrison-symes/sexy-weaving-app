import { useState } from 'react'
import { CompactPicker       } from 'react-color'
import { useDispatch } from 'react-redux'
import { addColor } from '../../actions/colours.actions'

const ColourPicker = () => {
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()

    const onAdd = (color: string) => {
        dispatch(addColor({color}))
    }

    return (
        <div className="chosen-color" onClick={() => setIsOpen(true)}>
            {isOpen && <CompactPicker       
                onChange={color => onAdd(color.hex)}
                onChangeComplete={() => setIsOpen(false)}
            />}
            +
        </div>
    )
}

export default ColourPicker