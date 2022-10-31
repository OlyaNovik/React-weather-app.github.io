import React from "react";
import ThisDay from "./MainComp/ThisDay/ThisDay";
import s from './homePage.module.scss'
import { ThisDayInfo } from "./MainComp/ThisDayInfo/ThisDayInfo";
import { Days } from "./MainComp/DayCard/daycard";

const Home =(props)=>{

    let temp = props.temp;
    let city = props.city;
    let tempG = Math.trunc(temp)
    if(isNaN(tempG) === "true"){
        tempG = 0;
    }


    return(
       <div className={s.home}>
       <div className={s.wrapper}>
        <ThisDay
        tempG={tempG}
        city ={city}
        />
        <ThisDayInfo/>
       </div> 
       <Days/>
       </div> 

    )
}

export default Home