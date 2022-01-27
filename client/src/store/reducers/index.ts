import { combineReducers } from "redux";
import { charactersReducer } from "../reducers/charactersReducer";

export const rootReducer = combineReducers({
    characters: charactersReducer
})

export type rootState = ReturnType<typeof rootReducer>