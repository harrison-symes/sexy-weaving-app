import { reducerWithInitialState } from "typescript-fsa-reducers";
import { confirmSettings, decreaseHeight, decreaseWidth, increaseHeight, increaseWidth } from "../actions/settings.actions";
import { MAX_WIDTH, MIN_WIDTH, MAX_HEIGHT, MIN_HEIGHT } from "../constants/settings.constants";

export interface ISettingsState {
    width: number;
    height: number;
    isConfirmed: boolean;
} 

export const initialState: ISettingsState = {
    width: 8,
    height: 8,
    isConfirmed: false
}

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
    .case(confirmSettings, (state) => ({
        ...state,
        isConfirmed: true
    }))