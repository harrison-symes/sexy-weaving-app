import { combineReducers } from "redux";

import { settingsReducer, ISettingsState } from "./settings.reducers"
import { patternReducer, IPatternState } from "./pattern.reducers"

export interface TStoreState {
    settings: ISettingsState,
    pattern: IPatternState,
}

export default combineReducers<TStoreState>({
    settings: settingsReducer,
    pattern: patternReducer,
})