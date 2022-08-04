import actionCreatorFactory from "typescript-fsa";

const createAction = actionCreatorFactory("COLOURS")

export const confirmColours = createAction("CONFIRM_COLOURS")