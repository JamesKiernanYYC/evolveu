import Account from './AccountLogic'

test('Initialising Account Functionality', () => {
    const testAccount = new Account('bob', 10)
    const testAccount2 = new Account('James', 200)
    expect(testAccount.name).toBe('bob')
    expect(testAccount.balance).toBe(10)
    expect(testAccount2.name).toBe('James')
    expect(testAccount2.balance).toBe(200)
})

test('Deposit Method', () => {
    const testAccount = new Account('bob', 10)
    const testAccount2 = new Account('James', 200)
    const a = 50
    const b = 60
    expect(testAccount.deposit(a)).toBe(60)
    expect(testAccount2.deposit(b)).toBe(260)
})
test('Withdraw Method', () => {
    const testAccount = new Account('bob', 10)
    const testAccount2 = new Account('James', 200)
    const a = 50
    const b = 60
    expect(testAccount.withdraw(a)).toBe(-40)
    expect(testAccount2.withdraw(b)).toBe(140)
})
