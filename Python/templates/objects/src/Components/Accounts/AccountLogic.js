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