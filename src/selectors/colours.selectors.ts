import { TStoreState } from "../reducers";

export const getColours = (state: TStoreState) => state.colours.colours

export const getActiveColor = (state: TStoreState) => {
    if (state.colours.colours.length === 0) {
        return "white"
    }

    const row = state.weave.row

    const colorIndex = row % state.colours.colours.length

    return state.colours.colours[colorIndex]
}