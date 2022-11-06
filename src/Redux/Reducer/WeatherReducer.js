import {WeatherReducerType} from './WeatherReducerType'

const initialState = {
    items: {},
    error: null,
    loading: false
}

const WeatherReducer =(state = initialState,action)=>{
    switch(action.type){
        case WeatherReducerType.ADD_WEATHER:
            return{
                ...state,
                items: action.data
            }
        case WeatherReducerType.SET_LOADING:
            return {
                ...state,
                loading: action.loading
            }
        case WeatherReducerType.SET_ERROR:
            return {
                ...state,
                error: action.error
            }
            default:
                return state
    }
}
export default WeatherReducer;