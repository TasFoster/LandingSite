import Button from "./component/Button"
import Card from "./component/Card.jsx"
import Footer from "./component/Footer"
import Header from "./component/Header"
import style from "./App.module.css"
function App() {
  return (
    <>
      <div className={style.main}>
        <Header></Header>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
