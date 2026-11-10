import { useState } from "react"
import Button from "./component/Button"
import Card from "./component/Card.jsx"
import Footer from "./component/Footer"
import Header from "./component/Header"
import style from "./App.module.css"
import { currentTheme } from "./Contexts"

import catImg from "./component/assets/Cat.jpg"
import logo from "./component/assets/logo.png"

const lorem = `Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Dolore possimus, iste eum et
                neque aliquam doloribus modi placeat asperiores
                 esse harum minus dolores tenetur? Eum in 
                 sapiente corrupti mollitia voluptatum?
                 Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Dolore possimus, iste eum et
                neque aliquam doloribus modi placeat asperiores
                 esse harum minus dolores tenetur? Eum in 
                 sapiente corrupti mollitia voluptatum?
                 Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Dolore possimus, iste eum et
                neque aliquam doloribus modi placeat asperiores
                 esse harum minus dolores tenetur? Eum in 
                 sapiente corrupti mollitia voluptatum?
                 Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Dolore possimus, iste eum et
                neque aliquam doloribus modi placeat asperiores
                 esse harum minus dolores tenetur? Eum in 
                 sapiente corrupti mollitia voluptatum?`

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
          <Card img={catImg} content={lorem}></Card>
          <Card img={logo} content={"Кирилл toLight КириллКириллКириллКириллКириллКириллКириллКириллКириллКириллКириллКириллКириллКириллКириллКириллКириллКириллКириллКириллКириллКириллКириллКириллКириллКириллКириллКирилл"}></Card>
          <Card img={catImg} content={lorem}></Card>
        </div>     
        <Footer></Footer>
      </div>
    </currentTheme.Provider>
  )
}

export default App
