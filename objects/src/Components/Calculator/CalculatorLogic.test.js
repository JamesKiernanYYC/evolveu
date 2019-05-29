import { add, subtract, multiply, divide } from './CalculatorLogic'

test('Calculator Functionality', () => {
    const a = 15
    const b = 5
    expect(add(a,b)).toBe(a + b)
    expect(subtract(a, b)).toBe(a - b)
    expect(multiply(a, b)).toBe(a * b)
    expect(divide(a, b)).toBe(a / b)
})