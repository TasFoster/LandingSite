import { currentTheme } from "../Contexts"

import style from "./style/Button.module.css"
import { memo, useContext} from "react"

const Button = memo(({img, action}) => {

  const theme = useContext(currentTheme)

  return (
    
    <button className={style.btn} data-theme={theme} onClick={action}>
              <img src={img} alt="" /> 
    </button>
    
  )
})

export default Button
