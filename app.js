'use strict';

// function getSum(a, b) {
//   return 2;
// }

// console.log(
//   getSum(0, 2) === 2,
//   getSum(-1, 3) === 2,
//   getSum(2, 0) === 2,
//   getSum(4, -2) === 2
// );

// class Calculator {
//   constructor() {
//     this.a = 0;
//     this.b = 0;
//   }

//   setA(aToSet) {
//     this.a = aToSet;
//   }
//   setB(bToSet) {
//     this.b = bToSet;
//   }
// }

// const calc = new Calculator();
// const aValue = 5;
// calc.setA(aValue);
// console.log(calc.a === aValue);

// class Tasks {
//   constructor() {
//     this.list = [];
//   }
//   add(name) {
//     this.list.push(name);
//   }
// }

// const workTasks = new Tasks();
// const btn = document.querySelector('button');

// // utworzenie rozwiazania
// btn.addEventListener('click', () => {
//   workTasks.add('New task');
// });

// // testowanie rozwiazania

// btn.click(); // wywołanie zdarzenia
// console.log(workTasks.list.length === 1);
// // sprawdzenie, czy zadanie zostało dodane

// const btnEl = document.querySelector('button');
// const inputEl = document.querySelector('.name');

// if (btnEl && inputEl) {
//   btnEl.classList.add(inputEl.value);
// }
// console.group('for nr 1');
// console.time('time-for1');
// for (let i = 0; i < 4; i++) {
//   console.count('for1');
// }
// console.timeEnd('time-for1');
// console.groupEnd();

// console.groupCollapsed('For nr 2');
// console.time('time-for2');
// for (let i = 0; i < 2; i++) {
//   console.count('for2');
// }
// console.timeEnd('time-for2');
// console.groupEnd();

// init();

// function init() {
//   const bigger = getBigger();
//   console.log(bigger);
// }

// function getBigger() {
//   const a = randomNumber();
//   const b = randomNumber();

//   if (a > b) {
//     return a;
//   }
//   return b;
// }

// function randomNumber() {
//   console.trace();
//   return Math.random();
// }

// const arr = [1, 2, 3];
// console.log(arr);
// console.dir(arr);

// arr.push(4);
// console.log(arr);
// console.dir(arr);

// const arr = [
//   { firstName: 'Jan', lastName: 'Kowalski' },
//   { firstName: 'Andrzej', lastName: 'Nowak' },
//   { firstName: 'Julia', lastName: 'Polak' },
// ];

// console.table(arr);

// init();

// function init() {
//   const bigger = getBigger();
//   console.log(bigger);
// }

// function getBigger() {
//   const a = randomNumber();
//   const b = randomNumber();

//   if (a > b) {
//     return a;
//   }
//   return b;
// }

// function randomNumber() {
//   return Math.random();
// }

// const btnEl = document.querySelector('.not-exist');
// btnEl.classList.add('new-class');
// function addClass() {
//   try {
//     const btnEl = document.querySelector('.not-exist');
//     btnEl.classList.add('new-class');
//   } catch (e) {
//     console.log('Szczegóły błędu: ');
//     console.log('Nazwa: ', e.name);
//     console.log('Wiadomość: ', e.message);
//   } finally {
//     alert('Tak czy inaczej poradzimy sobie!');
//   }
// }
// try {
//   addClass();
// } catch (e) {
//   console.error('Komunikat nie będzie widoczny!');
// }

// try {
//   const btnEl = document.querySelector('.not-exist');

//   btnEl.classList.add('new-class');
// } catch (e) {
//   if (e instanceof ReferenceError) {
//     console.warn('Złe przypisanie');
//   } else if (e instanceof TypeError) {
//     console.error('Zła wartość');
//   }
// } finally {
//   alert('Tak czy inazcej poradzimy sobie!');
// }

// function getBasketPrice(items) {
//   if (!Array.isArray(items)) {
//     throw new TypeError('Param is not an array');
//   }
//   items.reduce((acc, item) => {
//     const { price = -1, count = -1 } = item;
//     if (price < 0 || count < 0) {
//       throw new RangeError('The value cannot be negatie');
//     }
//     return acc + price * count;
//   }, 0);
// }
// try {
//   const price = getBasketPrice([{}, {}]);
// } catch (e) {
//   console.dir(e);
// }
(function () {
  'use strict';
  console.log('Tryb ścisły włączony');
})();

console.log('brak trybu ścisłego');
