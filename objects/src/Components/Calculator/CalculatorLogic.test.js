import { add, subtract, multiply, divide } from './CalculatorLogic'

test('add', () => {
    expect(add(10, 2)).toBe(12)
})
test('subtract', () => {
    expect(subtract(10, 2)).toBe(8)
})
test('multiply', () => {
    expect(multiply(10, 2)).toBe(20)
})
test('divide', () => {
    expect(divide(10, 2)).toBe(5)
})