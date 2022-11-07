import React from "react";
import ThisDay from "./MainComp/ThisDay/ThisDay";
import s from './homePage.module.scss'
import { ThisDayInfo } from "./MainComp/ThisDayInfo/ThisDayInfo";
import { Days } from "./MainComp/DayCard/daycard";


const Home =(props)=>{    
    return(
       <div className={s.home}>
       <div className={s.wrapper}>
        <ThisDay/>
        <ThisDayInfo/>        
       </div> 
       <Days/>       
       </div> 

    )
}

export default Home