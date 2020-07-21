// _____________task-1__________________

// const logItems = function(array) {
//   for (let i=0; i < array.length; i++) {
//   console.log(`${i+1} - ${array[i]}`);
//   }
// };

// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);




// _____________task-2__________________

// const calculateEngravingPrice = function (message, pricePerWord) {
//     let messageLength = message.split(' ');
//     console.log(messageLength.length * pricePerWord);
// };

// calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10); // 80
// calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20); // 160
// calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40); // 240
// calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20); // 120



// _____________task-3__________________

// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) 
// и возвращает самое длинное слово в этой строке.

// const findLongestWord = function(string) {
//     let word = null;
//     let longestWord = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (string[i].length > longestWord) {
//         longestWord = string[i].length;   
//         word = string[i]
//         }    
//     }
// return word;
// };
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'.split(' '))); // 'jumped'
// console.log(findLongestWord('Google do a roll'.split(' '))); // 'Google'
// console.log(findLongestWord('May the force be with you'.split(' '))); // 'force'



// _____________task-4__________________

// const formatString = function(string) {
// let str = string.split("");
// str.splice(40);
// str.push("...");
// str = str.join("");
// return string.length <= 40 ? string : str;
//     //// return string.length <= 40 ? string : string.split('').splice(40).push('...').join(' ');

// };

// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

// console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
// // вернется форматированная строка



// _____________task-5__________________

// const checkForSpam = function(message) {
//       message = message.toLowerCase();
//       return message.includes('spam') || message.includes('sale') ? true : false;
// };

// console.log(checkForSpam('Latest technology news')); // false
// console.log(checkForSpam('JavaScript weekly newsletter')); // false
// console.log(checkForSpam('Get best sale offers now!')); // true
// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true



// _____________task-6__________________

//   let input;
//   const numbers = [];
//   let total = 0;

// for (let i = 0; input !== null; i ++) {
//   input = prompt("Введите число");
//   numbers.push(+input);
//   !isNaN(input) ? total += +input : alert("Введено не число");
//   console.log(numbers);
// }
// alert(`Общая сумма чисел равна ${total}`);




// _____________task-7__________________Пока не готово(((


// Есть массив logins с логинами пользователей. Напиши скрипт добавления логина в массив logins. Добавляемый логин должен:

// проходить проверку на длину от 4 до 16-ти символов включительно
// быть уникален, то есть отсутствовать в массиве logins
// Разбей задачу на подзадачи с помощью функций.

// Напиши функцию isLoginValid(login), в которой проверь количество символов параметра login и верни true или false в зависимости от того, 
// попадает ли длина параметра в заданный диапазон от 4-х до 16-ти символов включительно.

// Напиши функцию isLoginUnique(allLogins, login), которая принимает список всех логинов и добавляемый логин как параметры 
// и проверяет наличие login в массиве allLogins, возвращая true если такого логина еще нет и false если логин уже используется.

// Напиши функцию addLogin(allLogins, login) которая:

// Принимает новый логин и массив всех логинов как параметры
// Проверяет валидность логина используя вспомогательную функцию isLoginValid
// Если логин не валиден, прекратить исполнение функции addLogin и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
// Если логин валиден, функция addLogin проверяеть уникальность логина с помощью функции isLoginUnique
// Если isLoginUnique вернет false, тогда addLogin не добавляет логин в массив и возвращает строку 'Такой логин уже используется!'
// Если isLoginUnique вернет true, addLogin добавляет новый логин в logins и возвращает строку 'Логин успешно добавлен!'
// 🔔 Принцип единственной ответственности функции - каждая функция делает что-то одно. Это позволяет переиспользовать код 
// и изменять логику работы функции только в одном месте, не затрагивая работу программы в целом.

// Предикатные функции возвращают только true или false. Такие функции принято называть начиная с is: isLoginUnique и isLoginValid 
// в нашем случае.

// isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false.
// isLoginValid только проверяет валидный ли логин и возвращает true или false.
// addLogin добавляет или не добавляет логин в массив. При этом для проверок условия добавления использует результаты 
// вызовов других функций - isLoginUnique и isLoginValid.
// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const isLoginValid = function(login) {
//   // твой код
// };

// const isLoginUnique = function(allLogins, login) {
//   // твой код
// };

// const addLogin = function(allLogins, login) {
//   // твой код
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
// console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'