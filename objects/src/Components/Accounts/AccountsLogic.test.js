import Accounts from './AccountsLogic'

test('get the total of all accounts', () => {
    const newObjects = new Accounts()
    newObjects.addAccount('James', 200)
    newObjects.addAccount('Jim', 10)
    newObjects.addAccount('Josh', 40)
    newObjects.addAccount('Julia', 60)
    expect(newObjects.totalOfAccounts()).toBe(310)
})
test('get the largest ballance of the accounts', () => {
    const newObjects = new Accounts()
    newObjects.addAccount('James', 200)
    newObjects.addAccount('Jim', 10)
    newObjects.addAccount('Josh', 40)
    newObjects.addAccount('Julia', 60)
    expect(newObjects.findHighest()).toBe('James, $200')

})
test('get the smallest ballance of the accounts', () => {
    const newObjects = new Accounts()
    newObjects.addAccount('James', 200)
    newObjects.addAccount('Jim', 10)
    newObjects.addAccount('Josh', 40)
    newObjects.addAccount('Julia', 60)
    expect(newObjects.findLowest()).toBe('Jim, $10') 
})
test('Adding and removing Accounts', () => {
    const newObjects = new Accounts()
    newObjects.addAccount('James', 200)
    newObjects.addAccount('Jim', 300)
})