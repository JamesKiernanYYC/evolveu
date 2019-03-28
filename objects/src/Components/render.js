import React from 'react'
import ReactDOM from 'react-dom'
import checkingAccount from './account'

const Test = () => {
    return(
        <div>
            <h1>hsfjhsdkjhfsdkjh{checkingAccount.name}</h1>
            <p>{checkingAccount.ballance}</p>
        </div>
    )
}

ReactDOM.render(<Test />, document.getElementById('root'))