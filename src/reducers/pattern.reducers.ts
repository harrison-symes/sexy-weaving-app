import { reducerWithInitialState } from "typescript-fsa-reducers";
import { flipAllDown, flipAllUp, flipPatternCell } from "../actions/pattern.actions";
import { confirmSettings } from "../actions/settings.actions";
import { cloneDeep } from "lodash"
import { resetApp } from "../actions/weave.actions";
import { loadWeave } from "../actions/savedPatterns.action";

export interface IPatternState {
    board: Array<Array<boolean>>;
    isConfirmed: boolean;
} 

export const initialState: IPatternState = {
    isConfirmed: false,
    board: [],
}

export const patternReducer = reducerWithInitialState(initialState)
    .case(resetApp, () => ({
        ...initialState
    }))
    .case(confirmSettings, (state, payload) => {
        const board = new Array(payload.height).fill(0).map(() => new Array(payload.width).fill(false))

        return {
            ...state,
            board
        }
    })
    .case(flipPatternCell, (state, payload) => {
        const board = cloneDeep(state.board)
        board[payload.row][payload.col] = !board[payload.row][payload.col]

        return {
            ...state,
            board
        }
    })
    .case(flipAllUp, (state) => {
        const board = state.board.map(row => row.map(cell => true))

        return {
            ...state,
            board
        }
    })
    .case(flipAllDown, (state) => {
        const board = state.board.map(row => row.map(cell => false))

        return {
            ...state,
            board
        }
    })
    .case(loadWeave, (state, payload) => ({
        ...state,
        board: payload.pattern,
        isConfirmed: true,
    }))