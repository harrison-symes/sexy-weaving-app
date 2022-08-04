import { reducerWithInitialState } from "typescript-fsa-reducers";
import { nextWeaveRow } from "../actions/weave.actions";

export interface IWeaveState {
    row: number;
} 

export const initialState: IWeaveState = {
    row: 0,
}

export const weaveReducer = reducerWithInitialState(initialState)
    .case(nextWeaveRow, (state) => {
        return {
            ...state,
            row: state.row + 1
        }
    })
