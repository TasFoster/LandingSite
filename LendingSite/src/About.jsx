import { Component } from "react"

import Button from "./component/Button"
import catImg from "./component/assets/Cat.jpg"

class About extends Component{

    prom = null


    constructor(){
        super()
        this.state = {test: 3}
        this.testFunk = this.testFunk.bind(this)
    }

    testFunk(){
        this.setState( (prev) => ({test: prev.test + 1}))
    }

    render(){
        return (<>
            <h1>{this.props.testText}</h1>
            <h1>{this.state.test}</h1>
            <Button img={catImg} action={this.testFunk}></Button>
            </>
        )
    }
}



export default About