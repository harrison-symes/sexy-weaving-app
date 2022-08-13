import { TStoreState } from "../reducers";

export const getColourSelection = (state: TStoreState) => state.colours.colours

export const getColours = (state: TStoreState) => state.colours.colours
    .reduce((accum, color) => {
        for (let i = 0; i < color.count; i++) {
            accum.push(color.colour)
        }

        return [...accum]
    }, [] as Array<string>)


export const getActiveColor = (state: TStoreState) => {
    const selectedColours = getColours(state)
    if (selectedColours.length === 0) {
        return "white"
    }

    const row = state.weave.row

    const colorIndex = row % selectedColours.length

    return selectedColours[colorIndex]
}