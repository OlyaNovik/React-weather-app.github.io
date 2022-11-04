import React from "react";
import ThisDay from "./MainComp/ThisDay/ThisDay";
import s from './homePage.module.scss'
import { ThisDayInfo } from "./MainComp/ThisDayInfo/ThisDayInfo";
import { Days } from "./MainComp/DayCard/daycard";

const Home =(props)=>{
    let humidity= props.humidity;
    let pressure =props.pressure;
    let temp = props.temp;
    let city = props.city;
    let country = props.country;
    let feel = props.tempFeel;
    let wind = props.wind;
    let textWeather =props.textWeather;
    let forecast = props.forecast;
    let time = props.time;
    let feelG = Math.trunc(feel)
    let tempG = Math.trunc(temp)
    if(isNaN(tempG) === "true"){
        tempG = 0;
    }
    if(isNaN(feelG) === "true"){
        feelG = 0;
    }

    console.log();
    return(
       <div className={s.home}>
       <div className={s.wrapper}>
        <ThisDay
        time={time}
        forecast={forecast}
        textWeather={textWeather}
        tempG={tempG}
        city ={city}
        country={country}
        />
        <ThisDayInfo
        wind ={wind}
        humidity={humidity}
        pressure={pressure}
        tempG={tempG}
        tempFeel ={feelG}/>
       </div> 
       <Days
        forecast={forecast}
       />
       </div> 

    )
}

export default Home