import { useDispatch } from "react-redux"
import { resetApp } from "../actions/weave.actions"

import { GiYarn, GiRolledCloth } from "react-icons/gi"

export const Header = () => {
    const dispatch = useDispatch()
    
    const onReset = () => {
        dispatch(resetApp())
    }

    return (
        <header className="App-header">
            <h1>🐞 Weevil 🐞</h1>
            <div className="App-subheader">
                <button onClick={onReset}>Reset</button>
                <h2><GiRolledCloth />Putting the "tech" in "textiles"<GiYarn /></h2>
            </div>
        </header>
    )
}

