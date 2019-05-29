import Account from './AccountLogic'

class Accounts { 
    constructor(){
        this.accountsArray = []
        this.account = new Account()
    }
    addAccount(a, b) {
       return this.accountsArray.push(new Account(a, b))
    }
    removeAccount(Acc) {
        this.accountsArray.splice((this.accountsArray.indexOf(Acc)), 1)
    }
   totalOfAccounts() {
       const reducer = (accumulator, currentVal) => accumulator + currentVal
       const mapped = this.accountsArray.map(Account => Account.balance);
       return mapped.reduce(reducer)
   }
   findHighest() {
    this.highest = this.accountsArray.reduce((prev, current) => (prev.balance > current.balance) ? prev : current)
    return `${this.highest.name}, $${this.highest.balance}`
    }
   findLowest() {
    this.lowest = this.accountsArray.reduce((prev, current) => (prev.balance < current.balance) ? prev : current)
    return `${this.lowest.name}, $${this.lowest.balance}`
    }
}
export default Accounts