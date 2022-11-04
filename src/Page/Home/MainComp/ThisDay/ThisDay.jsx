import React from "react";
import { useEffect, useState} from "react";
import s from './ThisDay.module.scss'
import { GlobalSvgSelector } from "../../../../Style/GlobalSvgSelector";
import ClockBlock from "./ClockBlock";

const ThisDay =(props)=>{
    const [imgtext, setImgText] = useState('sun');
    // const [timeNow,setTimeNow] = useState();
   let time = props.time;
   let city = props.city;
   let country =props.country;
    // useEffect(() => {
    //     let secTimer = setInterval( () => {
    //         setTimeNow(new Date().toLocaleTimeString())
    //     },1000)
    
    //     return () => clearInterval(secTimer);
    // }, [timeNow]);

    useEffect(()=>{
      if(props.textWeather === 'Sunny'){
        setImgText(prev=> prev = 'sun')
      }
      else if(props.textWeather === 'Partly cloudy'){
        setImgText(prev=> prev = 'mainly_cloudy')
      }
      else if(props.textWeather === 'Light rain'){
        setImgText(prev=> prev = 'small_rain_sun')
      }
      else if(props.textWeather === 'Mist'){
        setImgText(prev=> prev = 'mainly_cloudy')
      }
      else if(props.textWeather === 'Patchy rain possible'){
        setImgText(prev=> prev = 'small_rain')
      }
  
      
    }, [props.textWeather])

    return(
        <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp}>{props.tempG}°</div>
          <div className={s.this__day_name}>Today</div>
        </div>
        <GlobalSvgSelector id={imgtext}/>
      </div>
      <ClockBlock
      city ={city}
      country={country}
      time={time}
      />
    </div>

    )}

export default ThisDay