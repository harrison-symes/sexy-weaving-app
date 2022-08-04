import { reducerWithInitialState } from "typescript-fsa-reducers";
import { decreaseHeight, decreaseWidth, increaseHeight, increaseWidth } from "../actions/settings.actions";

export interface ISettingsState {
    width: number;
    height: number;
} 

export const initialState: ISettingsState = {
    width: 8,
    height: 8,
}

const MAX_WIDTH = 10
const MIN_WIDTH = 4
const MAX_HEIGHT = 10
const MIN_HEIGHT = 4

export const settingsReducer = reducerWithInitialState(initialState)
    .case(increaseWidth, (state) => {
        const newWidth = state.width + 1
        if (newWidth > MAX_WIDTH) {
            return state
        }

        return {
            ...state,
            width: newWidth
        }
    })
    .case(decreaseWidth, (state) => {
        const newWidth = state.width - 1
        if (newWidth < MIN_WIDTH) {
            return state
        }

        return {
            ...state,
            width: newWidth
        }
    })
    .case(increaseHeight, (state) => {
        const newHeight = state.height + 1
        if (newHeight > MAX_HEIGHT) {
            return state
        }

        return {
            ...state,
            height: newHeight
        }
    })
    .case(decreaseHeight, (state) => {
        const newHeight = state.height - 1
        if (newHeight < MIN_HEIGHT) {
            return state
        }

        return {
            ...state,
            height: newHeight
        }
    })