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
      value: '20° - ощущается как 17°',
    },
    {
      icon_id: 'pressure',
      name: 'Тиск',
      value: '765 мм ртутного столба - нормальное',
    },
    {
      icon_id: 'precipitation',
      name: 'Опади',
      value: 'Без осадков',
    },
    {
      icon_id: 'wind',
      name: 'Вітер',
      value: '3 м/с юго-запад - легкий ветер',
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

