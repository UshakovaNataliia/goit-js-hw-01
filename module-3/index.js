//______________task-1________________

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };
// user.mood ='happy';
// user.hobby= 'skydiving';
// user.premium = false;

// for (const keys of Object.entries(user)) {
//     const key = keys[0];
//     const value = keys[1];
//     console.log(`${key}: ${value}`);
//   }



//______________task-2________________

// const countProps = function(obj) {
//  return Object.entries(obj).length;
// };

// console.log(countProps({})); // 0
// console.log(countProps({ name: 'Mango', age: 2 })); // 2
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3



//______________task-3________________

// const findBestEmployee = function(employees) {
//  for(let el of Object.keys(employees)) {
//   let value = Object.values(employees);
// value = Math.max(...value);
// if(employees[el]===value) {
//   return el;
//   }
// }
// };

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux



//______________task-4________________

// const countTotalSalary = function(employees) {
//     const values = Object.values(employees);
//     let sum = 0;
//     for (const el of values) {
//         sum += el;
//     }
//     return sum;
// };

// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400




//______________task-5________________

// Напиши функцию getAllPropValues(arr, prop), которая получает 
// массив объектов и имя свойства. Возвращает массив значений 
// определенного свойства prop из каждого объекта в массиве.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function(arr, prop) {
// let newArr = [];
// for (let el of arr) {
//   el[prop] && newArr.push(el[prop]);
// }
// return newArr;
// };

// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []



//______________task-6________________

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function(allProdcuts, productName) {
//   let mul; 
 
//   for (let value of allProdcuts) {
//     let el = Object.values(value)
//    el[0] === productName ? mul = el[1]*el[2] : '';
//   }   
//   return mul;
// };

// console.log(calculateTotalPrice(products, 'Радар')); // 5200
// console.log(calculateTotalPrice(products, 'Дроид')); // 2800







// Дополнительное, не обязательное(пока не готово)
//______________task-7________________

// Напиши скрипт управления личным кабинетом интернет банка. 
// Есть объект account в котором необходимо реализовать методы 
// для работы с балансом и историей транзакций.

/*
 Типов транзацкий всего два.
 Можно положить либо снять деньги со счета.
 */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
// Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//   Метод создает и возвращает объект транзакции.
//   Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {},

//   /*
//   Метод отвечающий за добавление суммы к балансу.
//   Принимает сумму танзакции.
//   Вызывает createTransaction для создания объекта транзакции
//   после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {},

//   /*
//   Метод отвечающий за снятие суммы с баланса.
//   Принимает сумму танзакции.
//   Вызывает createTransaction для создания объекта транзакции
//   после чего добавляет его в историю транзакций.

//   Если amount больше чем текущий баланс, выводи сообщение
//   о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {},

//   /*
//   Метод возвращает текущий баланс
//    */
//   getBalance() {},

//   /*
//   Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {},

//   /*
//   Метод возвращает количество средств
//   определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {},
// };