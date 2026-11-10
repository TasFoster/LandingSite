import { useState, useContext } from "react"

import style from "./style/Card.module.css"
import catImg from "./assets/Cat.jpg"
import likeDark from "./assets/likeDark.png"
import like from "./assets/like.png"

import { currentTheme } from "../Contexts"

function Card() {

  let lorem = `Lorem ipsum dolor sit amet consectetur 
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

    const [likes, setLike] = useState(0)

    const theme = useContext(currentTheme)

  return (
    <div className={style.cardWraper} data-theme = {theme}>
      <img src={catImg} alt="" />
      <p className={style.content} data-theme = {theme}>{lorem}</p>
      <p>{likes}</p>
      <button onClick={()=>setLike(l => l + 1)}>
        {theme == "dark" ?
        <img src={likeDark} alt="" /> :
        <img src={like} alt="" />}
      </button>
    </div>
  )
}

export default Card
