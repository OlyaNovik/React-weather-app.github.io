import {WeatherReducerType} from './WeatherReducerType'

const initialState = {
    items: {
    current: {temp_c: 0,feelslike_c: 0,pressure_mb:0,humidity:0,wind_mph:0},
    location:{name:'City',country:'Country',localtime:'00:00'},
},
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