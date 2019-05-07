import React from 'react'
import Accounts from './AccountsLogic'
import './AccountsCompStyle.css'
import AccountsCardComp from './AccountsCardComp'
import AccountInfoCard from './AccountInfoCard'

class AccountsComp extends React.Component {
    constructor() {
        super()
        this.accounts = new Accounts()
        this.state = {
            inpName: '',
            inpBal: '',
            changeInp: '',
            accounts: this.accounts,
            currentAccount: '',
            total: 0, 
            largest: "No Accounts",
            smallest: "No Accounts",
        }
    }
    // OnChange hadler that updates state values on every key stroke
    handleInp = (event) => {
        if (event.target.id === "inpAccName") {
            this.setState({inpName: event.target.value})
        } else if (event.target.id === "inpAccBal") {
            this.setState({inpBal: event.target.value})
        } else if (event.target.id.includes("changeInp")) {
            console.log(`input CHNG detected, array/acct index: ${event.target.id.slice("changeInp".length)}`)
            return(this.setState({
                changeInp: event.target.value,
                currentAccount: event.target.id.slice("changeInp".length)
            }))
        }
    }
    //Click handler for everything on the AccountsComp
    handleClick = (event) => {
        //adds a new account to the accounts array depending on values
        //inputed by the user
        if (event.target.id === "addAcc" && this.state.inpName !== '') {
            let a = this.state.inpName
            let b = Number(this.state.inpBal)
            this.accounts.addAccount(a, b)
            console.log(this.accounts.accountsArray)
            // Sets the state of visual changing values
            this.setState({
                total: this.accounts.totalOfAccounts(),
                accounts: this.accounts,
                inpName: '',
                inpBal: '',
                largest: this.accounts.findHighest(),
                smallest: this.accounts.findLowest(),
            })
            // Functionality for the delete button on all of the cards
            // that grabs the uniqe id from the map function for targeting
        } else if (event.target.id.includes("delete-Btn")) {
            const index = event.target.id.slice(10)
            this.accounts.removeAccount(this.accounts.accountsArray[index])
            this.setState({accounts: this.accounts})
                // fixed bug where the on click was trying to map an empty 
                // array and was returning an error
                if (this.accounts.accountsArray.length >= 1) {
                    return(this.setState({
                            total: this.accounts.totalOfAccounts(),
                            largest: this.accounts.findHighest(),
                            smallest: this.accounts.findLowest(),
                    }))
                } else {this.setState({
                            total: 0,
                            largest: "No Accounts",
                            smallest: "No Accounts",
                        })}
            // Functionality for the withdraw button on all of the cards
            // that grabs the uniqe id from the map function for targeting
        } else if (event.target.id.includes("wthdrawBtn")) {
            console.log("withdraw clicked")
            let a = Number(this.state.changeInp)
            const index = event.target.id.slice(10)
            this.accounts.accountsArray[index].withdraw(a)
            // Resets the state for the total, higests, and lowest 
            // after the change is made to the array
            this.setState({
                accounts: this.accounts,
                changeInp: '',
                total: this.accounts.totalOfAccounts(),
                largest: this.accounts.findHighest(),
                smallest: this.accounts.findLowest(),
            })
            // Functionality for the deposit button on all of the cards
            // that grabs the uniqe id from the map function for targeting
        } else if (event.target.id.includes("depositBtn") ) {
            console.log("deposit clicked")
            console.log(`event.target.id: ${event.target.id}`)
            console.log(`accoutn/arry index: ${event.target.id.slice(10)}`)
            let a = Number(this.state.changeInp)
            const index = event.target.id.slice(10)
            this.accounts.accountsArray[index].deposit(a)
            // Resets the state for the total, higests, and lowest 
            // after the change is made to the array
            this.setState({
                accounts: this.accounts,
                changeInp: '',
                total: this.accounts.totalOfAccounts(),
                largest: this.accounts.findHighest(),
                smallest: this.accounts.findLowest(),
            })
        } else {
            return(alert("Please Enter a Name and Balance"))
        }
    }
    render() {
        //Maps the accounts.accountsArray and returns important values
        //into props for a react component
        let mapped = this.state.accounts.accountsArray.map((props, index) => 
        <AccountsCardComp
        key={index}
        id={index}
        name={props.name}
        balance={props.balance}
        clicks={this.handleClick}
        changeInp = {this.handleInp}
        value={this.state.changeInp}
        />)
        return(
            <div className="AccountsCompMain">
                <h1>Accounts</h1>
                <input 
                    value = {this.state.inpName}
                    className = "accInp"
                    type = "text" 
                    id = "inpAccName" 
                    onChange = {this.handleInp} 
                    placeholder = "Account Name"
                    />
                <input 
                    value = {this.state.inpBal}
                    className = "accInp"
                    type="number" 
                    id="inpAccBal" 
                    onChange={this.handleInp} 
                    placeholder="Account Balance"
                    />
                <button
                id="addAcc"
                onClick={this.handleClick}
                className="accbtn"
                >Add Account</button>
                <div className="cardContainer">
                {mapped}
                </div>
                <AccountInfoCard 
                total = {this.state.total}
                largest = {this.state.largest}
                smallest = {this.state.smallest}
                />
            </div>
        )
    }
}
export default AccountsComp