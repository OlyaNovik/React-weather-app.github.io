import React from 'react';
import { Card } from './card';
import s from './daycard.module.scss';
import { useSelector } from "react-redux";

export const Days = () => {
  const forecast = useSelector((state)=>state.weather.items?.forecast?.forecastday)
  let date =[];
  let maxTemp = [];
  let minTemp =[];
  let textWeather = [];
  let day =[];
 
  let dataArray = forecast?.map((e)=>{
    date.push(e?.date)
    let sliceDay = new Date(e?.date).toString();
    let DayText = sliceDay.split(' ', 1);
    day.push(DayText)
    maxTemp.push(e?.day?.maxtemp_c)
    minTemp.push(e?.day?.mintemp_c)
    textWeather.push(e?.day?.condition?.text)
  })
  
  const days = [
    {
      day: 'Today',
      day_info: date[0],
      icon_id: textWeather[0],
      temp_day: `${maxTemp[0]}°`,
      temp_night: `${minTemp[0]}°`,
      info: textWeather[0],
    },
    {
      day: day[1],
      day_info: date[1],
      icon_id: textWeather[1],
      temp_day: `${maxTemp[1]}°`,
      temp_night: `${minTemp[1]}°`,
      info: textWeather[1],
    },
    {
      day: day[2],
      day_info: date[2],
      icon_id: textWeather[2],
      temp_day: `${maxTemp[2]}°`,
      temp_night: `${minTemp[2]}°`,
      info: textWeather[2],
    },
    {
      day: day[3],
      day_info: date[3],
      icon_id: textWeather[3],
      temp_day: `${maxTemp[3]}°`,
      temp_night: `${minTemp[3]}°`,
      info: textWeather[3],
    },
    {
      day: day[4],
      day_info: date[4],
      icon_id: textWeather[4],
      temp_day: `${maxTemp[4]}°`,
      temp_night: `${minTemp[4]}°`,
      info: textWeather[4],
    },
    {
      day: day[5],
      day_info: date[5],
      icon_id: textWeather[5],
      temp_day: `${maxTemp[5]}°`,
      temp_night: `${minTemp[5]}°`,
      info: textWeather[5],
    },
    {
      day: day[6],
      day_info: date[6],
      icon_id: textWeather[6],
      temp_day: `${maxTemp[6]}°`,
      temp_night: `${minTemp[6]}°`,
      info: textWeather[6],
    },
  ];

  return (
    <>
      <div className={s.days}>
        {days.map((day,index) => (
          <Card  day={day} key={index} />
        ))}
      </div>
    </>
  );
};