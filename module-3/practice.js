//1. Напишите функцию isEmpty(obj), которая возвращает true,
// если у объекта нет свойств, иначе false.


// const isEmpty = function(obj) {
   
//     return Object.keys(obj).length === 0 ? true : false;
//  }
//  let schedule = {};
//  console.log(isEmpty(schedule)); // true
 
//  schedule["8:30"] = "get up";
//  console.log(isEmpty(schedule)); // false

//2. // У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }
// const values = Object.values(salaries);
// let sum = 0;
// for (const el of values) {
//     sum += el;
// }
// console.log(sum);
  // Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
  
  // Если объект salaries пуст, то результат должен быть 0.

//3. // Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
// //   let values = Object.values(menu)*2;
//  const multiplyNumeric = function(obj) {
//     // let arr = Object.values(obj);
//     for (let key in obj) {
//         if (typeof obj[key] === 'number') {
//             obj[key]*=2;
//         }
//     //    return typeof obj[key] === 'number' ? console.log(obj[key]*=2) : console.log(obj[key]);;
        
//     }
// }
// multiplyNumeric(menu);
// console.log(menu);


// 23.07
// #1

  // Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет', }.
// Запишите соответствующие значения в переменные name, surname и age.
// Сделайте так, чтобы, если какое-то значение не задано - оно принимало
//  следующее значение по умолчанию: {name: 'Аноном', 'surname': 'Анонимович', 'age': '? лет'}.
// let obj = {
//   name: 'Петр', 
//   surname: 'Петров', 
//   age: '20 лет' 
// };
//  let {name= 'Аноном', surname= 'Анонимович', age= '? лет'} = obj;
// console.log(name, surname, age);



// #2
//! FizzBuzz
// Одна из самых популярных на собеседованиях задач.
// Постановка
// Требуется написать функцию, выводящую в консоль числа от 1 до n,
// где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.

// const fizzBuzz = function(n) {
//   for (let i=1; i<= n; i++) {
// i%3===0 && i%5===0 ? console.log('fizzbuzz') : i%3===0 ? console.log('fizz') : i%5===0 ? console.log('buzz') : console.log(i);
// }
// };
// fizzBuzz(15);



// #3

// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

// let calculator = {
// read(a, b){
//   this.a=a;
//   this.b=b;
// },
// sum() {
// let arr = Object.values(calculator);
// let sum = 0;
// for (let el of arr) {
//   typeof el === 'number' ? sum += el : 0;
// }
//  return sum;
// },
// mul() {
//   let arr = Object.values(calculator);
//   let mul = 1;
//   for (let el of arr) {
//     typeof el === 'number' ? mul *= el : 0;
//   }
//    return mul;
//   }
// };

// calculator.read(1, 2);
// alert(calculator.sum());
// alert(calculator.mul());
// console.log(calculator);



// 24.07

// const onChange = function() {
//   let total = 0;
  
  
//   const onIncrement = function(n) {
//     total += n;
//     console.log(total);
//   };

  
//   const onDecrement = function() {
//     total -= 1;
//     console.log(total);
//   };

//   const mull = function () {
//       total*=2
//       console.log(total)
//   }

//   return { onIncrement, onDecrement, mull };
// };

// let counter = onChange();
// counter.onIncrement(10);
// counter.onIncrement(3);



// let counter2 = onChange();
// ____________________
// Напишите ф-цию, которая примает аргументами 2 числа,  задающих диапазон который нужно вывести в консоль
// если в числе есть 3 - в консоль вместо него выводиться "three"
// (то есть вместо 3, 13, 23 и т.д. должно быть "three")
