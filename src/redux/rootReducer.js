import {combineReducers} from 'redux'
import {appReducer} from "./Reducers/appReducer";



export const rootReducer = combineReducers({
    appReducer:appReducer
})