import { reducerWithInitialState } from "typescript-fsa-reducers";
import { confirmPattern } from "../actions/pattern.actions";
import { confirmSettings } from "../actions/settings.actions";
import { confirmColours } from "../actions/colours.actions";
import { resetApp } from "../actions/weave.actions";
import { goToSavedPage, loadWeave, returnToHome } from "../actions/savedPatterns.action";
import { goToStage } from "../actions/router.actions";

export type Stages = "SCALE" | "PATTERN" | "COLOUR" | "WEAVE" | "SAVED";

export interface IRouterState {
    stage: Stages
} 

export const initialState: IRouterState = {
    stage: "SCALE"
}

export const routerReducer = reducerWithInitialState(initialState)
    .case(goToStage, (state, stage) => ({
        ...state,
        stage
    }))
    .case(returnToHome, () => ({
        stage: "SCALE"
    }))
    .case(resetApp, () => ({
        ...initialState
    }))
    .case(confirmSettings, (state) => ({
        ...state,
        stage: "PATTERN"
    }))
    .case(confirmPattern, (state) => ({
        ...state,
        stage: "COLOUR"
    }))
    .case(confirmColours, (state) => ({
        ...state,
        stage: "WEAVE"
    }))
    .case(goToSavedPage, (state) => ({
        ...state,
        stage: "SAVED"
    }))
    .case(loadWeave, (state, payload) => ({
        ...state,
        stage: "WEAVE"
    }))