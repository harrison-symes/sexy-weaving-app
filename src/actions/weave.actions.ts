import actionCreatorFactory from "typescript-fsa";

const createAction = actionCreatorFactory("WEAVE")

export const nextWeaveRow = createAction("NEXT_ROW")