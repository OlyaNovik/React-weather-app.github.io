import React from "react";
import { useEffect, useState} from "react";
import s from './ThisDay.module.scss'
import { GlobalSvgSelector } from "../../../../Style/GlobalSvgSelector";

const ThisDay =()=>{
    // const timeNow = new Date().toLocaleTimeString();

    const [timeNow,setTimeNow] = useState()
    useEffect(() => {
        let secTimer = setInterval( () => {
            setTimeNow(new Date().toLocaleTimeString())
        },1000)
    
        return () => clearInterval(secTimer);
    }, []);



    return(
        <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp}>20°</div>
          <div className={s.this__day_name}>Сегодня</div>
        </div>
        <GlobalSvgSelector id="sun" />
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__time}>
          Час: <span>{timeNow}</span>
        </div>
        <div className={s.this__city}>
          Місто: <span>Львів</span>
        </div>
      </div>
    </div>
    )
}

export default ThisDay