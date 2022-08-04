import { TStoreState } from "../reducers";


export const getWeaveRow = (state: TStoreState) => {
    const row = state.weave.row
    const total = state.pattern.board.length

    const rowToHighlight = row % total

    return state.pattern.board.length -1 - rowToHighlight
}