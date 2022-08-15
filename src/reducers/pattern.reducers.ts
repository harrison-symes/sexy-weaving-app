import { reducerWithInitialState } from "typescript-fsa-reducers";
import { flipAllDown, flipAllUp, flipPatternCell } from "../actions/pattern.actions";
import { confirmSettings, setHeight } from "../actions/settings.actions";
import { cloneDeep } from "lodash"
import { resetApp } from "../actions/weave.actions";
import { loadWeave } from "../actions/savedPatterns.action";
import { MIN_WIDTH } from "../constants/settings.constants";

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
    .case(setHeight, (state, height) => {
        let newBoard = [...state.board]
        if (state.board.length > height) {
            newBoard = state.board.filter((_, i) => i < height)
        } else {
            const diff = height - state.board.length
            for (let i = 0; i < diff; i++) {
                newBoard.push(new Array(MIN_WIDTH).fill(false))
            }
        }

        return {
            ...state,
            board: newBoard
        }
    })
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