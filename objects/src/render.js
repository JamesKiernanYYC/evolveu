import React from 'react'
import ReactDOM from 'react-dom'
import checkingAccount from './Components/account'

const Test = () => {
    return(
        <div>
            <h1>Test!</h1>
            <h1>{checkingAccount.name}</h1>
            <p>{checkingAccount.ballance}</p>
        </div>
    )
}

ReactDOM.render(<Test />, document.getElementById('root'))