import Accounts from './AccFormLogic'

test('isworking', () => {
    const bob = new Accounts('bob', 10)
    expect(bob.name).toBe('bob')
    expect(bob.balance).toBe(10)
    expect(bob.deposit(10)).toBe(20)
    expect(bob.withdraw(10)).toBe(10)

})