import React from 'react';
import { GlobalSvgSelector } from '../../../../Style/GlobalSvgSelector'
import { useEffect,useState } from 'react';
import s from './daycard.module.scss';

export const Card = (props) => {
  const [imgtext, setImgText] = useState('sun')

  useEffect(()=>{
    if(props.day.icon_id === 'Sunny'){
      setImgText(prev=> prev = 'sun')
    }
    else if(props.day.icon_id === 'Partly cloudy'){
      setImgText(prev=> prev = 'mainly_cloudy')
    }
    else if(props.day.icon_id === 'Light freezing'){
      setImgText(prev=> prev = 'Lightsnow')
    }
    else if(props.day.icon_id === 'Light snow'){
      setImgText(prev=> prev = 'Lightsnow')
    }
    else if(props.day.icon_id === 'Heavy snow'){
      setImgText(prev=> prev = 'snow')
    }
    else if(props.day.icon_id === 'Moderate snow'){
      setImgText(prev=> prev = 'snow')
    }
    else if(props.day.icon_id === 'Moderate or heavy snow showers'){
      setImgText(prev=> prev = 'snow')
    }
    else if(props.day.icon_id === 'Light drizzle'){
      setImgText(prev=> prev = 'Lightsnow')
    }
    else if(props.day.icon_id === 'Light rain'){
      setImgText(prev=> prev = 'small_rain_sun')
    }
    else if(props.day.icon_id === 'Mist'){
      setImgText(prev=> prev = 'mainly_cloudy')
    }
    else if(props.day.icon_id === 'Cloudy'){
      setImgText(prev=> prev = 'mainly_cloudy')
    }
    else if(props.day.icon_id === 'Patchy rain possible'){
      setImgText(prev=> prev = 'small_rain')
    }
    else if(props.day.icon_id === 'Overcast'){
      setImgText(prev=> prev = 'mainly_cloudy')
    }
    else if(props.day.icon_id === 'Moderate rain'){
      setImgText(prev=> prev = 'rain')
    }   
  },[props.day.icon_id])
  return (
    <div className={s.card}>
      <div className={s.day}>{props.day.day}</div>
      <div className={s.day__info}>{props.day.day_info}</div>
      <div className={s.img}>
        <GlobalSvgSelector id={imgtext} />
      </div>
      <div className={s.temp__day}>{props.day.temp_day}</div>
      <div className={s.temp__night}>{props.day.temp_night}</div>
      <div className={s.info}>{props.day.info}</div>
    </div>
  );
};
