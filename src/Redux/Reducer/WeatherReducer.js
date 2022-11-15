import {WeatherReducerType} from './WeatherReducerType'

const initialState = {
    items: {},
}
const WeatherReducer =(state = initialState,action)=>{
    switch(action.type){
        case WeatherReducerType.ADD_WEATHER:
            return{
                ...state,
                items: action.data
            }
            default:
                return state
    }
}
export default WeatherReducer;