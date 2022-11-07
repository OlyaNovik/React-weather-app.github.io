import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import s from "../Header/Header.module.scss"
import { storage } from "../Storage/Storage";
import Home from "../Page/Home/homepage";
import { GlobalSvgSelector } from "../Style/GlobalSvgSelector";
import { useDispatch, useSelector } from "react-redux";
import { WeatherAction } from '../Redux/Action/WeatherAction'

const Header = () => {
  const dispatch = useDispatch();
  const error = useSelector((state)=> state.weather.items)
  const Api_Key2 = "2a3cd426029b4cc5aa9104658220111"
  const gettingWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    // console.log(city);
    if(city){
    const api_url =
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${Api_Key2}&q=${city}&days=7&aqi=no&alerts=no`)
    .then((data)=> data.json()
    .then((data) => dispatch(WeatherAction.addWeather(data)))
    .catch((error) => {
      alert(error);
      console.error('Error:', error);
    }) )  }
  }
  const [theme, setTheme] = useState(storage.getItem('theme') || 'light')
  storage.setItem('theme', theme);

  function ChangeTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    const root = document.querySelector(':root');
    const components = [
      'body-background',
      'components-background',
      'card-background',
      'card-shown',
      'text-color',
    ]

    components.forEach((component) => {
      root.style.setProperty(`--${component}-default`, `var(--${component}-${theme})`)
    }, [theme])
  })

  return (
    <div>
      <div className="header">
        <header className={s.header}>
          <div className={s.wrapper}>
            <div className={s.logo}>
              <GlobalSvgSelector id="header-logo" />
            </div>
            <div className={s.title}>React weather</div>
          </div>
          <div className={s.wrapper}>
            <div className={s.change_theme} onClick={ChangeTheme}>
              <GlobalSvgSelector id="change-theme" />
            </div>
            <form onSubmit={gettingWeather}>
              <input type="text" name="city" placeholder="  Search..." id="inp" className={s.search_input} />
            </form>
          </div>
        </header>
      </div>
      <Home />
    </div>
  )
}

export default Header;