import React from 'react'
import './AccountsCompStyle.css'
class AccountsCardComp extends React.Component {
    constructor() {
        super()
        this.state = {
            changeInp: 0
        }
    }
    handleChange = (event) => {
        if (event.target.id === "changeInp") {
            return(this.setState({changeInp: event.target.value}))
        }
    }
    render() {
        return(
            <div className="card">
                <h3>Account Name:  {this.props.name}</h3>
                <h3>Account Balance:  ${Number(this.props.balance)}</h3>
                <input 
                onChange = {this.props.changeInp}
                id = {"changeInp"+this.props.id}
                className = "accInp" 
                type = "number"
                value={this.props.value}
                />
                <br />
                <button
                id = {"depositBtn"+this.props.id} 
                className = "accbtn"
                onClick = {this.props.clicks} 
                >
                Deposit
                </button>
                <button 
                // id = "withdraw"
                id = {"wthdrawBtn"+this.props.id} 
                className = "accbtn"
                onClick = {this.props.clicks} 
                >
                Withdraw
                </button>
                <button 
                // id = "delete"
                id = {"delete-Btn"+this.props.id} 
                className="accbtn"
                onClick = {this.props.clicks} 
                >
                Delete
                </button>
            </div>
        )
    }
}

export default AccountsCardComp