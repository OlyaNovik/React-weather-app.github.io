
import s from './ThisDayInfo.module.scss';
import cloud from '../../../../Image/Cloud.png';
import { ThisDayItem } from './ThisDayItem';
import { useSelector } from "react-redux";

export const ThisDayInfo = (props) => {
  const weather = useSelector((state)=> state.weather?.items?.current)

  const items = [
    {
      icon_id: 'temp',
      name: 'Temperature',
      value: `${weather?.temp_c}° - feels like ${weather?.feelslike_c}°`,
    },
    {
      icon_id: 'pressure',
      name: 'Pressure',
      value: `${weather?.pressure_mb} мм mercury column`,
    },
    {
      icon_id: 'precipitation',
      name: 'Humidity',
      value: `${weather?.humidity}%`,
    },
    {
      icon_id: 'wind',
      name: 'Wind',
      value: `${weather?.wind_mph} m/s`,
    },
  ];
  return (
    <div className={s.this__day_info}>
      <div className={s.this__day_info_items}>
        {items.map((item) => (
          <ThisDayItem key={item.icon_id} item={item} />
        ))}
      </div>
      <img className={s.cloud__img} src={cloud} alt="хмара" />
    </div>
  );
};

