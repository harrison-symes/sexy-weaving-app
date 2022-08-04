import { combineReducers } from "redux";

import { settingsReducer, ISettingsState } from "./settings.reducers"
import { patternReducer, IPatternState } from "./pattern.reducers"
import { routerReducer, IRouterState } from "./router.reducers"
import { coloursReducer, IColoursState } from "./colours.reducers"
import { weaveReducer, IWeaveState } from "./weave.reducers"

export interface TStoreState {
    settings: ISettingsState,
    pattern: IPatternState,
    router: IRouterState,
    colours: IColoursState,
    weave: IWeaveState,
}

export default combineReducers<TStoreState>({
    settings: settingsReducer,
    pattern: patternReducer,
    router: routerReducer,
    colours: coloursReducer,
    weave: weaveReducer
})