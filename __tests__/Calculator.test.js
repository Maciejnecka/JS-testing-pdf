// 'use strict';
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
// const Calculator = require('./../src/Calculator');

// describe('Calculator', () => {
//   describe('Prop num1', () => {
//     it('return 0 when prop is not set', () => {
//       const calc = new Calculator();
//       expect(calc.num1).toBe(0);
//     });
//     it('return 4 when prop is set to 4 in constructor', () => {
//       const value = 4;
//       const calc = new Calculator(value);
//       expect(calc.num1).toBe(value);
//     });
//     it('throw expection when prop is not a number', () => {
//       function createCalculator() {
//         new Calculator('4');
//       }
//       expect(createCalculator).toThrow();
//     });
//   });

//   describe('Prop num2', () => {
//     it('return 0 when prop is not set', () => {
//       const calc = new Calculator();
//       expect(calc.num2).toBe(0);
//     });
//     it('return 4 when prop is set to 4 in constructor', () => {
//       const value = 4;
//       const calc = new Calculator(undefined, value);
//       expect(calc.num2).toBe(value);
//     });

//     it('throw expection when prop is not a number', () => {
//       function createCalculator() {
//         new Calculator(undefined, '4');
//       }
//       expect(createCalculator).toThrow();
//     });
//   });

//   describe('Method add()', () => {
//     it('return 7 when num1 = 4 and num2 = 3', () => {
//       const calc = new Calculator(4, 3);
//       const result = calc.add();
//       expect(result).toBe(7);
//     });
//   });
// });

import Calculator from './../src/Calculator';

describe('Calculator', () => {
  // scenario
  it('Should return 3 when insert 1 and 2', () => {
    // given
    const calc = new Calculator(1, 2);
    // when
    const promise = calc.add();
    // then
    return promise.then((result) => {
      expect(result).toBe(3);
    });
  });

  it('Should return 0 when not inset numbers', async () => {
    // given
    const calc = new Calculator();
    // when
    const result = await calc.add();
    // then
    expect(result).toBe(0);
  });

  it('Should throw expection when insert not a number', () => {
    //given
    function createCalc() {
      // when
      new Calculator('X');
      new Calculator(undefined, 'X');
    }
    // then
    expect(createCalc).toThrow();
  });

  it('Should reject when divine by 0', () => {
    expect.assertions(1);
    // given
    const calc = new Calculator(2, 1);
    //when
    return calc.divide().catch((err) => {
      //then
      expect(err.message).toBe('Division by 0!');
    });
  });
});
