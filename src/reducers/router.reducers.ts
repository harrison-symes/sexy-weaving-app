import { reducerWithInitialState } from "typescript-fsa-reducers";
import { confirmPattern, flipAllDown, flipAllUp, flipPatternCell } from "../actions/pattern.actions";
import { confirmSettings } from "../actions/settings.actions";
import { cloneDeep } from "lodash"
import { confirmColours } from "../actions/colours.actions";

export interface IRouterState {
    stage: "SCALE" | "PATTERN" | "COLOUR" | "WEAVE"
} 

export const initialState: IRouterState = {
    stage: "SCALE"
}

export const routerReducer = reducerWithInitialState(initialState)
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