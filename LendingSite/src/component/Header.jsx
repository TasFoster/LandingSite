import {useContext } from "react"
import { Link } from "react-router"

import style from "./style/Header.module.css"

import logo from "./assets/logo.png"
import toDark from "./assets/toDark.png"
import toLight from "./assets/toLight.png"

import {currentTheme} from "../Contexts"

import Button from "./Button"

function Header({switchTheme}) {

  const theme = useContext(currentTheme)

  return (
    <header className={style.headerWrapper} data_theme = {theme}>
      <img className={style.logo} src={logo} alt="Логотип" />
      <h1 className={style.title}>Самый крутой сайт</h1>
      <Link className={style.btnLink} to="/"> На главную</Link>
      <Link className={style.btnLink} to="/second"> Доп</Link>
      <Button img={theme == "dark" ? toLight : toDark} 
        action={switchTheme}>
      </Button>
    </header>
  )
}

export default Header