import React from "react";
import { useEffect, useState} from "react";
import s from './ThisDay.module.scss'
import { GlobalSvgSelector } from "../../../../Style/GlobalSvgSelector";
import { useSelector } from "react-redux";

const ThisDay =()=>{
    const [imgtext, setImgText] = useState('sun');
    const current = useSelector((state)=> state.weather?.items)
    let mtime = current.location?.localtime?.split(' ')[1]
    useEffect(()=>{
      if(current?.current?.condition?.text === 'Sunny'){
        setImgText(prev=> prev = 'sun')
      }
      else if(current?.current?.condition?.text === 'Light snow shower'){
        setImgText(prev=> prev = 'Lightsnow')
      }
      else if(current?.current?.condition?.text === 'Light freezing'){
        setImgText(prev=> prev = 'Lightsnow')
      }
      else if(current?.current?.condition?.text === 'Light snow'){
        setImgText(prev=> prev = 'Lightsnow')
      }
      else if(current?.current?.condition?.text === 'Heavy snow'){
        setImgText(prev=> prev = 'snow')
      }
      else if(current?.current?.condition?.text === 'Moderate snow'){
        setImgText(prev=> prev = 'snow')
      }
      else if(current?.current?.condition?.text === 'Partly cloudy'){
        setImgText(prev=> prev = 'mainly_cloudy')
      }
      else if(current?.current?.condition?.text === 'Cloudy'){
        setImgText(prev=> prev = 'mainly_cloudy')
      }
      else if(current?.current?.condition?.text === 'Fog'){
        setImgText(prev=> prev = 'mainly_cloudy')
      }
      else if(current?.current?.condition?.text === 'Overcast'){
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
  
    }, [current])

    return(
        <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp}>{Math.trunc(current?.current?.temp_c)}°</div>
          <div className={s.this__day_name}>Today</div>
        </div>
        <GlobalSvgSelector id={imgtext}/>
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__time}>
          Time: <span>{mtime}</span>
        </div>
        <div className={s.this__city}>
          City: <span>{current.location?.name},{current.location?.country}</span>
        </div>
      </div>
    </div>

    )}

export default ThisDay