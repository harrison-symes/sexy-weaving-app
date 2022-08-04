import { useSelector } from "react-redux"
import ScaleBoard from "../components/Board/ScaleBoard"
import { getAreSettingsConfirmed } from "../selectors/settings.selectors"
import BoardFlip from "./BoardFlip"
import BoardScale from "./BoardScale"

const Router = () => {
    const areSettingsConfirmed = useSelector(getAreSettingsConfirmed)

    if (!areSettingsConfirmed) {
        return (
            <BoardScale />
        )
    }


    return (
        <BoardFlip />
    )
}

export default Router