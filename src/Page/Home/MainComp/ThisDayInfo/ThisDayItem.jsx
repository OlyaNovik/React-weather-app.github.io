import React from 'react';
import { IndicatorSvgSelector} from '../../../../Style/IndicatorSvgSelector'
// import { item } from './ThisDayInfo';
import s from './ThisDayInfo.module.scss';


export const ThisDayItem = (props) => {
  const { icon_id, name, value } = props.item;
  return (
    <div className={s.item}>
      <div className={s.indicator}>
        <IndicatorSvgSelector id={icon_id} />
      </div>
      <div className={s.indicator__name}>{name}</div>
      <div className={s.indicator__value}>{value}</div>
    </div>
  );
};
