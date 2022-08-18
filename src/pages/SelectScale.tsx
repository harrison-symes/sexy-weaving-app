import ScaleBoard from "../components/Board/ScaleBoard"

import { GiScales } from "react-icons/gi"
import MobileControl from "../components/Control/MobileControl"
import HeightButton from "../components/Controls/HeightButton"
import ConfirmButton from "../components/Controls/ConfirmButton"
import LoadButton from "../components/Controls/LoadButton"
import { useDispatch, useSelector } from "react-redux"
import { getHeight } from "../selectors/settings.selectors"
import { goToStage } from "../actions/router.actions"
import { setHeight } from "../actions/settings.actions"

const SelectScale = () => {
    const dispatch = useDispatch()
    const height = useSelector(getHeight)

    const onConfirm = () => {
        dispatch(setHeight(height))
        dispatch(goToStage("PATTERN"))
    }

    return (
        <div>
            <h1 className="page-header"><GiScales />Choose scale<GiScales /></h1>
            <ScaleBoard />
            <MobileControl>
                <LoadButton />
                <HeightButton />
                <ConfirmButton onConfirm={onConfirm} />
            </MobileControl>
        </div>
    )
}

export default SelectScale