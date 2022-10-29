import React from 'react';
import { GlobalSvgSelector } from '../../../../Style/GlobalSvgSelector'

import s from './daycard.module.scss';

export const Card = (props) => {
  return (
    <div className={s.card}>
      <div className={s.day}>{props.day.day}</div>
      <div className={s.day__info}>{props.day.day_info}</div>
      <div className={s.img}>
        <GlobalSvgSelector id={props.day.icon_id} />
      </div>
      <div className={s.temp__day}>{props.day.temp_day}</div>
      <div className={s.temp__night}>{props.day.temp_day}</div>
      <div className={s.info}>{props.day.info}</div>
    </div>
  );
};
