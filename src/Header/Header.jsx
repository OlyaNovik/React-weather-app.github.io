import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import s  from "../Header/Header.module.scss"
import { storage } from "../Storage/Storage";
import Home from "../Page/Home/homepage";
import { GlobalSvgSelector   } from "../Style/GlobalSvgSelector";

const Header = ()=>{
  const [temp,setTemp] = useState(undefined)
  const [city,setCity] = useState(undefined)
  const [country,setCountry] = useState(undefined)
  const [sunrise,setSunRise] = useState(undefined)
  const [sunset,setSunSet] = useState(undefined)
  const [error,setError] = useState(undefined)

  const Api_Key="e1c3073370da8945c207bf35873fb9f3"
  const gettingWeather = async (event)=> {
     event.preventDefault();
     const city = event.target.elements.city.value;
     console.log(city);
     const api_url = await
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}&units=metric`);
     const data = await api_url.json();
     console.log(data);
     setTemp(prev => prev = data.main.temp)
     setCity(prev => prev = data.name)
     setCountry(prev => prev = data.sys.country)
     setSunRise(prev=> prev=data.sys.sunrise)
     setSunSet(prev => prev = data.sys.sunset)
     setError('')
  }
const [theme,setTheme] = useState(storage.getItem('theme') || 'light')
storage.setItem('theme', theme);

function ChangeTheme(){
  setTheme(theme === 'light' ? 'dark' : 'light')
  }

useEffect(()=>{
  const root = document.querySelector(':root');
  const components = [
    'body-background',
    'components-background',
    'card-background',
    'card-shown',
    'text-color',
]

  components.forEach((component)=>{
     root.style.setProperty(`--${component}-default`, `var(--${component}-${theme})`)
},[theme])
  })
 
    return(
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
       <input type="text" name="city" placeholder="  Search..." className={s.search_input} />
        </form>
      </div>
    </header>
        </div>
        <Home
        temp={temp}
        city={city}
        country={country}
        sunrise={sunrise}
        sunset={sunset}
        error={error}
        />
        </div>
    )
}

export default Header;