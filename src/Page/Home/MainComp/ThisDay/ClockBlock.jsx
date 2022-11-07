import React from "react";
import s from './ThisDay.module.scss'
import { useSelector } from "react-redux";

const ClockBlock =(props)=>{
    const current = useSelector((state)=>state.weather?.items)
    let mtime = current.location?.localtime?.split(' ')[1]

    return(
      <div className={s.bottom__block}>
        <div className={s.this__time}>
          Time: <span>{mtime}</span>
        </div>
        <div className={s.this__city}>
          City: <span>{current.location?.name},{current.location?.country}</span>
        </div>
      </div>
    )}

export default ClockBlock