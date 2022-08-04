import actionCreatorFactory from "typescript-fsa";

const createAction = actionCreatorFactory("PATTERN")

export const flipPatternCell = createAction<{
    row: number;
    col: number;
}>("FLIP_PATTERN_CELL")

export const flipAllUp = createAction("FLIP_ALL_UP")

export const flipAllDown = createAction("FLIP_ALL_DOWN")