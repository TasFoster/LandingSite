import style from "./style/Header.module.css"
import logo from "./assets/logo.png"

function Header() {
  return (
    <header className={style.headerWrapper}> {/* Лучше использовать <header> */}
      <img className={style.logo} src={logo} alt="Логотип" />
      <h1 className={style.title}>Самый крутой сайт</h1>
    </header>
  )
}

export default Header