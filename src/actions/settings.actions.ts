import actionCreatorFactory from "typescript-fsa";

const createAction = actionCreatorFactory("SETTINGS")

export const increaseWidth = createAction("INCREASE_WIDTH")

export const decreaseWidth = createAction("DECREASE_WIDTH")

export const increaseHeight = createAction("INCREASE_HEIGHT")

export const decreaseHeight = createAction("DECREASE_HEIGHT")

export const confirmSettings = createAction<{
    width: number;
    height: number;
}>("CONFIRM_SETTINGS")