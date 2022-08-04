import actionCreatorFactory from "typescript-fsa";

const createAction = actionCreatorFactory("WEAVE")

export const nextWeaveRow = createAction<{
    maxRows: number
}>("NEXT_ROW")