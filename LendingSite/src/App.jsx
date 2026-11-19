import { lazy, Suspense, use, useState, useEffect } from "react"
import Button from "./component/Button"
const Card = lazy(() => import("./component/Card.jsx"))
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


function Prom({promise}){
  use(promise)
  return null
}



function App() {
  let stas = 0

  stas = new Promise(
        (resolve) => { 
          setTimeout(
            () => {
              resolve()
            },
            10000
          )
        }
      )

  console.log(stas)

  return (
      <div className={style.main}>
        <div className={style.cardsGrid}>
          <Suspense fallback={<p>ЗАГРУЗКА...</p>}> 
          <Prom promise={stas}></Prom>
           <Card img={catImg} content={lorem}></Card>
          <Card img={logo} content={"Кирилл toLight КириллКириллКириллКириллКириллКириллКириллКириллКириллКириллКириллКириллКириллКириллКириллКириллКириллКириллКириллКириллКириллКириллКириллКириллКириллКириллКириллКирилл"}></Card>
          <Card img={catImg} content={lorem}></Card>
          </Suspense>
        </div>     
      </div>
  )
}

export default App
