import { useState } from "react"
import Button from "./component/Button"
import Card from "./component/Card.jsx"
import Footer from "./component/Footer"
import Header from "./component/Header"
import style from "./App.module.css"
import { currentTheme } from "./Contexts"

function App() {
  const [theme, setTheme] = useState("dark")
  function switchTheme(){
      if (theme == "light"){
        setTheme("dark")
        return null
      }
      if (theme == "dark"){
        setTheme("light")
        return null
      }
  }

  return (
    <currentTheme.Provider value={theme}>
      <div className={style.main}>
        <Header switchTheme={switchTheme}></Header>
        <div className={style.cardsGrid}>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
        
        <Footer></Footer>
      </div>
    </currentTheme.Provider>
  )
}

export default App
