import { reducerWithInitialState } from "typescript-fsa-reducers";

export interface IColoursState {
} 

export const initialState: IColoursState = {
}

export const coloursReducer = reducerWithInitialState(initialState)
