import { reducerWithInitialState } from "typescript-fsa-reducers";
import { loadWeave } from "../actions/savedPatterns.action";
import { nextWeaveRow, previousWeaveRow, resetApp } from "../actions/weave.actions";

export interface IWeaveState {
    row: number;
} 

export const initialState: IWeaveState = {
    row: 0,
}

export const weaveReducer = reducerWithInitialState(initialState)
    .case(resetApp, () => ({
        ...initialState
    }))
    .case(nextWeaveRow, (state) => {
        return {
            ...state,
            row: state.row + 1
        }
    })
    .case(previousWeaveRow, (state) => ({
        ...state,
        row: state.row !== 0 ? state.row - 1 : 0
    }))
    .case(loadWeave, (state, payload) => ({
        ...state,
        row: 0,
    }))
