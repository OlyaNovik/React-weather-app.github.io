import { combineReducers, createStore } from "redux";
import {composeWithDevToolsDevelopmentOnly} from '@redux-devtools/extension'
import WeatherReducer from './Reducer/WeatherReducer'

const rootReducer = combineReducers({
    weather: WeatherReducer,
})

const composeEnhancers = composeWithDevToolsDevelopmentOnly({
    trace: true,
    traceLimit:25,
}) 

const store = createStore(rootReducer, composeEnhancers())

export default store;;