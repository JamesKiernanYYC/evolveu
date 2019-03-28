import math from "./math"

test('Test the math functions', () => {
	console.log('Hello World');
	expect(math.sum(1,2)).toBe(3);
});
test('Test the math functions', () => {
	console.log('Hello World');
	expect(math.mult(1,2)).toBe(2);
});
test('Test the math functions', () => {
	console.log('Hello World');
	expect(math.div(1,2)).toBe(0.5);
});
test('Test the math functions', () => {
	console.log('Hello World');
	expect(math.remainder(1,2)).toBe(-1);
});