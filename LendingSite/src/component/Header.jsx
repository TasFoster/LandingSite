import {useContext } from "react"

import style from "./style/Header.module.css"

import logo from "./assets/logo.png"
import toDark from "./assets/toDark.png"
import toLight from "./assets/toLight.png"

import {currentTheme} from "../Contexts"

function Header({switchTheme}) {

  const theme = useContext(currentTheme)

  return (
    <header className={style.headerWrapper} data_theme = {theme}>
      <img className={style.logo} src={logo} alt="Логотип" />
      <h1 className={style.title}>Самый крутой сайт</h1>
      <button className={style.switchBtnTheme} onClick={switchTheme}>
        {
            theme == "dark" ? <img src={toLight}></img> : <img src={toDark}></img>
        }
      </button>
    </header>
  )
}

export default Header