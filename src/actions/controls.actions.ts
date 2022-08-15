import actionCreatorFactory from "typescript-fsa";
import { PopupKey } from "../reducers/controls.reducers";

const createAction = actionCreatorFactory("CONTROLS")

export const setActivePopup = createAction<PopupKey>("SET_ACTIVE_POPUP")
export const closeActivePopup = createAction("CLOSE_ACTIVE_POPUP")