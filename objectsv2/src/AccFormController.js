
class Accounts { 
    constructor(){
        this.accountsArray = []
    }
    addAccount(Acc) {
       return this.accountsArray.push(Acc)
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
       const mapped = this.accountsArray.map(Account => Account.balance);
        return Math.max(...mapped)
    }
   findLowest() {
       const mapped = this.accountsArray.map(Account => Account.balance);
       return Math.min(...mapped)
    }
}
export default Accounts