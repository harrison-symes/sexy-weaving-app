import { ISavedWeave } from "../components/Board/LoadBoard";
import { TStoreState } from "../reducers";


export const getWeaveRow = (state: TStoreState) => {
    const row = state.weave.row
    const total = state.pattern.board.length

    const rowToHighlight = row % total

    return state.pattern.board.length -1 - rowToHighlight
}

export const getWeaveData = (state:TStoreState): ISavedWeave => {
    return {
        width: state.settings.width,
        height: state.settings.height,
        colours: state.colours.colours,
        pattern: state.pattern.board,
    }
}