import {WeatherReducerType} from "../Reducer/WeatherReducerType"

export const WeatherAction = {
addWeather: (data) => ({type: WeatherReducerType.ADD_WEATHER, data})

}