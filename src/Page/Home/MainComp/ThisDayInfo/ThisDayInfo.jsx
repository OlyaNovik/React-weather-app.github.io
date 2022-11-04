import React from 'react';
// import Select from 'react-select';
import s from './ThisDayInfo.module.scss';
import cloud from '../../../../Image/Cloud.png';
import { ThisDayItem } from './ThisDayItem';

export const ThisDayInfo = (props) => {
  const items = [
    {
      icon_id: 'temp',
      name: 'Температура',
      value: `${props.tempG}° - відчувається як ${props.tempFeel}°`,
    },
    {
      icon_id: 'pressure',
      name: 'Тиск',
      value: `${props.pressure} мм ртутного стовпчика`,
    },
    {
      icon_id: 'precipitation',
      name: 'Вологість',
      value: `${props.humidity}%`,
    },
    {
      icon_id: 'wind',
      name: 'Вітер',
      value: `${props.wind} м/с`,
    },
  ];
  return (
    <div className={s.this__day_info}>
      <div className={s.this__day_info_items}>
        {items.map((item) => (
          <ThisDayItem key={item.icon_id} item={item} />
        ))}
      </div>
      <img className={s.cloud__img} src={cloud} alt="облако" />
    </div>
  );
};

