import { reducerWithInitialState } from "typescript-fsa-reducers";
import { loadWeave } from "../actions/savedPatterns.action";
import { decreaseHeight, decreaseWidth, increaseHeight, increaseWidth, setHeight } from "../actions/settings.actions";
import { resetApp } from "../actions/weave.actions";
import { MAX_WIDTH, MIN_WIDTH, MAX_HEIGHT, MIN_HEIGHT } from "../constants/settings.constants";

export interface ISettingsState {
    width: number;
    height: number;
} 

export const initialState: ISettingsState = {
    width: 8,
    height: 8,
}

export const settingsReducer = reducerWithInitialState(initialState)
    .case(resetApp, () => ({
        ...initialState
    }))
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
    .case(setHeight, (state, payload) => ({
        ...state,
        height: payload
    }))
    .case(loadWeave, (state, payload) => ({
        ...state,
        height: payload.height,
        width: payload.width
    }))