import React, { Component } from 'react';
import  Account  from './AccFormLogic'
import Accounts from './AccFormController'
import AccCard from './AccCard'
import MinMaxTotal from './MinMaxTotal';
// import Controller from './AccFormController'
class AccountForm extends Component {
  constructor() {
    super()
    
  }
 render() {
     let accountsContainer = new Accounts()
     const handleClick = (event) => {
     const nameInput = document.getElementById('a').value
     const balanceInput = document.getElementById('b').value
     const createAccount = new Account(nameInput, balanceInput)
     console.log(createAccount)
     accountsContainer.addAccount(createAccount)
     console.log(accountsContainer)
     
   }
   
   let accounts = accountsContainer.accountsArray.map(account => <AccCard name={account.name} balance={account.balance} />)
   console.log(accounts)
   return(
     <div>
     <input id="a"type="text" />
     <input id="b" type="text" />
     <button onClick={handleClick}>Create Account</button>
      {accounts}
     </div>
   )
 }
}
 export default AccountForm