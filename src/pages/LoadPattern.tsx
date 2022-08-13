import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { returnToHome } from "../actions/savedPatterns.action"
import LoadBoard, { ISavedWeave } from "../components/Board/LoadBoard"
import { deleteSavedWeave, getSavedWeaves } from "../localstorage/savedPatterns"

export const LoadPattern = () => {
    const [savedWeaves, setSavedWeaves] = useState<Array<any>>([])
    const dispatch = useDispatch()

    useEffect(() => {
        setSavedWeaves(getSavedWeaves())
    }, [])


    const onDeletePattern = (weave: ISavedWeave) => {
        const newWeaves = deleteSavedWeave(weave)
        setSavedWeaves(newWeaves)
    }

    return (
        <div>
            <button onClick={() => dispatch(returnToHome())}>Back to home</button>
            {savedWeaves.map(weave => (
                <LoadBoard 
                    weave={weave}
                    onDeletePattern={() => onDeletePattern(weave)}
                />
            ))}
        </div>
    )
}