import { useDispatch } from "react-redux"
import { resetApp } from "../actions/weave.actions"

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
                <h2>Putting the "tech" in "textiles"</h2>
            </div>
        </header>
    )
}

