import actionCreatorFactory from "typescript-fsa";
import { Stages } from "../reducers/router.reducers";

const createAction = actionCreatorFactory("ROUTER")

export const goToStage = createAction<Stages>("GO_TO_STAGE")