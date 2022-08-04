import { useSelector } from "react-redux"
import { getCurrentStage } from "../selectors/router.selectors"
import SelectColour from "./SelectColour"
import SelectPattern from "./SelectPattern"
import SelectScale from "./SelectScale"
import Weave from "./Weave"

const Router = () => {
    const stage = useSelector(getCurrentStage)

    switch(stage) {
        case "SCALE":
            return <SelectScale />
        case "PATTERN":
            return <SelectPattern />
        case "COLOUR":
            return <SelectColour />
        case "WEAVE":
            return <Weave />
        default:
            return null
    }
}

export default Router