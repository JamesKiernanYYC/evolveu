import React from "react"
import math from './math'
var MathComp = () => {
    return (
    <div className="calc">
        <h1>Calculator</h1>
        <input type="text" id='num1'/>
        <input type="text" id='num2'/>
        <input type="none" id='ans' />
        <button>Add</button>
        <button>Subtract</button>
        <button>Multiply</button>
        <button>Divide</button>
    </div>
    )
}

export default MathComp