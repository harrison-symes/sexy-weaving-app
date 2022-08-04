import { TStoreState } from "../reducers";


export const getWidth = (state: TStoreState) => state.settings.width

export const getHeight = (state: TStoreState) => state.settings.height