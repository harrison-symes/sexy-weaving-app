import { combineReducers } from "redux";

import { settingsReducer, ISettingsState } from "./settings.reducers"

export interface TStoreState {
    settings: ISettingsState
}

export default combineReducers({
    settings: settingsReducer,
})