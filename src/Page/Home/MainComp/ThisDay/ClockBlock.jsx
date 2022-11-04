import React from "react";
import { useEffect, useState} from "react";
import s from './ThisDay.module.scss'


const ClockBlock =(props)=>{
    const [timeNow,setTimeNow] = useState('00:00');
    
    // console.log(time);
    useEffect(() => {
        let mtime = props.time.split(' ')
        let time = mtime[1];
        let secTimer = setInterval( () => {
            setTimeNow(prev => prev = time)
        },1000)
    
        return () => clearInterval(secTimer);
    });


    return(
      <div className={s.bottom__block}>
        <div className={s.this__time}>
          Time: <span>{timeNow}</span>
        </div>
        <div className={s.this__city}>
          City: <span>{props.city},{props.country}</span>
        </div>
      </div>
    )}

export default ClockBlock