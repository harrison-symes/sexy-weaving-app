import ControlButton from "./ControlButton"
import { RiSave3Fill } from "react-icons/ri"
import { useSelector } from "react-redux";
import { saveWeave } from "../../localstorage/savedPatterns";
import { getWeaveData } from "../../selectors/weave.selectors";

const SavePatternButton = () => {
    const weaveData = useSelector(getWeaveData)

    const onClick = () => {
        saveWeave(weaveData)
    }

    return (
        <ControlButton
            onClick={onClick}
            icon={RiSave3Fill}
        />
    )
}

export default SavePatternButton