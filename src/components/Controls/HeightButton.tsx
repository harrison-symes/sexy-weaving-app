import ControlButton from "./ControlButton"
import { TbLineHeight } from "react-icons/tb"
import { useDispatch } from "react-redux"
import { setActivePopup } from "../../actions/controls.actions"
import HeightSlider from "./HeightSlider"


const HeightButton = () => {
    const dispatch = useDispatch()

    return (
        <>
            <ControlButton
                onClick={() => dispatch(setActivePopup("HeightSlider"))}
                icon={TbLineHeight}
            />
            <HeightSlider />
        </>
    )
}

export default HeightButton