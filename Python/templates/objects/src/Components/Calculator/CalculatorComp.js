import React, { Component } from 'react';
import { add, subtract, multiply, divide } from './CalculatorLogic'
import './CalculatorStyle.css'

class Calculator extends Component {
    constructor() {
        super()
        this.state = {
          numberOne: 0,
          numberTwo: 0,
          current: '' 
        }
    }
    numChange = (event) => {
      if (event.target.id === "num1" && this.state.current === '') {
        return(this.setState({numberOne: Number(event.target.value)}))
      } else if (event.target.id === "num1" && this.state.current !== '') {
        return(this.setState({numberTwo: Number(event.target.value)}))
      }
    }
    handleMath = (event) => {
      if (event.target.id === 'add') {
        this.setState({
          current: 'add',
        })
        document.getElementById("num1").value = ''
      } else if (event.target.id === 'subtract') {
        this.setState({current: 'subtract'})
        document.getElementById("num1").value = ''
      } else if (event.target.id === 'multiply') {
        this.setState({current: 'multiply'})
        document.getElementById("num1").value = ''
      } else if (event.target.id === 'divide') {
        this.setState({current: 'divide'})
        document.getElementById("num1").value = ''
      } else if (event.target.id === "clear") {
        this.setState({
          numberOne: 0,
          numberTwo: 0,
          current: '',
        })
        document.getElementById("num1").value = ''
      } else if (event.target.id === "equal" && this.state.current === 'add') {
          document.getElementById("num1").value = Number(add(this.state.numberOne, this.state.numberTwo))
          this.setState({
            current: '',
            numberOne: 0,
            numberTwo: 0
          })
      } else if (event.target.id === "equal" && this.state.current === 'subtract') {
        document.getElementById("num1").value = Number(subtract(this.state.numberOne, this.state.numberTwo))
        this.setState({
          current: '',
          numberOne: 0,
          numberTwo: 0
          })
      } else if (event.target.id === "equal" && this.state.current === 'multiply') {
        document.getElementById("num1").value = Number(multiply(this.state.numberOne, this.state.numberTwo))
        this.setState({
          current: '',
          numberOne: 0,
          numberTwo: 0
          })
      } else if (event.target.id === "equal" && this.state.current === 'divide') {
        document.getElementById("num1").value = Number(divide(this.state.numberOne, this.state.numberTwo))
        this.setState({
          current: '',
          numberOne: 0,
          numberTwo: 0
          })
      } 
}
handleClick = (event) => {
  if (event.target.id === 'one' && this.state.current === '') {
    document.getElementById("num1").value = (document.getElementById("num1").value + 1)
    this.setState({numberOne: Number(document.getElementById("num1").value)})
  } else if (event.target.id === 'one' && this.state.current !== '') {
    document.getElementById("num1").value = (document.getElementById("num1").value + 1)
    this.setState({numberTwo: Number(document.getElementById("num1").value)})
  } else if (event.target.id === 'two' && this.state.current === '') {
    document.getElementById("num1").value = (document.getElementById("num1").value + 2)
    this.setState({numberOne: Number(document.getElementById("num1").value)})
  } else if (event.target.id === 'two' && this.state.current !== '') {
    document.getElementById("num1").value = (document.getElementById("num1").value + 2)
    this.setState({numberTwo: Number(document.getElementById("num1").value)})
  } else if (event.target.id === 'three' && this.state.current === '') {
    document.getElementById("num1").value = (document.getElementById("num1").value + 3)
    this.setState({numberOne: Number(document.getElementById("num1").value)})
  } else if (event.target.id === 'three' && this.state.current !== '') {
    document.getElementById("num1").value = (document.getElementById("num1").value + 3)
    this.setState({numberTwo: Number(document.getElementById("num1").value)})
  } else if (event.target.id === 'four' && this.state.current === '') {
    document.getElementById("num1").value = (document.getElementById("num1").value + 4)
    this.setState({numberOne: Number(document.getElementById("num1").value)})
  } else if (event.target.id === 'four' && this.state.current !== '') {
    document.getElementById("num1").value = (document.getElementById("num1").value + 4)
    this.setState({numberTwo: Number(document.getElementById("num1").value)})
  } else if (event.target.id === 'five' && this.state.current === '') {
    document.getElementById("num1").value = (document.getElementById("num1").value + 5)
    this.setState({numberOne: Number(document.getElementById("num1").value)})
  } else if (event.target.id === 'five' && this.state.current !== '') {
    document.getElementById("num1").value = (document.getElementById("num1").value + 5)
    this.setState({numberTwo: Number(document.getElementById("num1").value)})
  } else if (event.target.id === 'six' && this.state.current === '') {
    document.getElementById("num1").value = (document.getElementById("num1").value + 6)
    this.setState({numberOne: Number(document.getElementById("num1").value)})
  } else if (event.target.id === 'six' && this.state.current !== '') {
    document.getElementById("num1").value = (document.getElementById("num1").value + 6)
    this.setState({numberTwo: Number(document.getElementById("num1").value)})
  } else if (event.target.id === 'seven' && this.state.current === '') {
    document.getElementById("num1").value = (document.getElementById("num1").value + 7)
    this.setState({numberOne: Number(document.getElementById("num1").value)})
  } else if (event.target.id === 'seven' && this.state.current !== '') {
    document.getElementById("num1").value = (document.getElementById("num1").value + 7)
    this.setState({numberTwo: Number(document.getElementById("num1").value)})
  } else if (event.target.id === 'eight' && this.state.current === '') {
    document.getElementById("num1").value = (document.getElementById("num1").value + 8)
    this.setState({numberOne: Number(document.getElementById("num1").value)})
  } else if (event.target.id === 'eight' && this.state.current !== '') {
    document.getElementById("num1").value = (document.getElementById("num1").value + 8)
    this.setState({numberTwo: Number(document.getElementById("num1").value)})
  } else if (event.target.id === 'nine' && this.state.current === '') {
    document.getElementById("num1").value = (document.getElementById("num1").value + 9)
    this.setState({numberOne: Number(document.getElementById("num1").value)})
  } else if (event.target.id === 'nine' && this.state.current !== '') {
    document.getElementById("num1").value = (document.getElementById("num1").value + 9)
    this.setState({numberTwo: Number(document.getElementById("num1").value)})
  } else if (event.target.id === 'zero' && this.state.current === '') {
    document.getElementById("num1").value = (document.getElementById("num1").value + 0)
    this.setState({numberOne: Number(document.getElementById("num1").value)})
  } else if (event.target.id === 'zero' && this.state.current !== '') {
    document.getElementById("num1").value = (document.getElementById("num1").value + 0)
    this.setState({numberTwo: Number(document.getElementById("num1").value)})
  } 
}
    render(){

    return(
    <div className="calculator">
            <h1 className="title">Calculator</h1>
            <div className="inpContainer">
            <input type="number" className="inp" id="num1" onChange={this.numChange} />
            </div>
            <div className="btnContainter">
              <button id="add" className="calcBtnFunc" onClick={this.handleMath} >+</button>
              <button id="subtract" className="calcBtnFunc" onClick={this.handleMath} >-</button>
              <button id="multiply" className="calcBtnFunc" onClick={this.handleMath} >*</button>
              <button id="divide" className="calcBtnFunc" onClick={this.handleMath} >/</button>
              <br/>
              <button id='one' className="calcBtn" onClick={this.handleClick}>1</button>
              <button id='two' className="calcBtn" onClick={this.handleClick}>2</button>
              <button id='three' className="calcBtn" onClick={this.handleClick}>3</button>
              <button id='four' className="calcBtn" onClick={this.handleClick}>4</button>
              <br/>
              <button id='five' className="calcBtn" onClick={this.handleClick}>5</button>
              <button id='six' className="calcBtn" onClick={this.handleClick}>6</button>
              <button id='seven' className="calcBtn" onClick={this.handleClick}>7</button>
              <button id='eight' className="calcBtn" onClick={this.handleClick}>8</button>
              <br/>
              <button id='decimal' className="calcBtn" onClick={this.handleClick}>.</button>
              <button id='nine' className="calcBtn" onClick={this.handleClick}>9</button>
              <button id='zero' className="calcBtn" onClick={this.handleClick}>0</button>
              <button id="equal" className="calcBtnFunc" onClick = {this.handleMath}>=</button>
              <br/>
              <button id="clear"className="clear" onClick = {this.handleMath}>Clear</button>
            </div>
            <br />
            
          </div>
    )
    }
}
export default Calculator