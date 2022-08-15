import { reducerWithInitialState } from "typescript-fsa-reducers";
import { setActivePopup } from "../actions/controls.actions";

export type PopupKey = "HeightSlider"

export interface IControlsState {
    activePopup?: PopupKey;
} 

export const initialState: IControlsState = {
    activePopup: undefined,
}

export const controlsReducer = reducerWithInitialState(initialState)
    .case(setActivePopup, (state, key) => ({
        ...state,
        activePopup: state.activePopup !== key ? key : undefined
    }))