import React from 'react'
import ReactDOM from 'react-dom'

const checkingAccount = (ballance, name) => {
    ballance = 25
    name = "James"
}




const Test = () => {
    return(
        <div>
        <h1>{checkingAccount.name}</h1>
        <p>{checkingAccount.ballance}</p>
        </div>
    )
}













ReactDOM.render(<h1>{checkingAccount.ballance}</h1>, document.getElementById('root'))