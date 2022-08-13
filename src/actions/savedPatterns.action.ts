import actionCreatorFactory from "typescript-fsa";
import { ISavedWeave } from "../components/Board/LoadBoard";

const createAction = actionCreatorFactory("LOAD_PATTERN")

export const goToSavedPage = createAction("GO_TO_SAVED_PAGE")

export const loadWeave = createAction<ISavedWeave>("LOAD_WEAVE")

export const returnToHome = createAction("RETURN_TO_HOME")