import { useState, useContext } from "react"

import style from "./style/Card.module.css"

import likeDark from "./assets/likeDark.png"
import like from "./assets/like.png"

import { currentTheme } from "../Contexts"
import Button from "./Button"

function Card({img, content}) {

    const [likes, setLike] = useState(0)

    const theme = useContext(currentTheme)

  return (
    <div className={style.cardWraper} data-theme = {theme}>
      <img src={img} alt="" />
      <p className={style.content} data-theme = {theme}>{content}</p>
      <p>{likes}</p>
      <Button img={theme == "dark" ? likeDark : like} 
        action={()=>setLike(l => l + 1)}>
      </Button>
    </div>
  )
}

export default Card
