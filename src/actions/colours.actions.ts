import actionCreatorFactory from "typescript-fsa";

const createAction = actionCreatorFactory("COLOURS")

export const confirmColours = createAction("CONFIRM_COLOURS")

export const addColor = createAction<{color: string}>("ADD_COLOUR")

export const updateColor = createAction<{
    color: string;
    number: number;
}>("UPDATE_COLOUR")