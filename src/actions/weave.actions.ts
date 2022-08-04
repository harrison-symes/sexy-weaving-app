import actionCreatorFactory from "typescript-fsa";

const createAction = actionCreatorFactory("WEAVE")

export const nextWeaveRow = createAction("NEXT_ROW")

export const previousWeaveRow = createAction("PREVIOUS_ROW")

export const resetApp = createAction("RESET")