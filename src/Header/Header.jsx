import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import s  from "../Header/Header.module.scss"
import { storage } from "../Storage/Storage";
import Home from "../Page/Home/homepage";
import { GlobalSvgSelector   } from "../Style/GlobalSvgSelector";

const Header = ()=>{
  const [temp,setTemp] = useState(0)
  const [city,setCity] = useState('City')
  const [country,setCountry] = useState('Country')
  const [pressure, setPressure] =useState(0)
  const [tempFeel, setTempFeel] = useState(0)
  const [error,setError] = useState(undefined)
  const [humidity , setHumidity] = useState(0)
  const [wind, setWind] = useState(0)
  const [textWeather, setTextWeather] = useState('Weather download')
  const [time, setTime] =useState('');


  const [ forecast,setForecast] =useState([])

  const Api_Key2 = "2a3cd426029b4cc5aa9104658220111"
  // const Api_Key="e1c3073370da8945c207bf35873fb9f3"
  const gettingWeather = async (event)=> {
     event.preventDefault();
     const city = event.target.elements.city.value;
     console.log(city);
     const api_url = await
      // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}&units=metric`);
     fetch(`https://api.weatherapi.com/v1/forecast.json?key=${Api_Key2}&q=${city}&days=7&aqi=no&alerts=no`)
     const data = await api_url.json();
     console.log(data);
     setTemp(prev => prev = data.current.temp_c)
     setCity(prev => prev = data.location.name)
     setCountry(prev => prev = data.location.country)
     setPressure(prev => prev= data.current.pressure_mb)
     setHumidity(prev => prev = data.current.humidity)
     setWind(prev=> prev = data.current.wind_mph)
     setTempFeel(prev => prev = data.current.feelslike_c)
     setTextWeather(prev => prev = data.current.condition.text)
     setForecast(prev=>prev = data.forecast.forecastday)
     setTime(prev => prev = data.location.localtime)
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
       <input type="text" name="city" placeholder="  Search..." id="inp" className={s.search_input} />
        </form>
      </div>
    </header>
        </div>
        <Home
        time ={time}
        forecast ={forecast}
        textWeather={textWeather}
        pressure= {pressure}
        temp={temp}
        wind={wind}
        tempFeel ={tempFeel}
        city={city}
        country={country}
        humidity={humidity}
        error={error}
       />
        </div>
    )
}

export default Header;