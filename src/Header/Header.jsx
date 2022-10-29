import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import s  from "../Header/Header.module.scss"
import { GlobalSvgSelector   } from "../Style/GlobalSvgSelector";

const Header = ()=>{

const [theme,setTheme] = useState('light')


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
       <input type="text" placeholder="  Search..." className={s.search_input} />
      </div>
    </header>
        </div>
    )
}

export default Header;