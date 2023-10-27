'use strict';
const Calculator = require('./../src/Calculator');
// test('1 + 1 = 2', () => {
//   expect(1 + 1).toBe(2);
// });

// test('3 + 2 = 5', () => {
//   expect(3 + 2).toBe(5);
// });

// const add = (a, b) => a + b;

// test('1 + 1 = 2', () => {
//   expect(add(1, 1)).toBe(2);
// });

// test('3 + 2 = 5', () => {
//   expect(add(3, 2)).toBe(5);
// });

it('return 0 when prop num1 is not set', () => {
  const calc = new Calculator();
  expect(calc.num1).toBe(0);
});
