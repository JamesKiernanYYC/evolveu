import React, { Component } from 'react';
// import { one, two, three, four, five, six, seven, eight, nine, zero, decimal, clear, add, subtract, multiply, divide } from './calc'

class Calc extends Component {
    
    render(){

    return(
    <div className="calculator">
    <br/>
    <br/>
    <br/>
            <h1 className="title">Calculator</h1>
            <input type="text" className="inp" id="view"/>
            <div className="btnContainter">
              <button className="calcBtnFunc">+</button>
              <button className="calcBtnFunc">-</button>
              <button className="calcBtnFunc">*</button>
              <button className="calcBtnFunc">/</button>
              <br/>
              <button  className="calcBtn">1</button>
              <button  className="calcBtn">2</button>
              <button  className="calcBtn">3</button>
              <button  className="calcBtn">4</button>
              <br/>
              <button  className="calcBtn">5</button>
              <button  className="calcBtn">6</button>
              <button  className="calcBtn">7</button>
              <button  className="calcBtn">8</button>
              <br/>
              <button  className="calcBtn">.</button>
              <button  className="calcBtn">9</button>
              <button  className="calcBtn">0</button>
              <button  className="calcBtnFunc">C</button>
              <br/>
              <button className="clear">Clear</button>
            </div>
            <br />
            
          </div>
    )
    }
}
export default Calc