import { isEqual } from "lodash"
import { ISavedWeave } from "../components/Board/LoadBoard"
import { getItem, setItem } from "./utils"

const WEAVE_KEY = "SAVED_WEAVES"

export const getSavedWeaves = (): Array<ISavedWeave> => {
    return getItem(WEAVE_KEY) ?? []
}

export const saveWeave = (weave: ISavedWeave) => {
    const weaves: Array<ISavedWeave> = getSavedWeaves()
    weaves.push(weave)
    setItem(WEAVE_KEY, weaves)

    return weaves
}

export const deleteSavedWeave = (weave: ISavedWeave) => {
    const weaves: Array<ISavedWeave> = getSavedWeaves()
    const filteredWeaves = weaves.filter(w => !isEqual(weave, w))

    setItem(WEAVE_KEY, filteredWeaves)

    return filteredWeaves
}