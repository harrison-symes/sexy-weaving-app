import { stat } from "fs";
import { reducerWithInitialState } from "typescript-fsa-reducers";
import { addColor, updateColor } from "../actions/colours.actions";
import { resetApp } from "../actions/weave.actions";

export interface ColourSelection {
    colour: string;
    count: number;
}

export interface IColoursState {
    colours: Array<ColourSelection>;
} 

export const initialState: IColoursState = {
    colours: []
}

export const coloursReducer = reducerWithInitialState(initialState)
    .case(resetApp, () => ({
        ...initialState
    }))
    .case(addColor, (state, payload) => ({
        ...state,
        colours: [
            ...state.colours, {
                colour: payload.color,
                count: 1
            }
        ]
    }))
    .case(updateColor, (state, payload) => {
        const colours = [...state.colours]
        const targetColour = colours[payload.number - 1]

        colours[payload.number - 1] = {
            ...targetColour,
            colour: payload.color,
            count: payload.count
        }

        return {
            ...state,
            colours
        }
    })
