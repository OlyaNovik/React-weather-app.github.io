import React from "react";
import { useEffect, useState} from "react";
import s from './ThisDay.module.scss'
import { GlobalSvgSelector } from "../../../../Style/GlobalSvgSelector";
import ClockBlock from "./ClockBlock";
import { useSelector } from "react-redux";

const ThisDay =(props)=>{
    const [imgtext, setImgText] = useState('sun');
    const current = useSelector((state)=> state.weather?.items)

    // useEffect(()=>{
    //   if(current.error.code === 1006 ){
    //      return current = 0;
    //   }
    //   else return current
    // })

    useEffect(()=>{
      if(current?.current?.condition?.text === 'Sunny'){
        setImgText(prev=> prev = 'sun')
      }
      else if(current?.current?.condition?.text === 'Partly cloudy'){
        setImgText(prev=> prev = 'mainly_cloudy')
      }
      else if(current?.current?.condition?.text === 'Light rain'){
        setImgText(prev=> prev = 'small_rain_sun')
      }
      else if(current?.current?.condition?.text === 'Mist'){
        setImgText(prev=> prev = 'mainly_cloudy')
      }
      else if(current?.current?.condition?.text === 'Patchy rain possible'){
        setImgText(prev=> prev = 'small_rain')
      }
  
    }, [])

    return(
        <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp}>{Math.trunc(current?.current?.temp_c)}°</div>
          <div className={s.this__day_name}>Today</div>
        </div>
        <GlobalSvgSelector id={imgtext}/>
      </div>
      <ClockBlock/>
    </div>

    )}

export default ThisDay