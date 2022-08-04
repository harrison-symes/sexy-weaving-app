import { stat } from "fs";
import { reducerWithInitialState } from "typescript-fsa-reducers";
import { addColor, updateColor } from "../actions/colours.actions";

export interface IColoursState {
    colours: Array<string>;
} 

export const initialState: IColoursState = {
    colours: []
}

export const coloursReducer = reducerWithInitialState(initialState)
    .case(addColor, (state, payload) => ({
        ...state,
        colours: [...state.colours, payload.color]
    }))
    .case(updateColor, (state, payload) => {
        const colours = [...state.colours]
        colours[payload.number - 1] = payload.color

        return {
            ...state,
            colours
        }
    })
