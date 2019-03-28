    //create a class of Accounts and set 2 params that are
    //name and balance
class Account {
    constructor(name,balance){
    this.name = name;
    this.balance = balance;
    }
    deposit = (inp) => {
        return (this.balance = this.balance + inp)
    }
    withdraw = (inp) => {
        return (this.balance = this.balance - inp)
    }
    }
export default Account 

