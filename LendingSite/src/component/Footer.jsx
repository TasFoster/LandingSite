import { useContext } from "react"

import logo from "./assets/logo.png"
import style from "./style/Footer.module.css"

import {currentTheme} from "../Contexts"

function Footer() {
  
  const theme = useContext(currentTheme)

  return (
    <footer className={style.footerWrapper} data_theme = {theme}>
      <img className={style.logo} src={logo} alt="Логотип" />
      <h2 className={style.title}>Самый крутой сайт</h2>
    </footer>
  )
}

export default Footer
