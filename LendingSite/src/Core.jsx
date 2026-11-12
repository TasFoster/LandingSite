import { Routes, Route, Link } from "react-router"
import App from "./App"

import { useState } from "react"
import Button from "./component/Button"
import Card from "./component/Card.jsx"
import Footer from "./component/Footer"
import Header from "./component/Header"
import { currentTheme } from "./Contexts"

import catImg from "./component/assets/Cat.jpg"
import logo from "./component/assets/logo.png"

import style from "./Core.module.css"

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



function Core(){

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
        <>
            <currentTheme.Provider value={theme}>
                <Header switchTheme={switchTheme}></Header>
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path="/second" element={<h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae minus est animi neque harum obcaecati ut magni labore. Aperiam doloribus beatae quis vitae suscipit. Amet ducimus minima facilis suscipit laudantium.</h1>}/>
                </Routes>
                <Footer></Footer>
            </currentTheme.Provider>
        </>
    )
}

export default Core