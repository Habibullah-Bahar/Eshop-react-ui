import React, { useEffect, useState } from 'react'
import LightBtn from '../../assets/website/light-mode-button.png'
import DarkBtn from '../../assets/website/dark-mode-button.png'

const Darkmode = () => {

  const [theme,setTheme] = useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"light" );

  const element = document.documentElement;
  useEffect(()=>{
    if(theme === "dark"){
      element.classList.add("dark");
    }else{
      element.classList.remove("dark");
    }
    localStorage.setItem("theme",theme);

  },[theme])  
  return (
    <div className='relative'>
      <img
      onClick={()=> setTheme(theme === "dark"?"light":"dark")}
      src={LightBtn}
      className={`w-12 cursor-pointer absolute right-0 z-40 ${
        theme === "dark"?"opacity-0":"opacity-100"
      } transition-all duration-300`}
      />
      <img 
      onClick={()=> setTheme(theme === "light"?"dark":"light")}
      src={DarkBtn}
      className={`w-12 cursor-pointer transition-all duration-300`}
      />
    </div>
  )
}

export default Darkmode